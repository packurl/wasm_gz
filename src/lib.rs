use crc32fast::Hasher;
use miniz_oxide::deflate::compress_to_vec;
use miniz_oxide::inflate::decompress_to_vec;
use wasm_bindgen::prelude::*;
use zopfli::{compress, Format, Options};

#[wasm_bindgen]
pub fn gunzip(data: &[u8]) -> Vec<u8> {
    if data.len() < 10 {
        panic!("Gzip header too short");
    }
    // 0x1f 0x8b magic number
    if data[0] != 0x1f || data[1] != 0x8b {
        panic!("Invalid gzip magic number");
    }
    // 0x08 deflate compression
    if data[2] != 0x08 {
        panic!("Invalid compression method");
    }
    let file_flag = data[3];
    // u32 timestamp
    // u8 compression flags
    // u8 filesystem flags
    let start = 10;
    let start = start
        + if file_flag & 4 != 0 {
            // extra
            (((data[start] as u16) | ((data[start + 1] as u16) << 8)) as usize) + 2
        } else {
            0
        };
    let start = start
        + if file_flag & 8 != 0 {
            // filename
            data[start..].iter().position(|it| *it == 0).unwrap() + 1
        } else {
            0
        };
    let start = start
        + if file_flag & 16 != 0 {
            // comment
            data[start..].iter().position(|it| *it == 0).unwrap() + 1
        } else {
            0
        };
    let start = start
        + if file_flag & 2 != 0 {
            let crc16 = (data[start] as u16) | ((data[start + 1] as u16) << 8);
            let mut hasher = Hasher::new();
            hasher.update(&data[0..start]);
            if crc16 != hasher.finalize() as u16 {
                panic!("header crc mismatch");
            }
            2
        } else {
            0
        };
    let end = data.len() - 8;
    let crc = (data[end] as u32)
        | ((data[end + 1] as u32) << 8)
        | ((data[end + 2] as u32) << 16)
        | ((data[end + 3] as u32) << 24);
    let length = ((data[end + 4] as u32)
        | ((data[end + 5] as u32) << 8)
        | ((data[end + 6] as u32) << 16)
        | ((data[end + 7] as u32) << 24)) as usize;
    let decompressed = decompress_to_vec(&data[start..end]).unwrap();
    if length != decompressed.len() {
        panic!("length mismatch");
    }
    let mut hasher = Hasher::new();
    hasher.update(&decompressed);
    if crc != hasher.finalize() {
        panic!("crc mismatch");
    }
    decompressed
}

fn gzip_wrap(crc: u32, length: u32, mut compressed: Vec<u8>) -> Vec<u8> {
    let mut header: Vec<u8> = vec![
        0x1f, 0x8b, // magic number
        0x08, // deflate compression
        0x00, // file flags
        0x00, 0x00, 0x00, 0x00, // timestamp
        0x00, // compression level
        0x03, // unix filesystem
    ];
    let mut footer: Vec<u8> = vec![
        crc as u8,
        (crc >> 8) as u8,
        (crc >> 16) as u8,
        (crc >> 24) as u8,
        length as u8,
        (length >> 8) as u8,
        (length >> 16) as u8,
        (length >> 24) as u8,
    ];
    header.append(&mut compressed);
    header.append(&mut footer);
    header
}

#[wasm_bindgen]
pub fn gzip(data: &[u8], level: u8) -> Vec<u8> {
    let compressed = compress_to_vec(data, level);
    let mut hasher = Hasher::new();
    hasher.update(&data);
    let crc = hasher.finalize();
    gzip_wrap(crc, data.len() as u32, compressed)
}

#[wasm_bindgen]
pub fn zopfli(data: &[u8]) -> Vec<u8> {
    let mut compressed = Vec::with_capacity(data.len() + 64);
    compress(Options::default(), Format::Deflate, data, &mut compressed).unwrap();
    let mut hasher = Hasher::new();
    hasher.update(&data);
    let crc = hasher.finalize();
    gzip_wrap(crc, data.len() as u32, compressed)
}

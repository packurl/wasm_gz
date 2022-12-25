use miniz_oxide::inflate::{decompress_to_vec};
// use std::io::Read;
// use flate2::read::DeflateDecoder;
// use libflate::deflate::Decoder;
// use inflate::inflate_bytes;
use zopfli::{compress, Format, Options};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn inflate(data: &[u8]) -> Vec<u8> {
    // -- miniz_oxide --
    decompress_to_vec(data).unwrap()

    // -- flate2 --
    // let mut decoder = DeflateDecoder::new(data);
    // let mut out = Vec::with_capacity((data.len() + 8) * 8);
    // decoder.read_to_end(&mut out).unwrap();
    // out

    // -- libflate --
    // let mut decoder = Decoder::new(data);
    // let mut out = Vec::with_capacity((data.len() + 8) * 8);
    // decoder.read_to_end(&mut out).unwrap();
    // out

    // -- inflate --
    // inflate_bytes(data).unwrap()
}

#[wasm_bindgen]
pub fn deflate(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    compress(&Options::default(), &Format::Deflate, data, &mut out).unwrap();
    out
}

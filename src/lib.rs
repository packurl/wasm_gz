use inflate::inflate_bytes;
use zopfli::{compress, Format, Options};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn inflate(data: &[u8]) -> Vec<u8> {
    inflate_bytes(data).unwrap()
}

#[wasm_bindgen]
pub fn deflate(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    compress(&Options::default(), &Format::Deflate, data, &mut out).unwrap();
    out
}

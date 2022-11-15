[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs for [zopfli](https://github.com/google/zopfli) deflate compression and inflate decompression.

This is a simple wrapper on top of the [brotli](https://github.com/zopfli-rs/zopfli) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/zopfli) for the compression and the [inflate](https://github.com/image-rs/inflate) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/inflate) for the decompression.

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:
- [zopfli](https://github.com/zopfli-rs/zopfli) ([Apache 2.0](https://github.com/zopfli-rs/zopfli/blob/main/COPYING))
- [inflate](https://github.com/image-rs/inflate) ([MIT License](https://github.com/image-rs/inflate/blob/master/LICENSE))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))

[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs for [zopfli](https://github.com/google/zopfli) gzip compression and (g)unzip decompression.

This is a simple wrapper on top of the [zopfli](https://github.com/zopfli-rs/zopfli) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/zopfli) for the compression and the [miniz_oxide](https://github.com/Frommi/miniz_oxide) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/miniz_oxide) for the decompression.

The handling of the [gzip](https://docs.fileformat.com/compression/gz/) header and footer is done in this crate to save a few bytes on the wasm files. 

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:
- [zopfli](https://github.com/zopfli-rs/zopfli) ([Apache 2.0](https://github.com/zopfli-rs/zopfli/blob/main/COPYING))
- [miniz_oxide](https://github.com/Frommi/miniz_oxide) ([MIT License](https://github.com/Frommi/miniz_oxide/blob/master/LICENSE-MIT.md))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))

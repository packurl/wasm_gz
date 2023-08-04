/* tslint:disable */
/* eslint-disable */
declare module 'zopfli_worker' {
  /**
   * Compresses an array of bytes with Zopfli Gzip compatible compression.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function zopfli(bytes: Uint8Array): Promise<Uint8Array>;
  /**
   * Decompresses an array of bytes compressed with Gzip (or Zopfli).
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function gunzip(bytes: Uint8Array): Promise<Uint8Array>;
}
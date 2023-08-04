/* tslint:disable */
/* eslint-disable */
declare module 'gz_worker' {
  export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Compresses an array of bytes with Gzip (with a minimal header).
   * @param {Uint8Array} bytes
   * @param {0|1|2|3|4|5|6|7|8|9|10} [level=10]
   * @return {Promise<Uint8Array>}
   */
  export function gzip(bytes: Uint8Array, level: CompressionLevel): Promise<Uint8Array>;
  /**
   * Decompresses an array of bytes compressed with Gzip (or Zopfli).
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function gunzip(bytes: Uint8Array): Promise<Uint8Array>;
}
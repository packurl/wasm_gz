/* tslint:disable */
/* eslint-disable */
declare module 'zopfli_enc_worker' {
  /**
   * Compresses an array of bytes with Zopfli Gzip compatible compression.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function zopfli(bytes: Uint8Array): Promise<Uint8Array>;
  export default zopfli;
}
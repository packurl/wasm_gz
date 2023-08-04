/* tslint:disable */
/* eslint-disable */
declare module 'gunzip_worker' {
  /**
   * Decompresses an array of bytes compressed with Gzip (or Zopfli).
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function gunzip(bytes: Uint8Array): Promise<Uint8Array>;
  export default gunzip;
}
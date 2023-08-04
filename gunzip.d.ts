/* tslint:disable */
/* eslint-disable */
declare module 'gunzip' {
  /**
   * Decompresses an array of bytes compressed with Gzip (or Zopfli).
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function gunzip(bytes: Uint8Array): Uint8Array;
  export default gunzip;
}
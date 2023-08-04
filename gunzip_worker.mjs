const url=new URL('gunzip.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./gunzip_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./gunzip_worker_script.mjs',import.meta.url),{type:'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Decompresses an array of bytes compressed with Gzip (or Zopfli).
 * @param {Uint8Array} bytes
 * @return {Promise<Uint8Array>}
 */
const gunzip=(bytes)=>new Promise(r=>{
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage(bytes);
});

export {gunzip};
export default gunzip;

importScripts('./gzip_for_importScripts.js');
(async()=>{
  const fn=await gzip;
  onmessage=async msg=>{
    postMessage(fn(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();
importScripts('./gunzip_for_importScripts.js');
(async()=>{
  const gunzip=await fns;
  onmessage=async msg=>{
    postMessage(gunzip(msg.data));
  }
  postMessage('ready');
})();
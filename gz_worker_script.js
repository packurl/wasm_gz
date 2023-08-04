importScripts('./gz_for_importScripts.js');
(async()=>{
  const {gunzip,gzip}=await fns;
  onmessage=async msg=>{
    if(msg.data.level===undefined) postMessage(gunzip(msg.data));
    else postMessage(gzip(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();
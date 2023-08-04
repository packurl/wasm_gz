importScripts('./zopfli_for_importScripts.js');
(async()=>{
  const fn=await zopfli;
  onmessage=async msg=>{
    if(msg.data.zopfli) postMessage(fn(msg.data.bytes))
    else postMessage(fn(msg.data));
  }
  postMessage('ready');
})();
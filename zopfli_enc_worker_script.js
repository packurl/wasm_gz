importScripts('./zopfli_enc_for_importScripts.js');
(async()=>{
  const fn=await zopfli;
  onmessage=async msg=>{
    postMessage(fn(msg.data));
  }
  postMessage('ready');
})();
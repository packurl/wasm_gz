importScripts('./gzip_zopfli_for_importScripts.js');
(async()=>{
  const {gunzip,gzip,zopfli}=await fns;
  onmessage=async msg=>{
    if(msg.data.level===undefined){
      if(msg.data.zopfli) postMessage(zopfli(msg.data.bytes));
      else postMessage(gunzip(msg.data));
    }else postMessage(gzip(msg.data.bytes,msg.data.level));
  }
  postMessage('ready');
})();
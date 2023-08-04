import {gunzip,gzip} from "./gz.mjs";
onmessage=async({data})=>postMessage(
  data.level===undefined?gunzip(data):gzip(data.bytes,data.level)
);
postMessage('ready');

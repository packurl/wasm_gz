import {gunzip} from "./gunzip.mjs";
onmessage=async({data})=>postMessage(gunzip(data));
postMessage('ready');

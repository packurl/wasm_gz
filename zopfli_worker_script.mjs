import {zopfli,gunzip} from "./zopfli.mjs";
onmessage=async({data})=>postMessage(data.zopfli?zopfli(data.bytes):gunzip(data));
postMessage('ready');

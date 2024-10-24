const gunzip=(async()=>{
  let wasm;
  const wbg={
    __wbindgen_init_externref_table: function(){
      const table=wasm.__wbindgen_export_0;
      const offset=table.grow(4);
      table.set(0,undefined);
      table.set(offset);
      table.set(offset+1,null);
      table.set(offset+2,true);
      table.set(offset+3,false);
    }
  };
  const {instance}=await WebAssembly.instantiateStreaming(await fetch('./gunzip.wasm',{cache: 'force-cache'}),{wbg});
  wasm=instance.exports;
  const malloc=wasm.__wbindgen_malloc;
  const free=wasm.__wbindgen_free;
  return it=>{
    const n1=it.length;
    const p1=malloc(n1,1);
    new Uint8Array(wasm.memory.buffer).set(it,p1);
    const [p2,n2]=wasm.gunzip(p1,n1);
    const res=new Uint8Array(wasm.memory.buffer).subarray(p2,p2+n2).slice();
    free(p2,n2);
    return res;
  };
})();

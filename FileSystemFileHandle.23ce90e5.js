!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b;(0,t.register)("42yKc",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"FileSystemFileHandle",function(){return F}),e(r.exports,"default",function(){return H});var a=t("dxPlC"),i=t("5YgkV"),s=t("74VEB"),o=t("lThNe"),u=t("6IIPT"),c=t("dCZP4"),l=t("9Um8W"),f=t("kiAno"),p=t("8Otwi"),d=t("lRPiZ"),y=t("9CDCO"),g=t("3r1mx"),b=t("3iK2v"),h=t("gKVDL"),_=h.errors.INVALID,w=h.errors.SYNTAX,v=h.errors.GONE,m=Symbol("adapter"),F=/*#__PURE__*/function(e){(0,l._)(r,e);var t=(0,d._)(r);function r(e){var n;return(0,s._)(this,r),n=t.call(this,e),(0,c._)((0,a._)(n),m,void 0),n[m]=e,n}return(0,u._)(r,[{key:"createWritable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this;return(0,i._)(function(){var r;return(0,y.__generator)(this,function(n){switch(n.label){case 0:return r=b.default.bind,[4,t[m].createWritable(e)];case 1:return[2,new(r.apply(b.default,[void 0,n.sent()]))]}})})()}},{key:"getFile",value:function(){var e=this;return(0,i._)(function(){return(0,y.__generator)(this,function(t){return[2,e[m].getFile()]})})()}}]),r}(g.default);if(Object.defineProperty(F.prototype,Symbol.toStringTag,{value:"FileSystemFileHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(F.prototype,{createWritable:{enumerable:!0},getFile:{enumerable:!0}}),globalThis.FileSystemFileHandle&&!globalThis.FileSystemFileHandle.prototype.createWritable){var O,x,D=new WeakMap,S=function(){var e,t;onmessage=(t=(0,i._)(function(t){var r,n,a,i,s,o,u,c,l,f,p;return(0,y.__generator)(this,function(d){switch(d.label){case 0:switch(r=t.ports[0],(n=t.data).type){case"open":return[3,1];case"write":return[3,13];case"truncate":return[3,14];case"abort":case"close":return[3,15]}return[3,16];case 1:return a=n.name,[4,navigator.storage.getDirectory()];case 2:i=d.sent(),s=!0,o=!1,u=void 0,d.label=3;case 3:d.trys.push([3,8,9,10]),c=n.path[Symbol.iterator](),d.label=4;case 4:if(s=(l=c.next()).done)return[3,7];return f=l.value,[4,i.getDirectoryHandle(f)];case 5:i=d.sent(),d.label=6;case 6:return s=!0,[3,4];case 7:return[3,10];case 8:return p=d.sent(),o=!0,u=p,[3,10];case 9:try{s||null==c.return||c.return()}finally{if(o)throw u}return[7];case 10:return[4,i.getFileHandle(a)];case 11:return[4,d.sent().createSyncAccessHandle()];case 12:return e=d.sent(),[3,16];case 13:return e.write(n.data,{at:n.position}),e.flush(),[3,16];case 14:return e.truncate(n.size),[3,16];case 15:return e.close(),[3,16];case 16:return r.postMessage(0),[2]}})}),function(e){return t.apply(this,arguments)})};globalThis.FileSystemFileHandle.prototype.createWritable=(O=(0,i._)(function(e){var t,r,n,a,s,u,c,l,d;return(0,y.__generator)(this,function(g){switch(g.label){case 0:return x||(t=new Blob(["(".concat(S.toString(),")()")],{type:"text/javascript"}),x=URL.createObjectURL(t)),r=new Worker(x,{type:"module"}),n=0,a=new TextEncoder,[4,this.getFile().then(function(e){return e.size})];case 1:return s=g.sent(),u=function(e){return new Promise(function(t,n){var a=new MessageChannel;a.port1.onmessage=function(e){e.data instanceof Error?n(e.data):t(e.data),a.port1.close(),a.port2.close(),a.port1.onmessage=null},r.postMessage(e,[a.port2])})},[4,navigator.storage.getDirectory()];case 2:return c=g.sent(),[4,D.get(this)];case 3:return l=g.sent(),[4,c.resolve(l)];case 4:if(null===(d=g.sent()))throw(0,o._)(DOMException,(0,p._)(v));return[4,u({type:"open",path:d,name:this.name})];case 5:if(g.sent(),(null==e?void 0:e.keepExistingData)!==!1)return[3,7];return[4,u({type:"truncate",size:0})];case 6:g.sent(),s=0,g.label=7;case 7:return[2,new b.default({start:function(e){},write:function(e){return(0,i._)(function(){var t,r,i;return(0,y.__generator)(this,function(c){switch(c.label){case 0:if("write"!==(e=(null==e?void 0:e.constructor)===Object?(0,f._)({},e):{type:"write",data:e,position:n}).type)return[3,8];if("data"in e)return[3,2];return[4,u({type:"close"})];case 1:throw c.sent(),(0,o._)(DOMException,(0,p._)(w("write requires a data argument")));case 2:if(null!==(r=(t=e).position)&&void 0!==r||(t.position=n),"string"!=typeof e.data)return[3,3];return e.data=a.encode(e.data),[3,7];case 3:if(!(e.data instanceof ArrayBuffer))return[3,4];return e.data=new Uint8Array(e.data),[3,7];case 4:if(!(!(e.data instanceof Uint8Array)&&ArrayBuffer.isView(e.data)))return[3,5];return e.data=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength),[3,7];case 5:if(e.data instanceof Uint8Array)return[3,7];return[4,new Response(e.data).arrayBuffer()];case 6:i=c.sent(),e.data=new Uint8Array(i),c.label=7;case 7:return Number.isInteger(e.position)&&e.position>=0&&(n=e.position),n+=e.data.byteLength,s+=e.data.byteLength,[3,15];case 8:if("seek"!==e.type)return[3,12];if(!(Number.isInteger(e.position)&&e.position>=0))return[3,9];if(s<e.position)throw(0,o._)(DOMException,(0,p._)(_));return console.log("seeking",e),n=e.position,[2];case 9:case 13:return[4,u({type:"close"})];case 10:throw c.sent(),(0,o._)(DOMException,(0,p._)(w("seek requires a position argument")));case 11:return[3,15];case 12:if("truncate"!==e.type)return[3,15];if(!(Number.isInteger(e.size)&&e.size>=0))return[3,13];return s=e.size,n>s&&(n=s),[3,15];case 14:throw c.sent(),(0,o._)(DOMException,(0,p._)(w("truncate requires a size argument")));case 15:return[4,u(e)];case 16:return c.sent(),[2]}})})()},close:function(){return(0,i._)(function(){return(0,y.__generator)(this,function(e){switch(e.label){case 0:return[4,u({type:"close"})];case 1:return e.sent(),r.terminate(),[2]}})})()},abort:function(e){return(0,i._)(function(){return(0,y.__generator)(this,function(t){switch(t.label){case 0:return[4,u({type:"abort",reason:e})];case 1:return t.sent(),r.terminate(),[2]}})})()}})]}})}),function(e){return O.apply(this,arguments)});var A=FileSystemDirectoryHandle.prototype.getFileHandle;FileSystemDirectoryHandle.prototype.getFileHandle=/*#__PURE__*/(0,i._)(function(){var e,t,r,n,a,i=arguments;return(0,y.__generator)(this,function(s){switch(s.label){case 0:for(t=Array(e=i.length),r=0;r<e;r++)t[r]=i[r];return[4,(n=A).call.apply(n,[this].concat((0,p._)(t)))];case 1:return a=s.sent(),D.set(a,this),[2,a]}})})}var H=F})}();
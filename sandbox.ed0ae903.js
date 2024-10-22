!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b;(0,r.register)("2wF3H",function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"FileHandle",function(){return h}),e(t.exports,"FolderHandle",function(){return p}),e(t.exports,"default",function(){return y});var i=r("5YgkV"),o=r("63hBf"),u=r("74VEB"),a=r("lThNe"),s=r("6IIPT"),l=r("8Otwi"),c=r("1VwJg"),f=r("9CDCO"),w=r("gKVDL").errors.DISALLOWED,d=/*#__PURE__*/function(){function e(r,t){(0,u._)(this,e),this.writer=r,this.fileEntry=t}return(0,s._)(e,[{key:"write",value:function(e){var r=this;return(0,i._)(function(){return(0,f.__generator)(this,function(t){switch(t.label){case 0:if("object"!=typeof e)return[3,4];if("write"!==e.type)return[3,3];if(!(Number.isInteger(e.position)&&e.position>=0)||(r.writer.seek(e.position),!(r.writer.position!==e.position)))return[3,2];return[4,new Promise(function(t,n){r.writer.onwriteend=t,r.writer.onerror=n,r.writer.truncate(e.position)})];case 1:t.sent(),r.writer.seek(e.position),t.label=2;case 2:if(!("data"in e))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. write requires a data argument","SyntaxError");return e=e.data,[3,4];case 3:if("seek"===e.type){if(Number.isInteger(e.position)&&e.position>=0){if(r.writer.seek(e.position),r.writer.position!==e.position)throw new DOMException("seeking position failed","InvalidStateError");return[2]}throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. seek requires a position argument","SyntaxError")}if("truncate"===e.type)return[2,new Promise(function(t){if(Number.isInteger(e.size)&&e.size>=0)r.writer.onwriteend=function(e){return t()},r.writer.truncate(e.size);else throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. truncate requires a size argument","SyntaxError")})];t.label=4;case 4:return[4,new Promise(function(t,n){r.writer.onwriteend=t,r.writer.onerror=n,r.writer.write(new Blob([e]))})];case 5:return t.sent(),[2]}})})()}},{key:"close",value:function(){return new Promise(this.fileEntry.file.bind(this.fileEntry))}}]),e}(),h=/*#__PURE__*/function(){function e(r){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,u._)(this,e),this.file=r,this.kind="file",this.writable=t,this.readable=!0}return(0,s._)(e,[{key:"name",get:function(){return this.file.name}},{key:"isSameEntry",value:function(e){return this.file.toURL()===e.file.toURL()}},{key:"getFile",value:function(){return new Promise(this.file.file.bind(this.file))}},{key:"createWritable",value:function(e){var r=this;if(!this.writable)throw(0,a._)(DOMException,(0,l._)(w));return new Promise(function(t,n){return r.file.createWriter(function(n){!1===e.keepExistingData?(n.onwriteend=function(e){return t(new d(n,r.file))},n.truncate(0)):t(new d(n,r.file))},n)})}}]),e}(),p=/*#__PURE__*/function(){function e(r){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,u._)(this,e),this.dir=r,this.writable=t,this.readable=!0,this.kind="directory",this.name=r.name}return(0,s._)(e,[{key:"isSameEntry",value:function(e){return this.dir.fullPath===e.dir.fullPath}},{key:"entries",value:function(){var r=this;return(0,c._)(function(){var t,n,i,u,a,s,l,c,w;return(0,f.__generator)(this,function(f){switch(f.label){case 0:return t=r.dir.createReader(),[4,(0,o._)(new Promise(t.readEntries.bind(t)))];case 1:n=f.sent(),i=!0,u=!1,a=void 0,f.label=2;case 2:f.trys.push([2,7,8,9]),s=n[Symbol.iterator](),f.label=3;case 3:if(i=(l=s.next()).done)return[3,6];return[4,[(c=l.value).name,c.isFile?new h(c,r.writable):new e(c,r.writable)]];case 4:f.sent(),f.label=5;case 5:return i=!0,[3,3];case 6:return[3,9];case 7:return w=f.sent(),u=!0,a=w,[3,9];case 8:try{i||null==s.return||s.return()}finally{if(u)throw a}return[7];case 9:return[2]}})})()}},{key:"getDirectoryHandle",value:function(r,t){var n=this;return new Promise(function(i,o){n.dir.getDirectory(r,t,function(r){i(new e(r))},o)})}},{key:"getFileHandle",value:function(e,r){var t=this;return new Promise(function(n,i){return t.dir.getFile(e,r,function(e){return n(new h(e))},i)})}},{key:"removeEntry",value:function(r,t){var n=this;return(0,i._)(function(){var i;return(0,f.__generator)(this,function(o){switch(o.label){case 0:return[4,n.getDirectoryHandle(r,{create:!1}).catch(function(e){return"TypeMismatchError"===e.name?n.getFileHandle(r,{create:!1}):e})];case 1:if((i=o.sent())instanceof Error)throw i;return[2,new Promise(function(r,n){i instanceof e?t.recursive?i.dir.removeRecursively(function(){return r()},n):i.dir.remove(function(){return r()},n):i.file&&i.file.remove(function(){return r()},n)})]}})})()}}]),e}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(r,t){return window.webkitRequestFileSystem(e._persistent,0,function(e){return r(new p(e.root))},t)})}})}();
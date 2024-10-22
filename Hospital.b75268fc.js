function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,r=t.register;r("kj4pL",function(r,n){let i,a,o,l,s;Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",function(){return w});var c,u,d=t("9tSOk"),f=t("5FgjZ"),p=t("iJe7H"),b=t("40kHK"),h=t("2qPsH"),m=t("JXV9F"),y=function(e,t,r,n,i,a){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var l,s=n.kind,c="getter"===s?"get":"setter"===s?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),f=!1,p=r.length-1;p>=0;p--){var b={};for(var h in n)b[h]="access"===h?{}:n[h];for(var h in n.access)b.access[h]=n.access[h];b.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");a.push(o(e||null))};var m=(0,r[p])("accessor"===s?{get:d.get,set:d.set}:d[c],b);if("accessor"===s){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw TypeError("Object expected");(l=o(m.get))&&(d.get=l),(l=o(m.set))&&(d.set=l),(l=o(m.init))&&i.unshift(l)}else(l=o(m))&&("field"===s?i.unshift(l):d[c]=l)}u&&Object.defineProperty(u,n.name,d),f=!0},g=function(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0},v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},w=(o=[(0,f.component)({tagName:"hospital-page"}),f.observer],l=[],s=m.CardsPage,c=a=class extends s{constructor(){super(...arguments),Object.defineProperty(this,"scope",{enumerable:!0,configurable:!0,writable:!0,value:"hospital"}),Object.defineProperty(this,"model",{enumerable:!0,configurable:!0,writable:!0,value:b.suppliesRequirement}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"医疗物资需求"}),Object.defineProperty(this,"districtFilter",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"renderItem",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var{hospital:t,supplies:r=[],province:n,city:i,district:a,address:o,contacts:l}=e,s=v(e,["hospital","supplies","province","city","district","address","contacts"]);return(0,d.jsxs)(p.Card,{children:[(0,d.jsxs)(p.CardBody,{children:[(0,d.jsx)(p.CardTitle,{children:t}),(0,d.jsx)("ol",{children:r.map(({name:e,count:t,remark:r})=>(0,d.jsxs)("li",{title:r,children:[e," ",(0,d.jsxs)(p.Badge,{bg:"danger",children:[t,"个"]})]},e))}),(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)(p.Button,{variant:"primary",onClick:()=>this.clip2board(n+i+a+o),children:"邮寄地址"}),l[0]&&(0,d.jsx)(p.DropdownButton,{className:"d-inline-block ms-3",variant:"primary",caption:"联系方式",children:l.map(({name:e,phone:t})=>(0,d.jsxs)(p.DropdownItem,{href:"tel:"+t,children:[e,"：",t]}))})]})]}),(0,d.jsx)(p.CardFooter,{children:(0,d.jsx)(h.AuditBar,Object.assign({scope:"hospital",model:b.suppliesRequirement},s))})]},t)}})}},"symbol"==typeof(u="HospitalPage")&&(u=u.description?"[".concat(u.description,"]"):""),Object.defineProperty(c,"name",{configurable:!0,value:u}),(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=s[Symbol.metadata])&&void 0!==e?e:null):void 0;y(null,i={value:a},o,{kind:"class",name:a.name,metadata:t},null,l),a=i.value,t&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),g(a,l)})(),a)}),r("i2xD3",function(r,n){e(r.exports,"errors",function(){return i}),e(r.exports,"config",function(){return a}),e(r.exports,"fromDataTransfer",function(){return o}),e(r.exports,"getDirHandlesFromInput",function(){return l}),e(r.exports,"getFileHandlesFromInput",function(){return s});let i={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},a={writable:globalThis.WritableStream};async function o(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[r,n,i]=await Promise.all([t("5ib5H"),t("hucLs"),t("15CKn")]),a=new r.FolderHandle("",!1);return a._entries=e.map(e=>e.isFile?new n.FileHandle(e,!1):new n.FolderHandle(e,!1)),new i.FileSystemDirectoryHandle(a)}async function l(e){let{FolderHandle:r,FileHandle:n}=await t("5ib5H"),{FileSystemDirectoryHandle:i}=await t("15CKn"),a=Array.from(e.files),o=new r(a[0].webkitRelativePath.split("/",1)[0],!1);return a.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let i=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),o)._entries[i]=new n(e.name,e,!1)}),new i(o)}async function s(e){let{FileHandle:r}=await t("5ib5H"),{FileSystemFileHandle:n}=await t("erf0e");return Array.from(e.files).map(e=>new n(new r(e.name,e,!1)))}}),r("5ib5H",function(e,r){var n=t("hArVH");e.exports=n("5tuHl").then(()=>t("dtpmZ"))}),r("hArVH",function(e,r){e.exports=function(e){return import(t("hx2cN").resolve(e))}}),r("hx2cN",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,a=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})},i=function(e){var t=a.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),r("hucLs",function(e,r){var n=t("hArVH");e.exports=n("d0xkQ").then(()=>t("d1xSi"))}),r("15CKn",function(e,r){var n=t("hArVH");e.exports=n("e8ZAS").then(()=>t("9eWHj"))}),r("erf0e",function(e,r){var n=t("hArVH");e.exports=n("8dN6x").then(()=>t("kcPVa"))}),r("7fsxx",function(t,r){e(t.exports,"default",function(){return n});var n={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});
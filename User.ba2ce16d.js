function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,r=t.register;r("d303w",function(r,n){let i,o,a,l,s;Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",function(){return g});var c,u,d=t("9tSOk"),f=t("5FgjZ"),h=t("iJe7H"),m=t("lFp0N"),p=t("40kHK"),b=function(e,t,r,n,i,o){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var l,s=n.kind,c="getter"===s?"get":"setter"===s?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),f=!1,h=r.length-1;h>=0;h--){var m={};for(var p in n)m[p]="access"===p?{}:n[p];for(var p in n.access)m.access[p]=n.access[p];m.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");o.push(a(e||null))};var b=(0,r[h])("accessor"===s?{get:d.get,set:d.set}:d[c],m);if("accessor"===s){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(l=a(b.get))&&(d.get=l),(l=a(b.set))&&(d.set=l),(l=a(b.init))&&i.unshift(l)}else(l=a(b))&&("field"===s?i.unshift(l):d[c]=l)}u&&Object.defineProperty(u,n.name,d),f=!0},x=function(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0},g=(a=[(0,f.component)({tagName:"user-admin"}),f.observer],l=[],s=HTMLElement,c=o=class extends s{constructor(){super(...arguments),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"loadMore",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if("bottom"===e)return(0,p.user).getList(this.filter)}}),Object.defineProperty(this,"search",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.preventDefault();let{elements:t}=e.target,{value:r}=t.item(0);return(0,p.user).getList(this.filter=r?{phone:r}:{},1)}}),Object.defineProperty(this,"renderItem",{enumerable:!0,configurable:!0,writable:!0,value:({mobilePhoneNumber:e,createdAt:t,roles:r,objectId:n})=>{var i;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e}),(0,d.jsx)("td",{children:new Date(t).toLocaleString()}),(0,d.jsx)("td",{children:null===(i=p.user.roles)||void 0===i?void 0:i.map(({objectId:e,name:t})=>(0,d.jsx)(h.FormCheck,{type:"switch",label:(0,d.jsx)(d.Fragment,{children:t}),value:e,checked:r.includes(t),onClick:t=>this.toggleRole(n,e,t)}))})]},n)}})}mountedCallback(){(0,p.user).getRoles()}toggleRole(e,t,{target:r}){let{checked:n}=r;return n?(0,p.user).addRole(e,t):(0,p.user).removeRole(e,t)}render(){let{allItems:e,noMore:t}=p.user;return(0,d.jsxs)(m.SessionBox,{children:[(0,d.jsxs)("header",{className:"d-flex justify-content-between",children:[(0,d.jsx)("h1",{children:"用户管理"}),(0,d.jsxs)("form",{className:"d-flex",onSubmit:this.search,children:[(0,d.jsx)(h.FormControl,{type:"search",className:"me-3",name:"phone"}),(0,d.jsx)(h.Button,{className:"text-nowrap",type:"submit",variant:"primary",children:"搜索"})]})]}),(0,d.jsxs)(h.ScrollBoundary,{onTouch:this.loadMore,children:[(0,d.jsxs)(h.Table,{className:"text-center",striped:!0,hover:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"手机号"}),(0,d.jsx)("th",{children:"注册时间"}),(0,d.jsx)("th",{children:"角色"})]})}),(0,d.jsx)("tbody",{children:e.map(this.renderItem)})]}),(0,d.jsx)("p",{slot:"bottom",className:"text-center mt-2",children:t?"没有更多数据了":"加载更多..."})]})]})}},"symbol"==typeof(u="UserAdmin")&&(u=u.description?"[".concat(u.description,"]"):""),Object.defineProperty(c,"name",{configurable:!0,value:u}),(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=s[Symbol.metadata])&&void 0!==e?e:null):void 0;b(null,i={value:o},a,{kind:"class",name:o.name,metadata:t},null,l),o=i.value,t&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),x(o,l)})(),o)}),r("i2xD3",function(r,n){e(r.exports,"errors",function(){return i}),e(r.exports,"config",function(){return o}),e(r.exports,"fromDataTransfer",function(){return a}),e(r.exports,"getDirHandlesFromInput",function(){return l}),e(r.exports,"getFileHandlesFromInput",function(){return s});let i={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},o={writable:globalThis.WritableStream};async function a(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[r,n,i]=await Promise.all([t("5ib5H"),t("hucLs"),t("15CKn")]),o=new r.FolderHandle("",!1);return o._entries=e.map(e=>e.isFile?new n.FileHandle(e,!1):new n.FolderHandle(e,!1)),new i.FileSystemDirectoryHandle(o)}async function l(e){let{FolderHandle:r,FileHandle:n}=await t("5ib5H"),{FileSystemDirectoryHandle:i}=await t("15CKn"),o=Array.from(e.files),a=new r(o[0].webkitRelativePath.split("/",1)[0],!1);return o.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let i=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),a)._entries[i]=new n(e.name,e,!1)}),new i(a)}async function s(e){let{FileHandle:r}=await t("5ib5H"),{FileSystemFileHandle:n}=await t("erf0e");return Array.from(e.files).map(e=>new n(new r(e.name,e,!1)))}}),r("5ib5H",function(e,r){var n=t("hArVH");e.exports=n("5tuHl").then(()=>t("dtpmZ"))}),r("hArVH",function(e,r){e.exports=function(e){return import(t("hx2cN").resolve(e))}}),r("hx2cN",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,o=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)o.set(t[r],{baseUrl:e,path:t[r+1]})},i=function(e){var t=o.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),r("hucLs",function(e,r){var n=t("hArVH");e.exports=n("d0xkQ").then(()=>t("d1xSi"))}),r("15CKn",function(e,r){var n=t("hArVH");e.exports=n("e8ZAS").then(()=>t("9eWHj"))}),r("erf0e",function(e,r){var n=t("hArVH");e.exports=n("8dN6x").then(()=>t("kcPVa"))}),r("7fsxx",function(t,r){e(t.exports,"default",function(){return n});var n={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});
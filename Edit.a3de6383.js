!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("ffVle",function(n,r){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return G});var a,i,o,l,c,s,u,f,d,m,h,p,b,y,v,g,j,w=t("dxPlC"),x=t("74VEB"),O=t("6IIPT"),T=t("dCZP4"),k=t("9Um8W"),C=t("kPaC9"),P=t("lRPiZ"),_=t("9CDCO"),F=t("hiQdF"),I=t("jOtlI"),E=t("eCT7v"),S=t("783lP"),R=t("912gW"),M=t("fmkUX"),V=t("lHM0e"),q=t("kYLP9"),H=function(e,t,n,r,a,i){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var l,c=r.kind,s="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?r.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),d=!1,m=n.length-1;m>=0;m--){var h={};for(var p in r)h[p]="access"===p?{}:r[p];for(var p in r.access)h.access[p]=r.access[p];h.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");i.push(o(e||null))};var b=(0,n[m])("accessor"===c?{get:f.get,set:f.set}:f[s],h);if("accessor"===c){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(l=o(b.get))&&(f.get=l),(l=o(b.set))&&(f.set=l),(l=o(b.init))&&a.unshift(l)}else(l=o(b))&&("field"===c?a.unshift(l):f[s]=l)}u&&Object.defineProperty(u,r.name,f),d=!0},D=function(e,t,n){for(var r=arguments.length>2,a=0;a<t.length;a++)n=r?t[a].call(e,n):t[a].call(e);return r?n:void 0},L=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,l)}c((r=r.apply(e,t||[])).next())})},B=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},W=function(e,t,n,r,a){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!a)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?a.call(e,n):a?a.value=n:t.set(e,n),n},z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},G=(u=[(0,I.component)({tagName:"clinic-edit"}),I.observer],f=[],m=[],h=[],p=[],b=[],l=/*#__PURE__*/function(e){(0,k._)(n,e);var t=(0,P._)(n);function n(){var e;return(0,x._)(this,n),e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))),a.set((0,w._)(e),D((0,w._)(e),m,"")),i.set((0,w._)(e),(D((0,w._)(e),h),D((0,w._)(e),p,{name:"",url:"",startTime:"09:00",endTime:"18:00",contacts:[{name:"",phone:""}],remark:""}))),Object.defineProperty((0,w._)(e),"changeText",{enumerable:!0,configurable:!0,writable:!0,value:(D((0,w._)(e),b),function(t){var n=t.target,r=n.name,a=n.value;e.state=Object.assign(Object.assign({},e.state),(0,T._)({},r,a))})}),Object.defineProperty((0,w._)(e),"handleSubmit",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return L((0,w._)(e),void 0,void 0,function(){var e,n,r;return(0,_.__generator)(this,function(a){switch(a.label){case 0:return t.preventDefault(),n=(e=this.state).contacts,r=z(e,["contacts"]),[4,(0,R.clinic).updateOne(Object.assign(Object.assign({},r),{contacts:n.filter(function(e){var t=e.name,n=e.phone;return(null==t?void 0:t.trim())&&(null==n?void 0:n.trim())})}),this.dataId)];case 1:return a.sent(),self.alert("提交成功，工作人员审核后即可查看"),location.hash=M.RouteRoot.Clinic,[2]}})})}}),e}return(0,O._)(n,[{key:"dataId",get:function(){return B(this,a,"f")},set:function(e){W(this,a,e,"f")}},{key:"state",get:function(){return B(this,i,"f")},set:function(e){W(this,i,e,"f")}},{key:"mountedCallback",value:function(){return L(this,void 0,void 0,function(){var e,t,n,r,a,i,o;return(0,_.__generator)(this,function(l){switch(l.label){case 0:if(!this.dataId)return[2];return[4,(0,R.clinic).getOne(this.dataId)];case 1:return t=(e=l.sent()).name,n=e.url,r=e.contacts,a=e.startTime,i=e.endTime,o=e.remark,this.state={name:t,url:n,contacts:r,startTime:a,endTime:i,remark:o},[2]}})})}},{key:"render",value:function(){var e=this,t=this.dataId,n=this.state,r=n.name,a=n.url,i=n.startTime,o=n.endTime,l=n.contacts,c=n.remark;return(0,F.jsxs)(q.SessionBox,{children:[(0,F.jsxs)("h2",{children:["义诊服务",t?"发布":"修改"]}),(0,F.jsxs)("form",{onChange:this.changeText,onSubmit:this.handleSubmit,children:[(0,F.jsx)(S.FormField,{name:"name",required:!0,defaultValue:r,label:"机构/个人名"}),(0,F.jsx)(S.FormField,{type:"url",name:"url",required:!0,defaultValue:a,label:"官方网址",placeholder:"官网 或 信息来源"}),(0,F.jsxs)(S.FormGroup,{children:[(0,F.jsx)(S.FormLabel,{children:"每日接诊起止时间"}),(0,F.jsxs)(S.InputGroup,{children:[(0,F.jsx)(S.FormControl,{type:"time",name:"startTime",required:!0,defaultValue:i,placeholder:"开始"}),(0,F.jsx)(S.FormControl,{type:"time",name:"endTime",required:!0,defaultValue:o,placeholder:"结束"})]})]}),(0,F.jsx)(V.ContactField,{list:l,onChange:function(t){var n=t.detail;return e.state.contacts=n}}),(0,F.jsx)(S.FormField,{as:"textarea",name:"remark",defaultValue:c,label:"备注"}),(0,F.jsxs)(S.FormGroup,{className:"mt-3 d-flex flex-column flex-sm-row",children:[(0,F.jsx)(S.Button,{type:"submit",variant:"primary",disabled:R.clinic.uploading>0,children:"提交"}),(0,F.jsx)(S.Button,{type:"reset",variant:"danger",onClick:function(){return location.hash=M.RouteRoot.Clinic},children:"取消"})]})]})]})}}]),n}(d=HTMLElement),a=new WeakMap,i=new WeakMap,y=l,v="ClinicEdit","symbol"===(0,C._)(v)&&(v=v.description?"[".concat(v.description,"]"):""),Object.defineProperty(y,"name",{configurable:!0,value:v}),j="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(g=d[Symbol.metadata])&&void 0!==g?g:null):void 0,c=[I.attribute,E.observable],s=[E.observable],H(l,null,c,{kind:"accessor",name:"dataId",static:!1,private:!1,access:{has:function(e){return"dataId"in e},get:function(e){return e.dataId},set:function(e,t){e.dataId=t}},metadata:j},m,h),H(l,null,s,{kind:"accessor",name:"state",static:!1,private:!1,access:{has:function(e){return"state"in e},get:function(e){return e.state},set:function(e,t){e.state=t}},metadata:j},p,b),H(null,o={value:l},u,{kind:"class",name:l.name,metadata:j},null,f),l=o.value,j&&Object.defineProperty(l,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:j}),D(l,f),l)}),n("fmkUX",function(t,n){e(t.exports,"RouteRoot",function(){return a}),e(t.exports,"default",function(){return i}),(r=a||(a={})).Hospital="hospital",r.Logistics="logistics",r.Hotel="hotel",r.Factory="factory",r.Donation="donation",r.Clinic="clinic",r.Maps="maps",r.Admin="admin",r.Community="community";var r,a,i=[{title:"首页",href:""},{title:"医院",href:a.Hospital,icon:"hospital"},{title:"物流",href:a.Logistics,icon:"truck"},{title:"酒店",href:a.Hotel,icon:"building-check"},{title:"生产",href:a.Factory,icon:"buildings"},{title:"捐赠",href:a.Donation,icon:"heart"},{title:"义诊",href:a.Clinic,icon:"house-heart"},{title:"疫情地图",href:a.Maps,icon:"map"},{title:"红会监工",href:"https://weileizeng.github.io/red-cross/",icon:"plus-square"},{title:"开放社区",href:a.Community}]})}();
!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("fSIfF",function(n,a){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return G});var r,o,i,c,l,s,u,d,f,h,m,p,b,v,g,y,j,w=t("dxPlC"),x=t("74VEB"),O=t("6IIPT"),k=t("dCZP4"),_=t("9Um8W"),C=t("8Otwi"),P=t("kPaC9"),F=t("lRPiZ"),I=t("9CDCO"),T=t("hiQdF"),E=t("jOtlI"),R=t("eCT7v"),S=t("783lP"),A=t("fmkUX"),D=t("912gW"),q=t("kYLP9"),M=t("lHM0e"),V=function(e,t,n,a,r,o){function i(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var c,l=a.kind,s="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?a.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,a.name):{}),f=!1,h=n.length-1;h>=0;h--){var m={};for(var p in a)m[p]="access"===p?{}:a[p];for(var p in a.access)m.access[p]=a.access[p];m.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");o.push(i(e||null))};var b=(0,n[h])("accessor"===l?{get:d.get,set:d.set}:d[s],m);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(c=i(b.get))&&(d.get=c),(c=i(b.set))&&(d.set=c),(c=i(b.init))&&r.unshift(c)}else(c=i(b))&&("field"===l?r.unshift(c):d[s]=c)}u&&Object.defineProperty(u,a.name,d),f=!0},B=function(e,t,n){for(var a=arguments.length>2,r=0;r<t.length;r++)n=a?t[r].call(e,n):t[r].call(e);return a?n:void 0},H=function(e,t,n,a){return new(n||(n=Promise))(function(r,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,c)}l((a=a.apply(e,t||[])).next())})},L=function(e,t,n,a){if("a"===n&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)},W=function(e,t,n,a,r){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!r)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?r.call(e,n):r?r.value=n:t.set(e,n),n},z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},G=(u=[(0,E.component)({tagName:"donation-edit"}),E.observer],d=[],h=[],m=[],p=[],b=[],c=/*#__PURE__*/function(e){(0,_._)(n,e);var t=(0,F._)(n);function n(){var e;return(0,x._)(this,n),e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))),r.set((0,w._)(e),B((0,w._)(e),h,"")),o.set((0,w._)(e),(B((0,w._)(e),m),B((0,w._)(e),p,{name:"",contacts:[{}],accounts:[{}],url:"",remark:""}))),Object.defineProperty((0,w._)(e),"changeText",{enumerable:!0,configurable:!0,writable:!0,value:(B((0,w._)(e),b),function(t){var n=t.target,a=n.name,r=n.value;e.state=Object.assign(Object.assign({},e.state),(0,k._)({},a,r))})}),Object.defineProperty((0,w._)(e),"addAccount",{enumerable:!0,configurable:!0,writable:!0,value:function(){return e.state=Object.assign(Object.assign({},e.state),{accounts:(0,C._)(e.state.accounts).concat([{}])})}}),Object.defineProperty((0,w._)(e),"handleSubmit",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return H((0,w._)(e),void 0,void 0,function(){var e,n,a,r;return(0,I.__generator)(this,function(o){switch(o.label){case 0:return t.preventDefault(),n=(e=this.state).accounts,a=e.contacts,r=z(e,["accounts","contacts"]),[4,(0,D.donationRecipient).updateOne(Object.assign(Object.assign({},r),{accounts:n.filter(function(e){var t=e.name,n=e.number,a=e.bank;return(null==t?void 0:t.trim())&&(null==n?void 0:n.trim())&&(null==a?void 0:a.trim())}),contacts:a.filter(function(e){var t=e.name,n=e.phone;return(null==t?void 0:t.trim())&&(null==n?void 0:n.trim())})}),this.dataId)];case 1:return o.sent(),self.alert("提交成功，工作人员审核后即可查看"),location.hash=A.RouteRoot.Donation,[2]}})})}}),e}return(0,O._)(n,[{key:"dataId",get:function(){return L(this,r,"f")},set:function(e){W(this,r,e,"f")}},{key:"state",get:function(){return L(this,o,"f")},set:function(e){W(this,o,e,"f")}},{key:"mountedCallback",value:function(){return H(this,void 0,void 0,function(){var e,t,n,a,r,o;return(0,I.__generator)(this,function(i){switch(i.label){case 0:if(!this.dataId)return[2];return[4,(0,D.donationRecipient).getOne(this.dataId)];case 1:return t=(e=i.sent()).name,n=e.url,a=e.accounts,r=e.contacts,o=e.remark,this.state={name:t,url:n,accounts:a,contacts:r,remark:o},[2]}})})}},{key:"changeAccount",value:function(e,t){t.stopPropagation();var n=t.target,a=n.name,r=n.value,o=this.state.accounts;this.state.accounts=(0,C._)(o.slice(0,e)).concat([Object.assign(Object.assign({},o[e]),(0,k._)({},a,r))],(0,C._)(o.slice(e+1)))}},{key:"deleteAccount",value:function(e){var t=this.state.accounts;this.state.accounts=(0,C._)(t.slice(0,e)).concat((0,C._)(t.slice(e+1)))}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.url,r=t.accounts,o=t.contacts,i=t.remark;return(0,T.jsxs)(q.SessionBox,{children:[(0,T.jsx)("h2",{children:"捐赠信息发布"}),(0,T.jsxs)("form",{onChange:this.changeText,onSubmit:this.handleSubmit,children:[(0,T.jsx)(S.FormField,{name:"name",required:!0,defaultValue:n,label:"机构名称"}),(0,T.jsx)(S.FormField,{name:"url",required:!0,defaultValue:a,label:"官方网址",placeholder:"信息发布源链接"}),(0,T.jsxs)(S.FormGroup,{children:[(0,T.jsx)(S.FormLabel,{children:"银行账户信息"}),r.map(function(t,n){var a=t.name,o=t.number,i=t.bank;return(0,T.jsxs)(S.InputGroup,{className:"my-1",onChange:function(t){return e.changeAccount(n,t)},children:[(0,T.jsx)(S.FormControl,{name:"name",required:!0,defaultValue:a,placeholder:"户名"}),(0,T.jsx)(S.FormControl,{name:"number",required:!0,defaultValue:o,placeholder:"账号"}),(0,T.jsx)(S.FormControl,{name:"bank",required:!0,defaultValue:i,placeholder:"开户行"}),(0,T.jsx)(S.Button,{variant:"primary",onClick:e.addAccount,children:"+"}),(0,T.jsx)(S.Button,{variant:"danger",disabled:!r[1],onClick:function(){return e.deleteAccount(n)},children:"-"})]})})]}),(0,T.jsx)(M.ContactField,{list:o,onChange:function(t){var n=t.detail;return e.state.contacts=n}}),(0,T.jsx)(S.FormField,{as:"textarea",name:"remark",label:"备注",defaultValue:i}),(0,T.jsxs)(S.FormGroup,{className:"mt-3 d-flex flex-column",children:[(0,T.jsx)(S.Button,{type:"submit",variant:"primary",disabled:D.donationRecipient.uploading>0,children:"提交"}),(0,T.jsx)(S.Button,{type:"reset",variant:"danger",onClick:function(){return location.hash=A.RouteRoot.Donation},children:"取消"})]})]})]})}}]),n}(f=HTMLElement),r=new WeakMap,o=new WeakMap,v=c,g="DonationEdit","symbol"===(0,P._)(g)&&(g=g.description?"[".concat(g.description,"]"):""),Object.defineProperty(v,"name",{configurable:!0,value:g}),j="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(y=f[Symbol.metadata])&&void 0!==y?y:null):void 0,l=[E.attribute,R.observable],s=[R.observable],V(c,null,l,{kind:"accessor",name:"dataId",static:!1,private:!1,access:{has:function(e){return"dataId"in e},get:function(e){return e.dataId},set:function(e,t){e.dataId=t}},metadata:j},h,m),V(c,null,s,{kind:"accessor",name:"state",static:!1,private:!1,access:{has:function(e){return"state"in e},get:function(e){return e.state},set:function(e,t){e.state=t}},metadata:j},p,b),V(null,i={value:c},u,{kind:"class",name:c.name,metadata:j},null,d),c=i.value,j&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:j}),B(c,d),c)}),n("fmkUX",function(t,n){e(t.exports,"RouteRoot",function(){return r}),e(t.exports,"default",function(){return o}),(a=r||(r={})).Hospital="hospital",a.Logistics="logistics",a.Hotel="hotel",a.Factory="factory",a.Donation="donation",a.Clinic="clinic",a.Maps="maps",a.Admin="admin",a.Community="community";var a,r,o=[{title:"首页",href:""},{title:"医院",href:r.Hospital,icon:"hospital"},{title:"物流",href:r.Logistics,icon:"truck"},{title:"酒店",href:r.Hotel,icon:"building-check"},{title:"生产",href:r.Factory,icon:"buildings"},{title:"捐赠",href:r.Donation,icon:"heart"},{title:"义诊",href:r.Clinic,icon:"house-heart"},{title:"疫情地图",href:r.Maps,icon:"map"},{title:"红会监工",href:"https://weileizeng.github.io/red-cross/",icon:"plus-square"},{title:"开放社区",href:r.Community}]})}();
!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("62U0s",function(n,a){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return U});var i,r,o,s,c,l,u,d,f,p,m,h,y,b,v,g,j,w=t("dxPlC"),O=t("74VEB"),x=t("6IIPT"),k=t("dCZP4"),P=t("9Um8W"),_=t("kPaC9"),C=t("lRPiZ"),T=t("9CDCO"),F=t("hiQdF"),I=t("jOtlI"),E=t("783lP"),R=t("eCT7v"),S=t("bNNon"),H=t("fmkUX"),q=t("aQIVs"),B=t("912gW"),M=t("jcToA"),A=function(e,t,n,a,i,r){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,c=a.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?a.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,a.name):{}),f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in a)m[h]="access"===h?{}:a[h];for(var h in a.access)m.access[h]=a.access[h];m.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");r.push(o(e||null))};var y=(0,n[p])("accessor"===c?{get:d.get,set:d.set}:d[l],m);if("accessor"===c){if(void 0===y)continue;if(null===y||"object"!=typeof y)throw TypeError("Object expected");(s=o(y.get))&&(d.get=s),(s=o(y.set))&&(d.set=s),(s=o(y.init))&&i.unshift(s)}else(s=o(y))&&("field"===c?i.unshift(s):d[l]=s)}u&&Object.defineProperty(u,a.name,d),f=!0},V=function(e,t,n){for(var a=arguments.length>2,i=0;i<t.length;i++)n=a?t[i].call(e,n):t[i].call(e);return a?n:void 0},D=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},N=function(e,t,n,a){if("a"===n&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)},G=function(e,t,n,a,i){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(e,n):i?i.value=n:t.set(e,n),n},L=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>t.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n},U=(u=[(0,I.component)({tagName:"hospital-edit"}),I.observer],d=[],p=[],m=[],h=[],y=[],s=/*#__PURE__*/function(e){(0,P._)(n,e);var t=(0,C._)(n);function n(){var e;return(0,O._)(this,n),e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))),i.set((0,w._)(e),V((0,w._)(e),p,"")),r.set((0,w._)(e),(V((0,w._)(e),m),V((0,w._)(e),h,{hospital:"",province:"",city:"",district:"",address:"",coords:{},url:"",supplies:q.default,contacts:[{}],remark:""}))),Object.defineProperty((0,w._)(e),"changeText",{enumerable:!0,configurable:!0,writable:!0,value:(V((0,w._)(e),y),function(t){var n=t.target,a=n.name,i=n.value;e.state=Object.assign(Object.assign({},e.state),(0,k._)({},a,i))})}),Object.defineProperty((0,w._)(e),"changeAddress",{enumerable:!0,configurable:!0,writable:!0,value:function(t){var n=t.detail,a=n.latitude,i=n.longitude,r=L(n,["latitude","longitude"]);return Object.assign(e.state,Object.assign(Object.assign({},r),{coords:{latitude:a,longitude:i}}))}}),Object.defineProperty((0,w._)(e),"handleSubmit",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return D((0,w._)(e),void 0,void 0,function(){var e,n,a,i;return(0,T.__generator)(this,function(r){switch(r.label){case 0:return t.preventDefault(),n=(e=this.state).supplies,a=e.contacts,i=L(e,["supplies","contacts"]),[4,(0,B.suppliesRequirement).updateOne(Object.assign(Object.assign({},i),{supplies:n.filter(function(e){return e.count}),contacts:a.filter(function(e){var t=e.name,n=e.phone;return(null==t?void 0:t.trim())&&(null==n?void 0:n.trim())})}),this.dataId)];case 1:return r.sent(),self.alert("提交成功，工作人员审核后即可查看"),location.hash=H.RouteRoot.Hospital,[2]}})})}}),e}return(0,x._)(n,[{key:"dataId",get:function(){return N(this,i,"f")},set:function(e){G(this,i,e,"f")}},{key:"state",get:function(){return N(this,r,"f")},set:function(e){G(this,r,e,"f")}},{key:"mountedCallback",value:function(){return D(this,void 0,void 0,function(){var e,t,n,a,i,r,o,s,c,l,u;return(0,T.__generator)(this,function(d){switch(d.label){case 0:if(!this.dataId)return[2];return[4,(0,B.suppliesRequirement).getOne(this.dataId)];case 1:return t=(e=d.sent()).hospital,n=e.province,a=e.city,i=e.district,r=e.address,o=e.coords,s=e.url,c=e.supplies,l=e.contacts,u=e.remark,this.state={hospital:t,province:n,city:a,district:i,address:r,coords:o,url:s,supplies:(0,S.mergeList)("name",this.state.supplies,c),contacts:l,remark:u},[2]}})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.hospital,a=t.province,i=t.city,r=t.district,o=t.address,s=t.url,c=t.supplies,l=t.contacts,u=t.remark;return(0,F.jsxs)(M.SessionBox,{children:[(0,F.jsx)("h1",{children:"医用物资需求发布"}),(0,F.jsxs)("form",{onChange:this.changeText,onSubmit:this.handleSubmit,children:[(0,F.jsx)(E.FormField,{name:"hospital",required:!0,defaultValue:n,label:"医疗机构",placeholder:"可详细至分院、院区、科室"}),(0,F.jsx)(E.FormField,{label:"机构地址",children:(0,F.jsx)(M.AddressField,{place:n,province:a,city:i,district:r,address:o,onChange:this.changeAddress})}),(0,F.jsx)(E.FormField,{type:"url",name:"url",required:!0,defaultValue:s,label:"官方网址"}),(0,F.jsx)(M.SuppliesField,{list:c,onChange:function(t){var n=t.detail;return e.state.supplies=n}}),(0,F.jsx)(M.ContactField,{list:l,onChange:function(t){var n=t.detail;return e.state.contacts=n}}),(0,F.jsx)(E.FormField,{is:"textarea",name:"remark",label:"备注",defaultValue:u}),(0,F.jsxs)(E.FormGroup,{className:"mt-3 d-flex flex-column",children:[(0,F.jsx)(E.Button,{type:"submit",variant:"primary",disabled:B.suppliesRequirement.uploading>0,children:"提交"}),(0,F.jsx)(E.Button,{type:"reset",variant:"danger",onClick:function(){return location.hash=H.RouteRoot.Hospital},children:"取消"})]})]})]})}}]),n}(f=HTMLElement),i=new WeakMap,r=new WeakMap,b=s,v="HospitalEdit","symbol"===(0,_._)(v)&&(v=v.description?"[".concat(v.description,"]"):""),Object.defineProperty(b,"name",{configurable:!0,value:v}),j="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(g=f[Symbol.metadata])&&void 0!==g?g:null):void 0,c=[I.attribute,R.observable],l=[R.observable],A(s,null,c,{kind:"accessor",name:"dataId",static:!1,private:!1,access:{has:function(e){return"dataId"in e},get:function(e){return e.dataId},set:function(e,t){e.dataId=t}},metadata:j},p,m),A(s,null,l,{kind:"accessor",name:"state",static:!1,private:!1,access:{has:function(e){return"state"in e},get:function(e){return e.state},set:function(e,t){e.state=t}},metadata:j},h,y),A(null,o={value:s},u,{kind:"class",name:s.name,metadata:j},null,d),s=o.value,j&&Object.defineProperty(s,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:j}),V(s,d),s)}),n("fmkUX",function(t,n){e(t.exports,"RouteRoot",function(){return i}),e(t.exports,"default",function(){return r}),(a=i||(i={})).Hospital="hospital",a.Logistics="logistics",a.Hotel="hotel",a.Factory="factory",a.Donation="donation",a.Clinic="clinic",a.Maps="maps",a.Admin="admin",a.Community="community";var a,i,r=[{title:"首页",href:""},{title:"医院",href:i.Hospital,icon:"hospital"},{title:"物流",href:i.Logistics,icon:"truck"},{title:"酒店",href:i.Hotel,icon:"building-check"},{title:"生产",href:i.Factory,icon:"buildings"},{title:"捐赠",href:i.Donation,icon:"heart"},{title:"义诊",href:i.Clinic,icon:"house-heart"},{title:"疫情地图",href:i.Maps,icon:"map"},{title:"红会监工",href:"https://weileizeng.github.io/red-cross/",icon:"plus-square"},{title:"开放社区",href:i.Community}]}),n("aQIVs",function(t,n){e(t.exports,"default",function(){return a});var a=[{name:"普通医用口罩",type:"face",remark:"YY/T 0969-2013"},{name:"医用外科口罩",type:"face",remark:"YY/T 0469-2010"},{name:"医用防护口罩|N95口罩",type:"face",remark:"GB 19083-2010，建议3M 1860/1870/9123，防飞沫血液体液款"},{name:"防冲击眼罩/护目镜/防护眼镜",type:"face"},{name:"防护面罩",type:"face"},{name:"防护帽/医用帽/圆帽",type:"other"},{name:"隔离衣",type:"other"},{name:"防护服",type:"other",remark:"GB 19082-2003"},{name:"手术衣",type:"other"},{name:"乳胶手套",type:"other",remark:"灭菌，GB 10213-2006"},{name:"长筒胶鞋/防污染靴",type:"leg"},{name:"防污染鞋套",type:"leg"},{name:"防污染靴套",type:"leg"},{name:"84消毒液",type:"disinfection"},{name:"过氧乙酸",type:"disinfection"},{name:"75%酒精",type:"disinfection"},{name:"手部皮肤消毒液",type:"disinfection"},{name:"活力碘",type:"disinfection"},{name:"床罩",type:"other"},{name:"医用面罩式雾化器",type:"other"},{name:"测体温设备",type:"device"},{name:"空气消毒设备",type:"device",remark:"医疗器械注册证"},{name:"空气紫外线消毒车",type:"device",remark:"医疗器械注册证"}]})}();
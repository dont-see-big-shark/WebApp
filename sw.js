if(!self.define){let e,d={};const i=(i,a)=>(i=new URL(i+".js",a).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,f)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(d[s])return;let c={};const r=e=>i(e,s),b={module:{uri:s},exports:c,require:r};d[s]=Promise.all(a.map((e=>b[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-b584cb72"],(function(e){"use strict";importScripts("https://unpkg.com/workbox-sw@7.1.0/build/workbox-sw.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"Clinic.02cd37e9.js",revision:"92bf0a8e66115c91da46d188ff9f6495"},{url:"Clinic.206a5c69.js",revision:"76717c44f46d517f6772580acec07e0d"},{url:"Community.3ad562a2.js",revision:"5577b4d11dd77b2921734a685c4621a0"},{url:"Community.87cbc501.js",revision:"d337556d58a688fc2dc66675f5879777"},{url:"Community.bb099a0c.css",revision:"f49e23683c7efb21454d208f4b3af96f"},{url:"Donation.8df7bb43.js",revision:"7b6ace15ca7f6ebfea26fd9aa2a94602"},{url:"Donation.ac5fe992.js",revision:"d7d5635eafc564959a8e180a75ec1d08"},{url:"downloader.8b56ddd5.js",revision:"67a5acfdb33328dc419daef401e0a571"},{url:"downloader.c29a38fe.js",revision:"57276dc1a0ce8c60de96ab0760d77f62"},{url:"downloader.f00ff9dd.js",revision:"5207b24c3ba4aafc6161bb6281c8a60c"},{url:"Edit.046b698d.js",revision:"5996cc049b69f17d314fd30fba189a27"},{url:"Edit.2a154692.js",revision:"a43dc4273ed4c05979c97f8727fc7727"},{url:"edit.314ad1ae.js",revision:"1988a5c5055b79b8b3285a787a5c9e1d"},{url:"Edit.3b7e8b61.js",revision:"6e65db8915c34dbd9996b6081239a652"},{url:"Edit.3eedf6e7.js",revision:"eb3fa603fa86e8a46e31bd6f0c3ac79c"},{url:"Edit.51131761.js",revision:"70523b42add5c4cb597ea7c962d040e5"},{url:"Edit.64b4425a.js",revision:"acabc800c2c7b6389f43c31360ed8624"},{url:"edit.72ba9486.js",revision:"579b60bc99ca39c56b730af1824d6c6d"},{url:"Edit.762878f1.js",revision:"986ebb6e12ba5c2f376ddda0cadc4e99"},{url:"Edit.9a2e403e.js",revision:"ba59db72114cf2fb00a51ddcd81f6ce6"},{url:"edit.9e10b84b.js",revision:"db925dcd24123140a2dd35efb6a5a821"},{url:"Edit.a3de6383.js",revision:"e074ff39943091c4aa63b96bb4a737df"},{url:"Edit.b0778a74.js",revision:"1e6502d1f1e3029e1ca9c2ff43d7fa32"},{url:"Edit.bee1cafa.js",revision:"18fef0fa874aa942d0bd566c9e611017"},{url:"Edit.c01f3426.js",revision:"5a9468888e3ff30f0f894e7865d159ff"},{url:"edit.ebebac5f.js",revision:"ba0b97624cbbf14918cab06fe8d5d642"},{url:"Factory.10e7f30e.js",revision:"92cc9a5ea8814157a0877779effe2d04"},{url:"Factory.d5d44b8a.js",revision:"6b44a44315c855dd0aa7d618ff4713e6"},{url:"FileSystemDirectoryHandle.38eed0ca.js",revision:"b3f9f9228a9ea6f4e49e8c0867813147"},{url:"FileSystemDirectoryHandle.4922b6f8.js",revision:"a9ef758967a34a04da19445b8bb828ec"},{url:"FileSystemFileHandle.23ce90e5.js",revision:"c86108566b3614dd1e040862ff967059"},{url:"FileSystemFileHandle.b9e9e4bf.js",revision:"49dfafb2312f2140460b2e17f1c55840"},{url:"Hospital.102872d5.js",revision:"6db592f9187f3ac78684e92cc44ad0ed"},{url:"Hospital.149411d3.js",revision:"d1b937bbfa7d84f51da5ec73f5d59ff8"},{url:"Hospital.4b64e54f.js",revision:"d2919fae8f28f95e07a1cf4638818d29"},{url:"Hospital.8ad03c32.js",revision:"17861ca4f329af3986e92a922fe1ff1b"},{url:"Hospital.b75268fc.js",revision:"c02d59dbbb77b5d2adf091037be0d6df"},{url:"Hospital.c37eb90c.js",revision:"5622ba46f1f1bb8fec12b94d43cfb349"},{url:"Hospital.ebf65261.js",revision:"d5bc79467a23dc5d77327d580a3e0e1b"},{url:"Hospital.f90a57e1.js",revision:"46362d53d78385a0c3d0e7ae409cedfc"},{url:"Hotel.3c198f86.js",revision:"48408e4cf5bd53248ebdaaf9a3a33106"},{url:"Hotel.9dcd7317.js",revision:"aee37d5ef5383e6469d61f1ce7f2f57f"},{url:"index.3f4f78a1.js",revision:"1093746b0b16937e858032564c56ba64"},{url:"index.739aec72.js",revision:"39ebf791eba0b70d9af46fdbf447ab44"},{url:"index.c89864ac.css",revision:"892ff8a4b879a7a0bc5b299d0149be10"},{url:"index.html",revision:"755ef79e3d1fc9907d96795e5e0e8e6d"},{url:"index.runtime.17a9c050.js",revision:"839989e575d3d4527ac9f67ae8dae8dd"},{url:"index.runtime.f8829463.js",revision:"d55496daa4061e460b6e5b0a422afa03"},{url:"Logistics.9ceda5a3.js",revision:"4149c97ecf7444124e3f34de77fe2e94"},{url:"Logistics.b7049ab8.js",revision:"a179f51d83360adfcad3486152ed627e"},{url:"Map.6704db27.css",revision:"c5eaaed86187206d7244d731407bd757"},{url:"Map.99b6830a.js",revision:"98171326e370131804922a1584eb1baa"},{url:"Map.f82cf838.js",revision:"0ca0452067454af1fbe3a22f54213403"},{url:"memory.a153fcfe.js",revision:"b4c0bc43a60f13a708c55a0b84ee8f64"},{url:"memory.d1de2a86.js",revision:"39def5a489db42010f30648bba5d6621"},{url:"repository.23f54580.7bf0dc01.png",revision:"5d441e14e10c193c73e53d4f8d778518"},{url:"sandbox.07d83a66.js",revision:"208906763566ea3a6cd9e56694b62e6d"},{url:"sandbox.ed0ae903.js",revision:"76aa3836bea1456688bf8c538983c923"},{url:"User.102080c5.js",revision:"e60c9de9108dd77b90f0b3950240ba49"},{url:"User.ba2ce16d.js",revision:"aa730d5b42bc6f31484ff19444630519"},{url:"watch-fork.85c057cc.43f496f1.png",revision:"f2bc1d47b916e6c36ada70968dc9dbd7"},{url:"wuhan2020-mini.c62cbdf4.png",revision:"91cc37b55e4d0ae409fbd937ead302ff"},{url:"wuhan2020.bed6fd20.png",revision:"21b2526f547190e2430c935e6b23c682"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(r,t,n){return r(n={path:t,exports:{},require:function(r,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var n=t((function(t){!function(r){var n={bytesToHex:function(r){return function(r){return r.map((function(r){return t=r.toString(16),n=2,t.length>n?t:Array(n-t.length+1).join("0")+t;var t,n})).join("")}(r)},hexToBytes:function(r){if(r.length%2==1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===r.indexOf("0x")&&(r=r.slice(2)),r.match(/../g).map((function(r){return parseInt(r,16)}))}};t.exports?t.exports=n:r.convertHex=n}(r)})),e=t((function(t){!function(r){var n={bytesToString:function(r){return r.map((function(r){return String.fromCharCode(r)})).join("")},stringToBytes:function(r){return r.split("").map((function(r){return r.charCodeAt(0)}))}};n.UTF8={bytesToString:function(r){return decodeURIComponent(escape(n.bytesToString(r)))},stringToBytes:function(r){return n.stringToBytes(unescape(encodeURIComponent(r)))}},t.exports?t.exports=n:r.convertString=n}(r)})),o=t((function(t){!function(r){var o={};t.exports?(o.bytesToHex=n.bytesToHex,o.convertString=e,t.exports=c):(o.bytesToHex=r.convertHex.bytesToHex,o.convertString=r.convertString,r.sha256=c);var s=[];!function(){function r(r){for(var t=Math.sqrt(r),n=2;n<=t;n++)if(!(r%n))return!1;return!0}function t(r){return 4294967296*(r-(0|r))|0}for(var n=2,e=0;e<64;)r(n)&&(s[e]=t(Math.pow(n,1/3)),e++),n++}();var a=[],i=function(r,t,n){for(var e=r[0],o=r[1],i=r[2],c=r[3],u=r[4],f=r[5],d=r[6],g=r[7],l=0;l<64;l++){if(l<16)a[l]=0|t[n+l];else{var p=a[l-15],h=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,v=a[l-2],y=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;a[l]=h+a[l-7]+y+a[l-16]}var w=e&o^e&i^o&i,x=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),T=g+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&f^~u&d)+s[l]+a[l];g=d,d=f,f=u,u=c+T|0,c=i,i=o,o=e,e=T+(x+w)|0}r[0]=r[0]+e|0,r[1]=r[1]+o|0,r[2]=r[2]+i|0,r[3]=r[3]+c|0,r[4]=r[4]+u|0,r[5]=r[5]+f|0,r[6]=r[6]+d|0,r[7]=r[7]+g|0};function c(r,t){r.constructor===String&&(r=o.convertString.UTF8.stringToBytes(r));var n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e=function(r){for(var t=[],n=0,e=0;n<r.length;n++,e+=8)t[e>>>5]|=r[n]<<24-e%32;return t}(r),s=8*r.length;e[s>>5]|=128<<24-s%32,e[15+(s+64>>9<<4)]=s;for(var a=0;a<e.length;a+=16)i(n,e,a);var c=function(r){for(var t=[],n=0;n<32*r.length;n+=8)t.push(r[n>>>5]>>>24-n%32&255);return t}(n);return t&&t.asBytes?c:t&&t.asString?o.convertString.bytesToString(c):o.bytesToHex(c)}c.x2=function(r,t){return c(c(r,{asBytes:!0}),t)}}(r)}));const s="2d37e395cc590b4e127317494566f1aaf881f0ac1b5ff7d4180506fd682d68ea";const a=new class{async isAuthenticated(){const r=await this.getUserData();return r&&r.hashedPassword===s}async getUserData(){const{zeaUserData:r}=window.localStorage;return r&&JSON.parse(r)}async setUserData(r){return r.password?(r.hashedPassword=o(r.password),delete r.password,console.log("Password Hash:",r.hashedPassword),r.hashedPassword!==s?Promise.reject(new Error("Invalid Password")):void(window.localStorage.zeaUserData=JSON.stringify(r))):Promise.reject(new Error("Password not provided"))}async signOut(){localStorage.removeItem("zeaUserData")}};export{a};
//# sourceMappingURL=auth-b10b2639.js.map
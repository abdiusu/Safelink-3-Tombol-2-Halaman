//<![CDATA[

/* Safelink 3 Tombol 2 Halaman
Creator Design : Abdi Syahputra Harahap
Website        : www.jkoding.xyz
Pesan          : Untuk Panduan pemasangan safelink ini, silahkan kunjungi website tersebut. Sukses Buat Blogger.. :)


//setting Safelink
TimeLoadingButtonFirst = 10;
TimeLoadingButton1 = 20;
TimeLoadingButton2 = 20;
TimeLoadingBoxCopy = 20;
ColorButtonFirst = '#2441bf';
ColorButton1 = '#1ede4d';
ColorButton2 = '#de231e';
ColorBoxCopy = '#100909';
TextStartButtonFirst = 'Please Wait...';
TextStartButton1 = 'Please Wait...';
TextStartButton2 = 'Please Wait...';
TextEndButtonFirst = 'Visit Link';
TextEndButton1 = 'Get Link';
TextEndButton2 = 'Visit Link';
HeightScroolToButton2 = 70;
HeightScroolToBoxCopy = 70;
PathPage1 = '#get';
PathPage2 = '#go';

*/

var CryptoJS=CryptoJS||function(t,e){var n={},r=n.lib={},i=r.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var n=new t;return e&&n.mixIn(e),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;i>o;o++){var c=n[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=c<<24-(r+o)%4*8}else if(n.length>65535)for(o=0;i>o;o+=4)e[r+o>>>2]=n[o>>>2];else e.push.apply(e,n);return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n=[],r=0;e>r;r+=4)n.push(4294967296*t.random()|0);return new o.init(n,e)}}),c=n.enc={},a=c.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;n>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;e>r;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new o.init(n,e/2)}},s=c.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;n>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;e>r;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new o.init(n,e)}},u=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(s.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return s.parse(unescape(encodeURIComponent(t)))}},l=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,i=n.sigBytes,c=this.blockSize,a=i/(4*c),s=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*c,u=t.min(4*s,i);if(s){for(var l=0;s>l;l+=c)this._doProcessBlock(r,l);var d=r.splice(0,s);n.sigBytes-=u}return new o.init(d,u)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),d=(r.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new d.HMAC.init(t,n).finalize(e)}}}),n.algo={});return n}(Math);!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var i=[],o=0;n>o;o+=3)for(var c=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;4>a&&n>o+.75*a;a++)i.push(r.charAt(c>>>6*(3-a)&63));var s=r.charAt(64);if(s)for(;i.length%4;)i.push(s);return i.join("")},parse:function(t){var n=t.length,r=this._map,i=r.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(n=o)}for(var c=[],a=0,s=0;n>s;s++)if(s%4){var u=r.indexOf(t.charAt(s-1))<<s%4*2,l=r.indexOf(t.charAt(s))>>>6-s%4*2;c[a>>>2]|=(u|l)<<24-a%4*8,a++}return e.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,n,r,i,o,c){var a=t+(e&n|~e&r)+i+c;return(a<<o|a>>>32-o)+e}function n(t,e,n,r,i,o,c){var a=t+(e&r|n&~r)+i+c;return(a<<o|a>>>32-o)+e}function r(t,e,n,r,i,o,c){var a=t+(e^n^r)+i+c;return(a<<o|a>>>32-o)+e}function i(t,e,n,r,i,o,c){var a=t+(n^(e|~r))+i+c;return(a<<o|a>>>32-o)+e}var o=CryptoJS,c=o.lib,a=c.WordArray,s=c.Hasher,u=o.algo,l=[];!function(){for(var e=0;64>e;e++)l[e]=4294967296*t.abs(t.sin(e+1))|0}();var d=u.MD5=s.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var c=0;16>c;c++){var a=o+c,s=t[a];t[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}var u=this._hash.words,d=t[o+0],p=t[o+1],f=t[o+2],y=t[o+3],h=t[o+4],g=t[o+5],m=t[o+6],v=t[o+7],B=t[o+8],x=t[o+9],_=t[o+10],k=t[o+11],C=t[o+12],S=t[o+13],E=t[o+14],b=t[o+15],w=u[0],I=u[1],L=u[2],T=u[3];w=e(w,I,L,T,d,7,l[0]),T=e(T,w,I,L,p,12,l[1]),L=e(L,T,w,I,f,17,l[2]),I=e(I,L,T,w,y,22,l[3]),w=e(w,I,L,T,h,7,l[4]),T=e(T,w,I,L,g,12,l[5]),L=e(L,T,w,I,m,17,l[6]),I=e(I,L,T,w,v,22,l[7]),w=e(w,I,L,T,B,7,l[8]),T=e(T,w,I,L,x,12,l[9]),L=e(L,T,w,I,_,17,l[10]),I=e(I,L,T,w,k,22,l[11]),w=e(w,I,L,T,C,7,l[12]),T=e(T,w,I,L,S,12,l[13]),L=e(L,T,w,I,E,17,l[14]),w=n(w,I=e(I,L,T,w,b,22,l[15]),L,T,p,5,l[16]),T=n(T,w,I,L,m,9,l[17]),L=n(L,T,w,I,k,14,l[18]),I=n(I,L,T,w,d,20,l[19]),w=n(w,I,L,T,g,5,l[20]),T=n(T,w,I,L,_,9,l[21]),L=n(L,T,w,I,b,14,l[22]),I=n(I,L,T,w,h,20,l[23]),w=n(w,I,L,T,x,5,l[24]),T=n(T,w,I,L,E,9,l[25]),L=n(L,T,w,I,y,14,l[26]),I=n(I,L,T,w,B,20,l[27]),w=n(w,I,L,T,S,5,l[28]),T=n(T,w,I,L,f,9,l[29]),L=n(L,T,w,I,v,14,l[30]),w=r(w,I=n(I,L,T,w,C,20,l[31]),L,T,g,4,l[32]),T=r(T,w,I,L,B,11,l[33]),L=r(L,T,w,I,k,16,l[34]),I=r(I,L,T,w,E,23,l[35]),w=r(w,I,L,T,p,4,l[36]),T=r(T,w,I,L,h,11,l[37]),L=r(L,T,w,I,v,16,l[38]),I=r(I,L,T,w,_,23,l[39]),w=r(w,I,L,T,S,4,l[40]),T=r(T,w,I,L,d,11,l[41]),L=r(L,T,w,I,y,16,l[42]),I=r(I,L,T,w,m,23,l[43]),w=r(w,I,L,T,x,4,l[44]),T=r(T,w,I,L,C,11,l[45]),L=r(L,T,w,I,b,16,l[46]),w=i(w,I=r(I,L,T,w,f,23,l[47]),L,T,d,6,l[48]),T=i(T,w,I,L,v,10,l[49]),L=i(L,T,w,I,E,15,l[50]),I=i(I,L,T,w,g,21,l[51]),w=i(w,I,L,T,C,6,l[52]),T=i(T,w,I,L,y,10,l[53]),L=i(L,T,w,I,_,15,l[54]),I=i(I,L,T,w,p,21,l[55]),w=i(w,I,L,T,B,6,l[56]),T=i(T,w,I,L,b,10,l[57]),L=i(L,T,w,I,m,15,l[58]),I=i(I,L,T,w,S,21,l[59]),w=i(w,I,L,T,h,6,l[60]),T=i(T,w,I,L,k,10,l[61]),L=i(L,T,w,I,f,15,l[62]),I=i(I,L,T,w,x,21,l[63]),u[0]=u[0]+w|0,u[1]=u[1]+I|0,u[2]=u[2]+L|0,u[3]=u[3]+T|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;n[i>>>5]|=128<<24-i%32;var o=t.floor(r/4294967296),c=r;n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),e.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,s=a.words,u=0;4>u;u++){var l=s[u];s[u]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return a},clone:function(){var t=s.clone.call(this);return t._hash=this._hash.clone(),t}});o.MD5=s._createHelper(d),o.HmacMD5=s._createHmacHelper(d)}(Math),function(){var t=CryptoJS,e=t.lib,n=e.Base,r=e.WordArray,i=t.algo,o=i.MD5,c=i.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var n=this.cfg,i=n.hasher.create(),o=r.create(),c=o.words,a=n.keySize,s=n.iterations;c.length<a;){u&&i.update(u);var u=i.update(t).finalize(e);i.reset();for(var l=1;s>l;l++)u=i.finalize(u),i.reset();o.concat(u)}return o.sigBytes=4*a,o}});t.EvpKDF=function(t,e,n){return c.create(n).compute(t,e)}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,n=e.lib,r=n.Base,i=n.WordArray,o=n.BufferedBlockAlgorithm,c=e.enc,a=(c.Utf8,c.Base64),s=e.algo.EvpKDF,u=n.Cipher=o.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?v:g}return function(e){return{encrypt:function(n,r,i){return t(r).encrypt(e,n,r,i)},decrypt:function(n,r,i){return t(r).decrypt(e,n,r,i)}}}}()}),l=(n.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),d=n.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=l.CBC=function(){function e(e,n,r){var i=this._iv;if(i){var o=i;this._iv=t}else o=this._prevBlock;for(var c=0;r>c;c++)e[n+c]^=o[c]}var n=d.extend();return n.Encryptor=n.extend({processBlock:function(t,n){var r=this._cipher,i=r.blockSize;e.call(this,t,n,i),r.encryptBlock(t,n),this._prevBlock=t.slice(n,n+i)}}),n.Decryptor=n.extend({processBlock:function(t,n){var r=this._cipher,i=r.blockSize,o=t.slice(n,n+i);r.decryptBlock(t,n),e.call(this,t,n,i),this._prevBlock=o}}),n}(),f=(e.pad={}).Pkcs7={pad:function(t,e){for(var n=4*e,r=n-t.sigBytes%n,o=r<<24|r<<16|r<<8|r,c=[],a=0;r>a;a+=4)c.push(o);var s=i.create(c,r);t.concat(s)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(n.BlockCipher=u.extend({cfg:u.cfg.extend({mode:p,padding:f}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,n=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else{r=n.createDecryptor;this._minBufferSize=1}this._mode=r.call(n,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{e=this._process(!0);t.unpad(e)}return e},blockSize:4}),n.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),h=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,n=t.salt;if(n)var r=i.create([1398893684,1701076831]).concat(n).concat(e);else r=e;return r.toString(a)},parse:function(t){var e=a.parse(t),n=e.words;if(1398893684==n[0]&&1701076831==n[1]){var r=i.create(n.slice(2,4));n.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:r})}},g=n.SerializableCipher=r.extend({cfg:r.extend({format:h}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var i=t.createEncryptor(n,r),o=i.finalize(e),c=i.cfg;return y.create({ciphertext:o,key:n,iv:c.iv,algorithm:t,mode:c.mode,padding:c.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),t.createDecryptor(n,r).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),m=(e.kdf={}).OpenSSL={execute:function(t,e,n,r){r||(r=i.random(8));var o=s.create({keySize:e+n}).compute(t,r),c=i.create(o.words.slice(e),4*n);return o.sigBytes=4*e,y.create({key:o,iv:c,salt:r})}},v=n.PasswordBasedCipher=g.extend({cfg:g.cfg.extend({kdf:m}),encrypt:function(t,e,n,r){var i=(r=this.cfg.extend(r)).kdf.execute(n,t.keySize,t.ivSize);r.iv=i.iv;var o=g.encrypt.call(this,t,e,i.key,r);return o.mixIn(i),o},decrypt:function(t,e,n,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var i=r.kdf.execute(n,t.keySize,t.ivSize,e.salt);return r.iv=i.iv,g.decrypt.call(this,t,e,i.key,r)}})}(),function(){var t=CryptoJS,e=t.lib.BlockCipher,n=t.algo,r=[],i=[],o=[],c=[],a=[],s=[],u=[],l=[],d=[],p=[];!function(){for(var t=[],e=0;256>e;e++)t[e]=128>e?e<<1:e<<1^283;var n=0,f=0;for(e=0;256>e;e++){var y=f^f<<1^f<<2^f<<3^f<<4;y=y>>>8^255&y^99,r[n]=y,i[y]=n;var h=t[n],g=t[h],m=t[g],v=257*t[y]^16843008*y;o[n]=v<<24|v>>>8,c[n]=v<<16|v>>>16,a[n]=v<<8|v>>>24,s[n]=v;v=16843009*m^65537*g^257*h^16843008*n;u[y]=v<<24|v>>>8,l[y]=v<<16|v>>>16,d[y]=v<<8|v>>>24,p[y]=v,n?(n=h^t[t[t[m^h]]],f^=t[t[f]]):n=f=1}}();var f=[0,1,2,4,8,16,32,64,128,27,54],y=n.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,n=t.sigBytes/4,i=4*((this._nRounds=n+6)+1),o=this._keySchedule=[],c=0;i>c;c++)if(n>c)o[c]=e[c];else{var a=o[c-1];c%n?n>6&&c%n==4&&(a=r[a>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a]):(a=r[(a=a<<8|a>>>24)>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a],a^=f[c/n|0]<<24),o[c]=o[c-n]^a}for(var s=this._invKeySchedule=[],y=0;i>y;y++){c=i-y;if(y%4)a=o[c];else a=o[c-4];s[y]=4>y||4>=c?a:u[r[a>>>24]]^l[r[a>>>16&255]]^d[r[a>>>8&255]]^p[r[255&a]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,c,a,s,r)},decryptBlock:function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,u,l,d,p,i);n=t[e+1];t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,r,i,o,c,a){for(var s=this._nRounds,u=t[e]^n[0],l=t[e+1]^n[1],d=t[e+2]^n[2],p=t[e+3]^n[3],f=4,y=1;s>y;y++){var h=r[u>>>24]^i[l>>>16&255]^o[d>>>8&255]^c[255&p]^n[f++],g=r[l>>>24]^i[d>>>16&255]^o[p>>>8&255]^c[255&u]^n[f++],m=r[d>>>24]^i[p>>>16&255]^o[u>>>8&255]^c[255&l]^n[f++],v=r[p>>>24]^i[u>>>16&255]^o[l>>>8&255]^c[255&d]^n[f++];u=h,l=g,d=m,p=v}h=(a[u>>>24]<<24|a[l>>>16&255]<<16|a[d>>>8&255]<<8|a[255&p])^n[f++],g=(a[l>>>24]<<24|a[d>>>16&255]<<16|a[p>>>8&255]<<8|a[255&u])^n[f++],m=(a[d>>>24]<<24|a[p>>>16&255]<<16|a[u>>>8&255]<<8|a[255&l])^n[f++],v=(a[p>>>24]<<24|a[u>>>16&255]<<16|a[l>>>8&255]<<8|a[255&d])^n[f++];t[e]=h,t[e+1]=g,t[e+2]=m,t[e+3]=v},keySize:8});t.AES=e._createHelper(y)}();var aesCrypto={};function convertstr(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}!function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var e=this.prefix;return(e+=t.salt.toString())+t.ciphertext.toString()},parse:function(t){var e=CryptoJS.lib.CipherParams.create({}),n=this.prefix.length;return 0!==t.indexOf(this.prefix)?e:(e.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+n)),e.salt=CryptoJS.enc.Hex.parse(t.substring(n,16+n)),e)}},t.encrypt=function(e,n){try{return CryptoJS.AES.encrypt(e,n,{format:t.formatter}).toString()}catch(t){return""}},t.decrypt=function(e,n){try{return CryptoJS.AES.decrypt(e,n,{format:t.formatter}).toString(CryptoJS.enc.Utf8)}catch(t){return""}}}(aesCrypto);var aesCrypto={};!function(t){"use strict";t.formatter={prefix:"",stringify:function(t){var e=this.prefix;return(e+=t.salt.toString())+t.ciphertext.toString()},parse:function(t){var e=CryptoJS.lib.CipherParams.create({}),n=this.prefix.length;return 0!==t.indexOf(this.prefix)?e:(e.ciphertext=CryptoJS.enc.Hex.parse(t.substring(16+n)),e.salt=CryptoJS.enc.Hex.parse(t.substring(n,16+n)),e)}},t.encrypt=function(e,n){try{return CryptoJS.AES.encrypt(e,n,{format:t.formatter}).toString()}catch(t){return""}},t.decrypt=function(e,n){try{return CryptoJS.AES.decrypt(e,n,{format:t.formatter}).toString(CryptoJS.enc.Utf8)}catch(t){return""}}}(aesCrypto);var getReplaceUrl=function(){var t=window.location.href;return t=(t=(t=(t=(t=(t=t.replace("?m=1","")).replace("?m=0","")).replace("%3D","")).replace("%3D%3D","")).replace("&m=1","")).replace("&m=0","")};function AnimeButton(t,e,n,r,i,o,c){var a=0;!function s(){(a+=1)<11&&(document.getElementById(e).setAttribute("style","background: linear-gradient(90deg, "+n+" "+10*a+"%, #cccccc 1%);"),document.getElementById(e).innerHTML=r+10*a+"%",document.getElementById(e).disabled=!0,10==a&&(document.getElementById(e).innerHTML=i,document.getElementById(e).removeAttribute("disabled"),document.getElementById(e).setAttribute("onclick",o),executeFunctionByName(c)),setTimeout(function(){s()},1e3*t/10))}()}function AnimeInput(t,e,n,r,i){document.getElementById(e).value=r,document.getElementById("CopyText").innerHTML="Plase Wait...",document.getElementById("CopyText").disabled=!0;var o=0;!function r(){(o+=1)<11&&(document.getElementById(e).setAttribute("style","background: linear-gradient(90deg, "+n+" "+10*o+"%, #cccccc 1%);"),10==o&&(document.getElementById(e).value=i,document.getElementById("iconNotifGetLink").innerHTML='<i class="far fa-check-circle"></i>',document.getElementById("NotifGetLink").innerHTML="Succes",document.getElementById("CopyText").innerHTML="<span id='iconCopy'><i class=\"far fa-copy\"></i></span>\n  <span id='TexButtonCopy'>Copy Link</span>",document.getElementById("CopyText").removeAttribute("disabled")),setTimeout(function(){r()},1e3*t/10))}()}function CopyText(){document.getElementById("TexButtonCopy").innerHTML="Please Wait..",document.getElementById("panelCopy").disabled=!1,document.getElementById("panelCopy").select(),document.getElementById("iconCopy").innerHTML='<i class="fas fa-cog fa-spin"></i>';try{document.execCommand("copy");setTimeout(function(){document.getElementById("TexButtonCopy").innerHTML="Copied",document.getElementById("iconCopy").innerHTML='<i class="far fa-check-circle"></i>',document.getElementById("panelCopy").disabled=!0},500)}catch(t){}}function executeFunctionByName(functionName,context){var args,namespaces,func;if(void 0===functionName)throw"function name not specified";if("function"!=typeof eval(functionName))throw functionName+" is not a function";if(void 0!==context)if("object"==typeof context&&context instanceof Array==!1){if("function"!=typeof context[functionName])throw context+"."+functionName+" is not a function";args=Array.prototype.slice.call(arguments,2)}else args=Array.prototype.slice.call(arguments,1),context=window;else context=window;namespaces=functionName.split("."),func=namespaces.pop();for(var i=0;i<namespaces.length;i++)context=context[namespaces[i]];return context[func].apply(context,args)}if(window.location.href.indexOf(PathPage1)>0)if(document.getElementById("boxstart1")){document.getElementById("boxstart1").innerHTML='<span id="myButton1" disabled></span>';var getLinkDefault=window.location.href.split(PathPage1)[0],replaceurl=getReplaceUrl();window.history.replaceState({},document.title,getLinkDefault);var getLinkEncrypt=replaceurl.split(PathPage1)[1];AnimeButton(TimeLoadingButtonFirst,"myButton1",ColorButtonFirst,TextStartButtonFirst,TextEndButtonFirst,"getLink1();","getVisit1");var cek_listgeturl="";function getVisit1(){var t="//"+window.location.hostname+"/feeds/posts/summary/?alt=json-in-script&orderby=updated&max-results=9999";0==cek_listgeturl.length&&$.ajax({url:t,type:"get",dataType:"jsonp",success:function(t){var e=t.feed,n=e.openSearch$totalResults.$t;if(n>150)var r=150;if(n<=150)r=n;for(var i=new Array,o=0;o<r;o++){if(void 0===e.entry[o].link[4])e.entry[o].link[2].href.indexOf(window.location.hostname)>=0&&(i[o]=e.entry[o].link[2].href);else i[o]=e.entry[o].link[4].href}i,cek_listgeturl=i},async:!1})}function getLink1(){var t=cek_listgeturl[parseInt(Math.random()*cek_listgeturl.length)]+PathPage2+getLinkEncrypt;let e=document.createElement("a");e.target="_self",e.href=t,e.click()}}else console.log('No element found with id tag "boxstart1"');if(window.location.href.indexOf(PathPage2)>0)if(document.getElementById("stoped1")&&document.getElementById("stoped1").setAttribute("style","height: "+HeightScroolToButton2+"px;"),document.getElementById("stoped2")&&document.getElementById("stoped2").setAttribute("style","height: "+HeightScroolToBoxCopy+"px;"),document.getElementById("boxstart1")){document.getElementById("boxstart1").innerHTML='<span id="myButton1" disabled>Get Link</span>',document.getElementById("boxstart2").innerHTML='<span id="myButton2" disabled>Next GoTo Link</span>',document.getElementById("boxstart3").innerHTML="\n                        <div id='BoxCopyJkoding'>\n                        <div class='AreaLimitBox'>\n                        <div class='ArenaTitleCopy'><i class=\"fas fa-cog fa-spin\"></i> Link Download\n                        <div class='ArenNameFile'>Direct From : <span id='NameFile'></span>\n                        <div id='AreaNotifGetLink'>\n                        <span id='iconNotifGetLink'><i class=\"fas fa-sync fa-spin\"></i></span>\n                        <span id='NotifGetLink'>Decryption Link</span>\n                        </div>\n                        </div>\n                        </div>\n                        <div class='areaBoxCopy'>\n                        <input id='panelCopy' value='' disabled></input>\n                        </div>\n                        <div class='areaButtonCopy'>\n                        <button id='CopyText' onclick='CopyText()' disabled>\n                        <span id='iconCopy'><i class=\"far fa-copy\"></i></span>\n                        <span id='TexButtonCopy'>Copy Link</span>\n                        </button>\n                        </div>\n                        </div>\n                        </div>\n                        ",document.getElementById("boxstart2").setAttribute("class","none"),document.getElementById("boxstart3").setAttribute("class","none");var getLinkDefault=window.location.href.split(PathPage2)[0],replaceurl=getReplaceUrl();window.history.replaceState({},document.title,getLinkDefault);var getLinkEncrypt=replaceurl.split(PathPage2)[1],getLinkDecrypt=aesCrypto.decrypt(convertstr(getLinkEncrypt),convertstr("root"));if(getLinkDecrypt.split("").length>0&&getLinkDecrypt.indexOf("DirectFrom:")>0){AnimeButton(TimeLoadingButton1,"myButton1",ColorButton1,TextStartButton1,TextEndButton1,"geToButton2();","getVisit2");var getDirectFrom=getLinkDecrypt.split("DirectFrom:")[1],getLinkDecryptFix=getLinkDecrypt.split("DirectFrom:")[0];function getVisit2(){document.getElementById("boxstart2")?document.getElementById("boxstart2").innerHTML='<span id="myButton2" disabled>...</span>':console.log('No element found with id tag "boxstart2"')}function geToButton2(){AnimeButton(TimeLoadingButton2,"myButton2",ColorButton2,TextStartButton2,TextEndButton2,"geToButton3();","getVisit3"),document.getElementById("stoped1").scrollIntoView({behavior:"smooth"}),document.getElementById("boxstart2").removeAttribute("class"),document.getElementById("boxstart1").setAttribute("class","none")}function getVisit3(){document.getElementById("boxstart3")||console.log('No element found with id tag "boxstart3"')}function geToButton3(){document.getElementById("stoped2").scrollIntoView({behavior:"smooth"}),AnimeInput(TimeLoadingBoxCopy,"panelCopy",ColorBoxCopy,getLinkEncrypt,getLinkDecryptFix),document.getElementById("boxstart3").removeAttribute("class"),document.getElementById("boxstart2").setAttribute("class","none")}document.getElementById("NameFile").innerHTML=getDirectFrom}}else console.log('No element found with id tag "boxstart1"');
//]]>

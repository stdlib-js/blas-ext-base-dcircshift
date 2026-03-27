"use strict";var h=function(o,u){return function(){return u||o((u={exports:{}}).exports,u),u.exports}};var y=h(function(K,j){
var d=require('@stdlib/math-base-special-floor/dist');function w(o,u,r,p,l){var q,c,s,e,v,f,a,n,i,t;if(o<=0||(u%=o,u<0&&(u+=o),u===0))return r;if(i=p,c=o-u,q=u,c<q){for(e=l,v=e+c*i,f=v,a=v+q*i,n=d(c/2),t=0;t<n;t++)v-=i,a-=i,s=r[v],r[v]=r[e],r[e]=r[f],r[f]=r[a],r[a]=s,e+=i,f+=i;for(n=d((a-f)/i/2),t=0;t<n;t++)a-=i,s=r[f],r[f]=r[a],r[a]=r[e],r[e]=s,e+=i,f+=i;for(n=d((a-e)/i/2),t=0;t<n;t++)a-=i,s=r[e],r[e]=r[a],r[a]=s,e+=i}else if(c>q){for(e=l,v=e+c*i,f=v,a=v+q*i,n=d(q/2),t=0;t<n;t++)v-=i,a-=i,s=r[v],r[v]=r[e],r[e]=r[f],r[f]=r[a],r[a]=s,e+=i,f+=i;for(n=d((v-e)/i/2),t=0;t<n;t++)v-=i,a-=i,s=r[v],r[v]=r[e],r[e]=r[a],r[a]=s,e+=i;for(n=d((a-e)/i/2),t=0;t<n;t++)a-=i,s=r[e],r[e]=r[a],r[a]=s,e+=i}else for(e=l,v=e+c*i,t=0;t<c;t++)s=r[e],r[e]=r[v],r[v]=s,e+=i,v+=i;return r}j.exports=w
});var _=h(function(L,R){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(o,u,r,p){return A(o,u,r,p,z(o,p))}R.exports=B
});var E=h(function(M,g){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),D=y();C(b,"ndarray",D);g.exports=b
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=E(),m,O=G(F(__dirname,"./native.js"));H(O)?m=I:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

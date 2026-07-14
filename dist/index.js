"use strict";var h=function(o,s){return function(){try{return s||o((s={exports:{}}).exports,s),s.exports}catch(r){throw (s=0, r)}};};var y=h(function(K,j){
var d=require('@stdlib/math-base-special-floor/dist');function w(o,s,r,p,l){var q,c,u,e,v,f,a,n,i,t;if(o<=0||(s%=o,s<0&&(s+=o),s===0))return r;if(i=p,c=o-s,q=s,c<q){for(e=l,v=e+c*i,f=v,a=v+q*i,n=d(c/2),t=0;t<n;t++)v-=i,a-=i,u=r[v],r[v]=r[e],r[e]=r[f],r[f]=r[a],r[a]=u,e+=i,f+=i;for(n=d((a-f)/i/2),t=0;t<n;t++)a-=i,u=r[f],r[f]=r[a],r[a]=r[e],r[e]=u,e+=i,f+=i;for(n=d((a-e)/i/2),t=0;t<n;t++)a-=i,u=r[e],r[e]=r[a],r[a]=u,e+=i}else if(c>q){for(e=l,v=e+c*i,f=v,a=v+q*i,n=d(q/2),t=0;t<n;t++)v-=i,a-=i,u=r[v],r[v]=r[e],r[e]=r[f],r[f]=r[a],r[a]=u,e+=i,f+=i;for(n=d((v-e)/i/2),t=0;t<n;t++)v-=i,a-=i,u=r[v],r[v]=r[e],r[e]=r[a],r[a]=u,e+=i;for(n=d((a-e)/i/2),t=0;t<n;t++)a-=i,u=r[e],r[e]=r[a],r[a]=u,e+=i}else for(e=l,v=e+c*i,t=0;t<c;t++)u=r[e],r[e]=r[v],r[v]=u,e+=i,v+=i;return r}j.exports=w
});var _=h(function(L,R){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(o,s,r,p){return A(o,s,r,p,z(o,p))}R.exports=B
});var E=h(function(M,g){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),D=y();C(b,"ndarray",D);g.exports=b
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=E(),m,O=G(F(__dirname,"./native.js"));H(O)?m=I:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

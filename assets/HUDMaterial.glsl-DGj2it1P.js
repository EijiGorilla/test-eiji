import{ii as kt,vp as Nt,bI as Wt,bh as Xt,rE as Yt,cX as bt,bB as Kt,vq as Qt,vr as Zt,t0 as Jt,nN as eo,bk as wt,ec as to,vs as oo,vt as io,vu as ao,v2 as so,v3 as no,v4 as ro,jf as lo,fT as oe,bg as F,eW as W,bG as L,bR as k,f2 as G,f1 as q,bE as ie,fR as re,bj as Je,bi as yt,bC as We,h1 as Xe,lC as co,kc as Ye,rA as uo,cz as fo,iS as po,_ as ho,jS as et,a0 as E,jt as tt,iO as Pt,bP as $t,ks as Ve,lB as St,bm as zt,eX as we,fU as Ot,dT as vo,gh as go,fP as ot,iK as mo,jA as xo,bT as bo}from"./index-tyY3opuW.js";import{u as wo}from"./meshVertexSpaceUtils-hTmGAXMc.js";import{t as Ke}from"./projectVectorToVector-Cvn2-b4C.js";import{o as yo,x as Po}from"./hydratedFeatures-DZ99aBtl.js";import{r as H,t as it,n as X}from"./vec3f32-WCVSSNPR.js";import{aE as $o,n as Y,m as K,aF as at,aG as Ct,D as So,ax as zo,aq as Qe,r as Be,a6 as Me,aH as Oo,af as Co,aI as At,aJ as Mt,as as Ao,K as Mo,ap as Dt,i as Do,aK as Vo,G as jo,H as To,M as Fo,al as st,L as Fe,b as nt,aL as Ro,a2 as te,ai as _o,a as Eo,j as Uo,k as Io,W as Ho,V as Bo,X as Vt,Y as Go,x as U,A as Lo,aM as Re,t as qo,aN as ko,aO as No,aP as Wo,aB as Xo,aQ as Yo,aR as Ko,aS as Qo,aT as rt,aU as Zo,aV as lt,aW as ct,aX as Jo,aD as ei}from"./OutputColorHighlightOID.glsl-DAy6f2vv.js";import{A as ti,U as jt}from"./Indices-CzUDZv2g.js";import{j as oi,U as ii,K as ai}from"./plane-XJQNVhrd.js";import{k as si}from"./sphere-CE59TCNS.js";import{t as M}from"./orientedBoundingBox-BjlZex9A.js";import{s as Tt,g as ni}from"./BufferView-BOF5J9rp.js";import{Q as Ft,t as ri}from"./InterleavedLayout-B42gSFgX.js";import{T as li,d as ci,c as ui}from"./renderState-CKc66y4x.js";import{t as fi}from"./VertexAttributeLocations-BfZbt_DV.js";import{t as $,n as I}from"./glsl-B5bJgrnA.js";import{s as pi}from"./ShaderBuilder-YqrUedyA.js";function ga(o,e){if(o.type==="point")return ee(o,e,!1);if(yo(o))switch(o.type){case"extent":return ee(o.center,e,!1);case"polygon":return ee(ft(o),e,!1);case"polyline":return ee(ut(o),e,!0);case"mesh":return ee(wo(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ee(di(o),e,!0);case"polygon":return ee(ft(o),e,!0);case"polyline":return ee(ut(o),e,!0);case"multipoint":return}}function ut(o){const e=o.paths[0];if(!e||e.length===0)return null;const i=Zt(e,Jt(e)/2);return Ke(i[0],i[1],i[2],o.spatialReference)}function di(o){return Ke(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function ft(o){const e=o.rings[0];if(!e||e.length===0)return null;const i=eo(o.rings,!!o.hasZ);return Ke(i[0],i[1],i[2],o.spatialReference)}function ee(o,e,i){const t=i?o:Po(o);return e&&o?Qt(o,t,e)?t:null:t}function ma(o,e,i,t=0){if(o){e||(e=bt());const a=o;let n=.5*a.width*(i-1),s=.5*a.height*(i-1);return a.width<1e-7*a.height?n+=s/20:a.height<1e-7*a.width&&(s+=n/20),Kt(e,a.xmin-n-t,a.ymin-s-t,a.xmax+n+t,a.ymax+s+t),e}return null}function xa(o,e,i=null){const t=Nt(Yt);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),i&&Wt(t,t,i),t}function ba(o=kt,e,i,t=1){const a=new Array(3);if(e==null||i==null)a[0]=1,a[1]=1,a[2]=1;else{let n,s=0;for(let r=2;r>=0;r--){const l=o[r],c=l!=null,u=r===0&&!n&&!c,p=i[r];let h;l==="symbol-value"||u?h=p!==0?e[r]/p:1:c&&l!=="proportional"&&isFinite(l)&&(h=p!==0?l/p:1),h!=null&&(a[r]=h,n=h,s=Math.max(s,Math.abs(h)))}for(let r=2;r>=0;r--)a[r]==null?a[r]=n:a[r]===0&&(a[r]=.001*s)}for(let n=2;n>=0;n--)a[n]/=t;return Xt(a)}function hi(o){return o.isPrimitive!=null}function wa(o){return vi(hi(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function vi(o){const e=i=>i==null||i>=0;return Array.isArray(o)?o.every(e):e(o)}function ya(o,e,i,t=wt()){return o&&so(t,t,-o/180*Math.PI),e&&no(t,t,e/180*Math.PI),i&&ro(t,t,i/180*Math.PI),t}function Pa(o,e,i){if(i.minDemResolution!=null)return i.minDemResolution;const t=to(e),a=oo(o)*t,n=io(o)*t,s=ao(o)*(e.isGeographic?1:t);return a===0&&n===0&&s===0?i.minDemResolutionForPoints:.01*Math.max(a,n,s)}function pt(o,e){const i=o[e],t=o[e+1],a=o[e+2];return Math.sqrt(i*i+t*t+a*a)}function gi(o,e){const i=o[e],t=o[e+1],a=o[e+2],n=1/Math.sqrt(i*i+t*t+a*a);o[e]*=n,o[e+1]*=n,o[e+2]*=n}function dt(o,e,i){o[e]*=i,o[e+1]*=i,o[e+2]*=i}function mi(o,e,i,t,a,n=e){(a=a||o)[n]=o[e]+i[t],a[n+1]=o[e+1]+i[t+1],a[n+2]=o[e+2]+i[t+2]}function xi(){return ht??=bi(),ht}function bi(){const i=new M([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new $o([["uv0",i]])}let ht=null;const _e=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],wi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],yi=[0,0,1,0,1,1,0,1],Pi=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Rt=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Rt[6*o+e]=o;const se=new Array(36);for(let o=0;o<6;o++)se[6*o]=0,se[6*o+1]=1,se[6*o+2]=2,se[6*o+3]=2,se[6*o+4]=3,se[6*o+5]=0;function $a(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(24);for(let t=0;t<8;t++)i[3*t]=_e[t][0]*e[0],i[3*t+1]=_e[t][1]*e[1],i[3*t+2]=_e[t][2]*e[2];return new K(o,[["position",new M(i,Pi,3,!0)],["normal",new M(wi,Rt,3)],["uv0",new M(yi,se,2)]])}const Ee=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],$i=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Si=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zi=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Sa(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(18);for(let t=0;t<6;t++)i[3*t]=Ee[t][0]*e[0],i[3*t+1]=Ee[t][1]*e[1],i[3*t+2]=Ee[t][2]*e[2];return new K(o,[["position",new M(i,Si,3,!0)],["normal",new M($i,zi,3)]])}const $e=H(-.5,0,-.5),Se=H(.5,0,-.5),ze=H(0,0,.5),Oe=H(0,.5,0),ce=X(),ue=X(),pe=X(),de=X(),he=X();W(ce,$e,Oe),W(ue,$e,Se),ie(pe,ce,ue),L(pe,pe),W(ce,Se,Oe),W(ue,Se,ze),ie(de,ce,ue),L(de,de),W(ce,ze,Oe),W(ue,ze,$e),ie(he,ce,ue),L(he,he);const Ue=[$e,Se,ze,Oe],Oi=[0,-1,0,pe[0],pe[1],pe[2],de[0],de[1],de[2],he[0],he[1],he[2]],Ci=[0,1,2,3,1,0,3,2,1,3,0,2],Ai=[0,0,0,1,1,1,2,2,2,3,3,3];function za(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(12);for(let t=0;t<4;t++)i[3*t]=Ue[t][0]*e[0],i[3*t+1]=Ue[t][1]*e[1],i[3*t+2]=Ue[t][2]*e[2];return new K(o,[["position",new M(i,Ci,3,!0)],["normal",new M(Oi,Ai,3)]])}function Oa(o,e,i,t,a={uv:!0}){const n=-Math.PI,s=2*Math.PI,r=-Math.PI/2,l=Math.PI,c=Math.max(3,Math.floor(i)),u=Math.max(2,Math.floor(t)),p=(c+1)*(u+1),h=Y(3*p),w=Y(3*p),y=Y(2*p),m=[];let d=0;for(let x=0;x<=u;x++){const C=[],f=x/u,z=r+f*l,O=Math.cos(z);for(let P=0;P<=c;P++){const B=P/c,b=n+B*s,j=Math.cos(b)*O,V=Math.sin(z),Q=-Math.sin(b)*O;h[3*d]=j*e,h[3*d+1]=V*e,h[3*d+2]=Q*e,w[3*d]=j,w[3*d+1]=V,w[3*d+2]=Q,y[2*d]=B,y[2*d+1]=f,C.push(d),++d}m.push(C)}const v=new Array;for(let x=0;x<u;x++)for(let C=0;C<c;C++){const f=m[x][C],z=m[x][C+1],O=m[x+1][C+1],P=m[x+1][C];x===0?(v.push(f),v.push(O),v.push(P)):x===u-1?(v.push(f),v.push(z),v.push(O)):(v.push(f),v.push(z),v.push(O),v.push(O),v.push(P),v.push(f))}const g=[["position",new M(h,v,3,!0)],["normal",new M(w,v,3,!0)]];return a.uv&&g.push(["uv0",new M(y,v,2,!0)]),a.offset&&(g[0][0]="offset",g.push(["position",new M(Float64Array.from(a.offset),jt(v.length),3,!0)])),new K(o,g)}function Ca(o,e,i,t){const a=Mi(e,i);return new K(o,a)}function Mi(o,e,i){let t,a;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<t.length;l+=3)dt(t,l,o/pt(t,l));let n={};function s(l,c){l>c&&([l,c]=[c,l]);const u=l.toString()+"."+c.toString();if(n[u])return n[u];let p=t.length;return t.length+=3,mi(t,3*l,t,3*c,t,p),dt(t,p,o/pt(t,p)),p/=3,n[u]=p,p}for(let l=0;l<e;l++){const c=a.length,u=new Array(4*c);for(let p=0;p<c;p+=3){const h=a[p],w=a[p+1],y=a[p+2],m=s(h,w),d=s(w,y),v=s(y,h),g=4*p;u[g]=h,u[g+1]=m,u[g+2]=v,u[g+3]=w,u[g+4]=d,u[g+5]=m,u[g+6]=y,u[g+7]=v,u[g+8]=d,u[g+9]=m,u[g+10]=d,u[g+11]=v}a=u,n={}}const r=at(t);for(let l=0;l<r.length;l+=3)gi(r,l);return[["position",new M(at(t),a,3,!0)],["normal",new M(r,a,3,!0)]]}function Aa(o,{normal:e,position:i,color:t,rotation:a,size:n,centerOffsetAndDistance:s,uvi:r,featureAttribute:l,olidColor:c=null}={}){const u=i?Je(i):F(),p=e?Je(e):yt(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],w=n!=null&&n.length===2?n:[1,1],y=a!=null?[a]:[0],m=jt(1),d=[["position",new M(u,m,3,!0)],["normal",new M(p,m,3,!0)],["color",new M(h,m,4,!0)],["size",new M(w,m,2)],["rotation",new M(y,m,1,!0)]];if(r&&d.push(["uvi",new M(r,m,r.length)]),s!=null){const v=[s[0],s[1],s[2],s[3]];d.push(["centerOffsetAndDistance",new M(v,m,4)])}if(l){const v=[l[0],l[1],l[2],l[3]];d.push(["featureAttribute",new M(v,m,4)])}return new K(o,d,null,1,c,void 0,xi())}function Di(o,e,i,t,a=!0,n=!0){let s=0;const r=e,l=o;let c=H(0,s,0),u=H(0,s+l,0),p=H(0,-1,0),h=H(0,1,0);t&&(s=l,u=H(0,0,0),c=H(0,s,0),p=H(0,1,0),h=H(0,-1,0));const w=[u,c],y=[p,h],m=i+2,d=Math.sqrt(l*l+r*r);if(t)for(let f=i-1;f>=0;f--){const z=f*(2*Math.PI/i),O=H(Math.cos(z)*r,s,Math.sin(z)*r);w.push(O);const P=H(l*Math.cos(z)/d,-r/d,l*Math.sin(z)/d);y.push(P)}else for(let f=0;f<i;f++){const z=f*(2*Math.PI/i),O=H(Math.cos(z)*r,s,Math.sin(z)*r);w.push(O);const P=H(l*Math.cos(z)/d,r/d,l*Math.sin(z)/d);y.push(P)}const v=new Array,g=new Array;if(a){for(let f=3;f<w.length;f++)v.push(1),v.push(f-1),v.push(f),g.push(0),g.push(0),g.push(0);v.push(w.length-1),v.push(2),v.push(1),g.push(0),g.push(0),g.push(0)}if(n){for(let f=3;f<w.length;f++)v.push(f),v.push(f-1),v.push(0),g.push(f),g.push(f-1),g.push(1);v.push(0),v.push(2),v.push(w.length-1),g.push(1),g.push(2),g.push(y.length-1)}const x=Y(3*m);for(let f=0;f<m;f++)x[3*f]=w[f][0],x[3*f+1]=w[f][1],x[3*f+2]=w[f][2];const C=Y(3*m);for(let f=0;f<m;f++)C[3*f]=y[f][0],C[3*f+1]=y[f][1],C[3*f+2]=y[f][2];return[["position",new M(x,v,3,!0)],["normal",new M(C,g,3,!0)]]}function Ma(o,e,i,t,a,n=!0,s=!0){return new K(o,Di(e,i,t,a,n,s))}function Da(o,e,i,t,a,n,s){const r=a?it(a):H(1,0,0),l=n?it(n):H(0,0,0);s??=!0;const c=X();L(c,r);const u=X();G(u,c,Math.abs(e));const p=X();G(p,u,-.5),q(p,p,l);const h=H(0,1,0);Math.abs(1-We(c,h))<.2&&oe(h,0,0,1);const w=X();ie(w,c,h),L(w,w),ie(h,w,c);const y=2*t+(s?2:0),m=t+(s?2:0),d=Y(3*y),v=Y(3*m),g=Y(2*y),x=new Array(3*t*(s?4:2)),C=new Array(3*t*(s?4:2));s&&(d[3*(y-2)]=p[0],d[3*(y-2)+1]=p[1],d[3*(y-2)+2]=p[2],g[2*(y-2)]=0,g[2*(y-2)+1]=0,d[3*(y-1)]=d[3*(y-2)]+u[0],d[3*(y-1)+1]=d[3*(y-2)+1]+u[1],d[3*(y-1)+2]=d[3*(y-2)+2]+u[2],g[2*(y-1)]=1,g[2*(y-1)+1]=1,v[3*(m-2)]=-c[0],v[3*(m-2)+1]=-c[1],v[3*(m-2)+2]=-c[2],v[3*(m-1)]=c[0],v[3*(m-1)+1]=c[1],v[3*(m-1)+2]=c[2]);const f=(b,j,V)=>{x[b]=j,C[b]=V};let z=0;const O=X(),P=X();for(let b=0;b<t;b++){const j=b*(2*Math.PI/t);G(O,h,Math.sin(j)),G(P,w,Math.cos(j)),q(O,O,P),v[3*b]=O[0],v[3*b+1]=O[1],v[3*b+2]=O[2],G(O,O,i),q(O,O,p),d[3*b]=O[0],d[3*b+1]=O[1],d[3*b+2]=O[2],g[2*b]=b/t,g[2*b+1]=0,d[3*(b+t)]=d[3*b]+u[0],d[3*(b+t)+1]=d[3*b+1]+u[1],d[3*(b+t)+2]=d[3*b+2]+u[2],g[2*(b+t)]=b/t,g[2*b+1]=1;const V=(b+1)%t;f(z++,b,b),f(z++,b+t,b),f(z++,V,V),f(z++,V,V),f(z++,b+t,b),f(z++,V+t,V)}if(s){for(let b=0;b<t;b++){const j=(b+1)%t;f(z++,y-2,m-2),f(z++,b,m-2),f(z++,j,m-2)}for(let b=0;b<t;b++){const j=(b+1)%t;f(z++,b+t,m-1),f(z++,y-1,m-1),f(z++,j+t,m-1)}}const B=[["position",new M(d,x,3,!0)],["normal",new M(v,C,3,!0)],["uv0",new M(g,x,2,!0)]];return new K(o,B)}function Va(o,e,i,t,a,n){t=t||10,a=a==null||a,Tt(e.length>1);const s=[[0,0,0]],r=[],l=[];for(let c=0;c<t;c++){r.push([0,-c-1,-(c+1)%t-1]);const u=c/t*2*Math.PI;l.push([Math.cos(u)*i,Math.sin(u)*i])}return Vi(o,l,e,s,r,a,n)}function Vi(o,e,i,t,a,n,s=H(0,0,0)){const r=e.length,l=Y(i.length*r*3+(6*t.length||0)),c=Y(i.length*r*3+(t?6:0)),u=new Array,p=new Array;let h=0,w=0;const y=F(),m=F(),d=F(),v=F(),g=F(),x=F(),C=F(),f=F(),z=F(),O=F(),P=F(),B=F(),b=F(),j=oi();oe(z,0,1,0),W(m,i[1],i[0]),L(m,m),n?(q(f,i[0],s),L(d,f)):oe(d,0,0,1),vt(m,d,z,z,g,d,gt),k(v,d),k(B,g);for(let S=0;S<t.length;S++)G(x,g,t[S][0]),G(f,d,t[S][2]),q(x,x,f),q(x,x,i[0]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];c[w++]=-m[0],c[w++]=-m[1],c[w++]=-m[2];for(let S=0;S<a.length;S++)u.push(a[S][0]>0?a[S][0]:-a[S][0]-1+t.length),u.push(a[S][1]>0?a[S][1]:-a[S][1]-1+t.length),u.push(a[S][2]>0?a[S][2]:-a[S][2]-1+t.length),p.push(0),p.push(0),p.push(0);let V=t.length;const Q=t.length-1;for(let S=0;S<i.length;S++){let me=!1;S>0&&(k(y,m),S<i.length-1?(W(m,i[S+1],i[S]),L(m,m)):me=!0,q(O,y,m),L(O,O),q(P,i[S-1],v),ii(i[S],O,j),ai(j,si(P,y),f)?(W(f,f,i[S]),L(d,f),ie(g,O,d),L(g,g)):vt(O,v,B,z,g,d,gt),k(v,d),k(B,g)),n&&(q(f,i[S],s),L(b,f));for(let J=0;J<r;J++)if(G(x,g,e[J][0]),G(f,d,e[J][1]),q(x,x,f),L(C,x),c[w++]=C[0],c[w++]=C[1],c[w++]=C[2],q(x,x,i[S]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2],!me){const je=(J+1)%r;u.push(V+J),u.push(V+r+J),u.push(V+je),u.push(V+je),u.push(V+r+J),u.push(V+r+je);for(let Te=0;Te<6;Te++){const qt=u.length-6;p.push(u[qt+Te]-Q)}}V+=r}const le=i[i.length-1];for(let S=0;S<t.length;S++)G(x,g,t[S][0]),G(f,d,t[S][1]),q(x,x,f),q(x,x,le),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];const Z=w/3;c[w++]=m[0],c[w++]=m[1],c[w++]=m[2];const N=V-r;for(let S=0;S<a.length;S++)u.push(a[S][0]>=0?V+a[S][0]:-a[S][0]-1+N),u.push(a[S][2]>=0?V+a[S][2]:-a[S][2]-1+N),u.push(a[S][1]>=0?V+a[S][1]:-a[S][1]-1+N),p.push(Z),p.push(Z),p.push(Z);const ae=[["position",new M(l,u,3,!0)],["normal",new M(c,p,3,!0)]];return new K(o,ae)}function ja(o,e,i,t,a){const n=lo(3*e.length),s=new Array(2*(e.length-1));let r=0,l=0;for(let u=0;u<e.length;u++){for(let p=0;p<3;p++)n[r++]=e[u][p];u>0&&(s[l++]=u-1,s[l++]=u)}const c=[["position",new M(n,s,3,!0)]];if(i&&i.length===e.length&&i[0].length===3){const u=Y(3*i.length);let p=0;for(let h=0;h<e.length;h++)for(let w=0;w<3;w++)u[p++]=i[h][w];c.push(["normal",new M(u,s,3,!0)])}return t&&c.push(["color",new M(t,ti(t.length/4),4)]),new K(o,c,null,2)}function Ta(o,e,i,t,a,n=0){const s=new Array(18),r=[[-i,n,a/2],[t,n,a/2],[0,e+n,a/2],[-i,n,-a/2],[t,n,-a/2],[0,e+n,-a/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)s[3*c]=r[c][0],s[3*c+1]=r[c][1],s[3*c+2]=r[c][2];return new K(o,[["position",new M(s,l,3,!0)]])}function Fa(o,e){const i=o.getMutableAttribute("position").data;for(let t=0;t<i.length;t+=3){const a=i[t],n=i[t+1],s=i[t+2];oe(fe,a,n,s),re(fe,fe,e),i[t]=fe[0],i[t+1]=fe[1],i[t+2]=fe[2]}}function Ra(o,e=o){const i=o.attributes,t=i.get("position").data,a=i.get("normal").data;if(a){const n=e.getMutableAttribute("normal").data;for(let s=0;s<a.length;s+=3){const r=a[s+1];n[s+1]=-a[s+2],n[s+2]=r}}if(t){const n=e.getMutableAttribute("position").data;for(let s=0;s<t.length;s+=3){const r=t[s+1];n[s+1]=-t[s+2],n[s+2]=r}}}function Ie(o,e,i,t,a){return!(Math.abs(We(e,o))>a)&&(ie(i,o,e),L(i,i),ie(t,i,o),L(t,t),!0)}function vt(o,e,i,t,a,n,s){return Ie(o,e,a,n,s)||Ie(o,i,a,n,s)||Ie(o,t,a,n,s)}const gt=.99619469809,fe=F();function ji(o){return o instanceof Float32Array&&o.length>=16}function Ti(o){return Array.isArray(o)&&o.length>=16}function Fi(o){return ji(o)||Ti(o)}const _t=.5;function Ri(o,e){o.include(Ct),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const i=o.vertex;So(i,e),zo(i,e),i.uniforms.add(new Qe("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new Me("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Oo(i),i.code.add($`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add($`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?$.float(0):$`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Co(i),e.draped||(i.uniforms.add(new Me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),i.code.add($`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${$.float(_t)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&At(i),e.hasScreenSizePerspective&&Mt(i),i.code.add($`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?$`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":$`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ze(o){o.uniforms.add(new Ao("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add($`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add($`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function _i(o,e){const{vertex:i,fragment:t}=o;o.include(Mo,e),i.include(Ze),i.main.add($`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add($`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ei(o){o.vertex.uniforms.add(new Me("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Qe("viewport",e=>e.camera.fullViewport),new Dt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),o.vertex.include(Ze),o.vertex.code.add($`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class Ui extends Do{constructor(e,i,t){super(e,"vec4",2,(a,n,s)=>a.setUniform4fv(e,i(n,s),t))}}function Et(o){const e=new pi,{signedDistanceFieldEnabled:i,occlusionTestEnabled:t,horizonCullingEnabled:a,pixelSnappingEnabled:n,hasScreenSizePerspective:s,debugDrawLabelBorder:r,hasVVSize:l,hasVVColor:c,hasRotation:u,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(Ri,o),e.vertex.include(Vo,o);const{occlusionPass:w,output:y,oitPass:m}=o;if(w)return e.include(_i,o),e;const{vertex:d,fragment:v}=e;e.include(Ct),e.include(jo,o),e.include(To,o),t&&e.include(Ei),v.include(Fo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const g=y===9,x=g&&t;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Qe("viewport",P=>P.camera.fullViewport),new st("screenOffset",(P,B)=>Ye(Ce,2*P.screenOffset[0]*B.camera.pixelRatio,2*P.screenOffset[1]*B.camera.pixelRatio)),new st("anchorPosition",P=>ge(P)),new Fe("materialColor",P=>P.color),new Be("materialRotation",P=>P.rotation),new nt("tex",P=>P.texture)),At(d),i&&(d.uniforms.add(new Fe("outlineColor",P=>P.outlineColor)),v.uniforms.add(new Fe("outlineColor",P=>mt(P)?P.outlineColor:uo),new Be("outlineSize",P=>mt(P)?P.outlineSize:0))),a&&d.uniforms.add(new Ui("pointDistanceSphere",(P,B)=>{const b=B.camera.eye,j=P.origin;return fo(j[0]-b[0],j[1]-b[1],j[2]-b[2],po.radius)})),n&&d.include(Ze),s&&(Ro(d),Mt(d)),r&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(l||c)&&e.attributes.add("featureAttribute","vec4"),d.code.add(a?$`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:$`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add($`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${I(s,$`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,$`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${I(l,$`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${I(t,$`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${I(r,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${I(x,$`voccluded = visible ? 0.0 : 1.0;`)}
  `);const C=$`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Hi})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${I(u,$`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,f=n?i?$`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:$`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:$`posProj += quadOffset;`;d.main.add($`
    ${C}
    ${c?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${I(y===10,$`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${$.float(te)};
    ${I(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${$.float(te)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${I(r,$`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),v.uniforms.add(new nt("tex",P=>P.texture)),p&&!g&&v.uniforms.add(new Dt("depthMap",P=>P.mainDepth),new Me("occludedOpacity",P=>P.hudOccludedFragmentOpacity));const z=r?$`(isBorder > 0.0 ? 0.0 : ${$.float(te)})`:$.float(te),O=$`
    ${I(r,$`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${I(h,$`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${i?$`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${z} ||
          fillPixelColor.a + outlinePixelColor.a < ${$.float(te)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${I(!g,$`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${z}) {
          discard;
        }

        ${I(!g,$`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:$`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${z}) {
            discard;
          }
          ${I(!g,$`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${I(p&&!g,$`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${I(!g&&r,$`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(y){case 0:case 1:e.outputs.add("fragColor","vec4",0),y===1&&e.outputs.add("fragEmission","vec4",1),m===1&&e.outputs.add("fragAlpha","float",y===1?2:1),v.main.add($`
        ${O}
        ${I(m===2,$`fragColor.rgb /= fragColor.a;`)}
        ${I(y===1,$`fragEmission = vec4(0.0);`)}
        ${I(m===1,$`fragAlpha = fragColor.a;`)}`);break;case 10:v.main.add($`
        ${O}
        outputObjectAndLayerIdColor();`);break;case 9:e.include(_o,o),v.main.add($`
        ${O}
        outputHighlight(${I(x,$`voccluded == 1.0`,$`false`)});`)}return e}function mt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ge(o){return o.textureIsSignedDistanceField?Ii(o.anchorPosition,o.distanceFieldBoundingBox,Ce):co(Ce,o.anchorPosition),Ce}function Ii(o,e,i){Ye(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ce=Xe(),ye=32e3,Hi=$.float(ye),Bi=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ge,fullUV:ye},Symbol.toStringTag,{value:"Module"}));class Gi extends Uo{constructor(e,i){super(e,i,new Io(Bi,()=>ho(()=>Promise.resolve().then(()=>Ji),void 0)),fi([Ut,Ht()].map(ri))),this.primitiveType=i.occlusionPass?et.POINTS:et.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:i,hasPolygonOffset:t,draped:a,output:n,depthTestEnabled:s,occlusionPass:r}=e,l=s&&!a&&i!==1&&!r&&n!==9;return li({blending:Vt(n)?Bo(i,!0):null,depthTest:s&&!a?{func:515}:null,depthWrite:l?ui:null,drawBuffers:Ho(i,n),colorWrite:ci,polygonOffset:t?Li:null})}}const Li={factor:0,units:-4},Ut=Ft().vec2u8("uv0",{glNormalized:!0}),It=Ft().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),qi=It.clone().vec4u8("olidColor");function Ht(){return Eo()?qi:It}class R extends Go{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}E([U()],R.prototype,"screenCenterOffsetUnitsEnabled",void 0),E([U()],R.prototype,"occlusionTestEnabled",void 0),E([U()],R.prototype,"signedDistanceFieldEnabled",void 0),E([U()],R.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),E([U()],R.prototype,"hasVVSize",void 0),E([U()],R.prototype,"hasVVColor",void 0),E([U()],R.prototype,"hasVerticalOffset",void 0),E([U()],R.prototype,"hasScreenSizePerspective",void 0),E([U()],R.prototype,"hasRotation",void 0),E([U()],R.prototype,"debugDrawLabelBorder",void 0),E([U()],R.prototype,"hasPolygonOffset",void 0),E([U()],R.prototype,"depthTestEnabled",void 0),E([U()],R.prototype,"pixelSnappingEnabled",void 0),E([U()],R.prototype,"draped",void 0),E([U()],R.prototype,"terrainDepthTest",void 0),E([U()],R.prototype,"cullAboveTerrain",void 0),E([U()],R.prototype,"occlusionPass",void 0),E([U()],R.prototype,"occludedFragmentFade",void 0),E([U()],R.prototype,"horizonCullingEnabled",void 0),E([U()],R.prototype,"isFocused",void 0);class _a extends Lo{constructor(e,i){super(e,Qi),this.produces=new Map([[13,t=>Re(t)&&!this.parameters.drawAsLabel],[14,t=>Re(t)&&this.parameters.drawAsLabel],[12,()=>this.parameters.occlusionTest],[18,t=>this.parameters.draped&&Re(t)]]),this._visible=!0,this._configuration=new R(i)}getConfiguration(e,i){const t=this.parameters.draped;return super.getConfiguration(e,i,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===12,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===12,Vt(e)&&(this._configuration.debugDrawLabelBorder=!!qo.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,a,n,s){const{options:{selectionMode:r,hud:l,excludeLabels:c},point:u,camera:p}=t,{parameters:h}=this;if(!r||!l||c&&h.isLabel||!e.visible||!u||!p)return;const w=e.attributes.get("featureAttribute"),y=w==null?null:tt(w.data,qe),{scaleX:m,scaleY:d}=ke(y,h,p.pixelRatio);Pt(Ae,i),e.attributes.has("featureAttribute")&&Wi(Ae);const v=e.attributes.get("position"),g=e.attributes.get("size"),x=e.attributes.get("normal"),C=e.attributes.get("rotation"),f=e.attributes.get("centerOffsetAndDistance");Tt(v.size>=3);const z=ge(h),O=this.parameters.centerOffsetUnits==="screen";for(let P=0;P<v.data.length/v.size;P++){const B=P*v.size;oe(A,v.data[B],v.data[B+1],v.data[B+2]),re(A,A,i),re(A,A,p.viewMatrix);const b=P*f.size;if(oe(T,f.data[b],f.data[b+1],f.data[b+2]),!O&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const V=T[2];L(T,A),W(A,A,G(T,T,V))}const j=P*x.size;if(oe(ne,x.data[j],x.data[j+1],x.data[j+2]),Ge(ne,Ae,p,be),Ne(this.parameters,A,be,p,ve),p.applyProjection(A,D),D[0]>-1){O&&(T[0]||T[1])&&(D[0]+=T[0]*p.pixelRatio,T[1]!==0&&(D[1]+=ve.alignmentEvaluator.apply(T[1])*p.pixelRatio),p.unapplyProjection(D,A)),D[0]+=this.parameters.screenOffset[0]*p.pixelRatio,D[1]+=this.parameters.screenOffset[1]*p.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]);const V=P*g.size;_[0]=g.data[V],_[1]=g.data[V+1],ve.evaluator.applyVec2(_,_);const Q=Lt*p.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*_[0])*p.pixelRatio/2),_[0]*=m,_[1]*=d;const Z=P*C.size,N=h.rotation+C.data[Z];if(Le(u,D[0],D[1],_,Q,le,N,h,z)){const ae=t.ray;if(re(De,A,zt(Gt,p.viewMatrix)),D[0]=u[0],D[1]=u[1],p.unprojectFromRenderScreen(D,A)){const S=F();k(S,ae.direction);const me=1/we(S);G(S,S,me),s(Ot(ae.origin,A)*me,S,-1,De)}}}}}intersectDraped(e,i,t,a,n){const s=e.attributes.get("position"),r=e.attributes.get("size"),l=e.attributes.get("rotation"),c=this.parameters,u=ge(c),p=e.attributes.get("featureAttribute"),h=p==null?null:tt(p.data,qe),{scaleX:w,scaleY:y}=ke(h,c,e.screenToWorldRatio),m=Yi*e.screenToWorldRatio;for(let d=0;d<s.data.length/s.size;d++){const v=d*s.size,g=s.data[v],x=s.data[v+1],C=d*r.size;_[0]=r.data[C],_[1]=r.data[C+1];let f=0;c.textureIsSignedDistanceField&&(f=Math.min(c.outlineSize,.5*_[0])*e.screenToWorldRatio/2),_[0]*=w,_[1]*=y;const z=d*l.size,O=c.rotation+l.data[z];Le(t,g,x,_,m,f,O,c,u)&&a(n.distance,n.normal,-1)}}createBufferWriter(){return new Zi}applyShaderOffsetsView(e,i,t,a,n,s,r){const l=Ge(i,t,n,be);return this._applyVerticalGroundOffsetView(e,l,n,r),Ne(this.parameters,r,l,n,s),this._applyPolygonOffsetView(r,l,a[3],n,r),this._applyCenterOffsetView(r,a,r),r}applyShaderOffsetsNDC(e,i,t,a,n){return this._applyCenterOffsetNDC(e,i,t,a),n!=null&&k(n,a),this._applyPolygonOffsetNDC(a,i,t,a),a}_applyPolygonOffsetView(e,i,t,a,n){const s=a.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=s);const l=s*r;if(this.parameters.shaderPolygonOffset<=0)return k(n,e);const c=vo(Math.abs(i.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/a.viewport[2];return G(n,e,l>0?u:1/u),n}_applyVerticalGroundOffsetView(e,i,t,a){const n=we(e),s=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(n)*_t,l=G(A,i.normal,s*r);return q(a,e,l),a}_applyCenterOffsetView(e,i,t){const a=this.parameters.centerOffsetUnits!=="screen";return t!==e&&k(t,e),a&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(L(ne,t),go(t,t,G(ne,ne,i[2])))),t}_applyCenterOffsetNDC(e,i,t,a){const n=this.parameters.centerOffsetUnits!=="screen";return a!==e&&k(a,e),n||(a[0]+=i[0]/t.fullWidth*2,a[1]+=i[1]/t.fullHeight*2),a}_applyPolygonOffsetNDC(e,i,t,a){const n=this.parameters.shaderPolygonOffset;if(e!==a&&k(a,e),n){const s=t.aboveGround?1:-1,r=s*Math.sign(i[3]);a[2]-=(r||s)*n}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,a=e[3]>=te||i>=te&&t[3]>=te;return this._visible&&a}createGLMaterial(e){return new ki(e)}calculateRelativeScreenBounds(e,i,t=bt()){return Ni(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class ki extends ei{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Gi,e)}}function Ni(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Ge(o,e,i,t){return Fi(e)&&(e=Pt(Xi,e)),mo(t.normal,o,e),re(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=We(Bt,Ki),t}function Wi(o){const e=o[0],i=o[1],t=o[2],a=o[3],n=o[4],s=o[5],r=o[6],l=o[7],c=o[8],u=1/Math.sqrt(e*e+i*i+t*t),p=1/Math.sqrt(a*a+n*n+s*s),h=1/Math.sqrt(r*r+l*l+c*c);return o[0]=e*u,o[1]=i*u,o[2]=t*u,o[3]=a*p,o[4]=n*p,o[5]=s*p,o[6]=r*h,o[7]=l*h,o[8]=c*h,o}function Le(o,e,i,t,a,n,s,r,l){let c=e-a-t[0]*l[0],u=c+t[0]+2*a,p=i-a-t[1]*l[1],h=p+t[1]+2*a;const w=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&w!=null&&(c+=t[0]*w[0],p+=t[1]*w[1],u-=t[0]*(1-w[2]),h-=t[1]*(1-w[3]),c-=n,u+=n,p-=n,h+=n),Ye(xt,e,i),xo(xe,o,xt,bo(s)),xe[0]>c&&xe[0]<u&&xe[1]>p&&xe[1]<h}const ve=new ko,A=F(),ne=F(),D=Ve(),Bt=F(),De=F(),xe=Xe(),xt=Xe(),Ae=$t(),Xi=$t(),Gt=wt(),Pe=Ve(),T=F(),He=F(),qe=Ve(),be={normal:Bt,cosAngle:0},Lt=1,Yi=2,_=St(0,0),Ki=yt(0,0,1);class Qi extends No{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=ot(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=St(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ot(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ve(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Zi{constructor(){this.layout=Ut,this.instanceLayout=Ht()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,i,t,a,n,s){const{position:r,normal:l,color:c,size:u,rotation:p,centerOffsetAndDistance:h,featureAttribute:w,uvi:y}=n;Yo(t.get("position"),e,r,s),Ko(t.get("normal"),i,l,s);const m=t.get("position").indices.length;let d=0,v=0,g=ye,x=ye;const C=t.get("uvi")?.data;C&&C.length>=4&&(d=C[0],v=C[1],g=C[2],x=C[3]);for(let f=0;f<m;++f){const z=s+f;y.setValues(z,d,v,g,x)}if(Qo(t.get("color"),4,c,s),rt(t.get("size"),u,s),Zo(t.get("rotation"),p,s),t.get("centerOffsetAndDistance")?lt(t.get("centerOffsetAndDistance"),h,s):ct(h,s,m),t.get("featureAttribute")?lt(t.get("featureAttribute"),w,s):ct(w,s,m),a!=null){const f=t.get("position")?.indices;if(f){const z=f.length,O=n.getField("olidColor",ni);Jo(a,O,z,s)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,i){const{uv0:t}=i;rt(e.get("uv0"),t,0)}intersect(e,i,t,a,n,s,r){const{options:{selectionMode:l,hud:c,excludeLabels:u},point:p,camera:h}=a;if(!l||!c||u&&i.isLabel||!p)return;const w=this.instanceLayout.createView(e),{position:y,normal:m,rotation:d,size:v,featureAttribute:g,centerOffsetAndDistance:x}=w,C=i.centerOffsetUnits==="screen",f=ge(i);if(y==null||m==null||d==null||v==null||x==null||h==null)return;const z=g==null?null:g.getVec(0,qe),{scaleX:O,scaleY:P}=ke(z,i,h.pixelRatio),B=y.count;for(let b=0;b<B;b++){if(y.getVec(b,A),t!=null&&q(A,A,t),re(A,A,h.viewMatrix),x.getVec(b,Pe),oe(T,Pe[0],Pe[1],Pe[2]),!C&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const j=T[2];L(T,A),W(A,A,G(T,T,j))}if(m.getVec(b,ne),Ge(ne,Ae,h,be),Ne(i,A,be,h,ve),h.applyProjection(A,D),D[0]>-1){C&&(T[0]||T[1])&&(D[0]+=T[0]*h.pixelRatio,T[1]!==0&&(D[1]+=ve.alignmentEvaluator.apply(T[1])*h.pixelRatio),h.unapplyProjection(D,A)),D[0]+=i.screenOffset[0]*h.pixelRatio,D[1]+=i.screenOffset[1]*h.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]),v.getVec(b,_),ve.evaluator.applyVec2(_,_);const j=Lt*h.pixelRatio;let V=0;i.textureIsSignedDistanceField&&(V=Math.min(i.outlineSize,.5*_[0])*h.pixelRatio/2),_[0]*=O,_[1]*=P;const Q=d.get(b),le=i.rotation+Q;if(Le(p,D[0],D[1],_,j,V,le,i,f)){const Z=a.ray;if(re(De,A,zt(Gt,h.viewMatrix)),D[0]=p[0],D[1]=p[1],h.unprojectFromRenderScreen(D,A)){const N=F();k(N,Z.direction);const ae=1/we(N);G(N,N,ae),r(Ot(Z.origin,A)*ae,N,b,De)}}}}}}function ke(o,e,i){return o==null||e.vvSize==null?{scaleX:i,scaleY:i}:(Wo(He,e,o),{scaleX:He[0]*i,scaleY:He[1]*i})}function Ne(o,e,i,t,a){if(!o.verticalOffset?.screenLength){const l=we(e);return a.update(i.cosAngle,l,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const n=we(e),s=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=Xo(t,n,o.verticalOffset,i.cosAngle,s,o.screenSizePerspectiveMinPixelReferenceSize);return a.update(i.cosAngle,n,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(i.normal,i.normal,r),q(e,e,i.normal)}function Ea(o){return o.type==="point"}const Ji=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ge,fullUV:ye},Symbol.toStringTag,{value:"Module"}));export{xa as A,ba as D,$a as E,Pa as G,ja as M,Sa as Q,ma as U,wa as Z,Da as a,Ra as b,Aa as c,Ri as d,ya as e,Ma as f,vt as g,Ca as h,_a as i,Oa as j,vi as k,Ze as l,Ta as m,Ei as n,Va as o,Di as p,Vi as q,za as r,Ea as t,Mi as u,ga as w,Fa as y};

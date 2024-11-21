import{s as ie,b as fe,n as X,r as he,c as de,o as pe,d as ve}from"../chunks/scheduler.NrZV1iTz.js";import{S as ce,i as me,e as h,s as C,c as d,a as U,l as O,f as E,d as N,q as R,n as v,g as re,h as l,o as k,r as ne,p as q,u as _e,v as ge,t as be,b as Ce,w as Ee}from"../chunks/index.B8CoYGT6.js";import{b as we}from"../chunks/paths.Dzpr9Hxk.js";import{u as le}from"../chunks/user.DE7Jhlrr.js";function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function se(t,o,r){const u=t.slice();return u[13]=o[r],u}function oe(t){let o,r=t[13].namn+"",u;return{c(){o=h("option"),u=be(r),this.h()},l(p){o=d(p,"OPTION",{});var m=U(o);u=Ce(m,r),m.forEach(N),this.h()},h(){o.__value=t[13].value,k(o,o.__value)},m(p,m){re(p,o,m),l(o,u)},p:X,d(p){p&&N(o)}}}function Le(t){let o,r,u,p="Registrering",m,e,i,w,_,L="Användarnamn:",V,g,F,y,D="Email:",P,A,G,x,Y="Lösenord:",H,I,J,S,Z="Favoritfärg",j,b,z,M,K,T,$="Har du redan ett konto? Logga in!",Q,ee,B=ae(t[4]),f=[];for(let n=0;n<B.length;n+=1)f[n]=oe(se(t,B,n));return{c(){o=h("main"),r=h("div"),u=h("h1"),u.textContent=p,m=C(),e=h("form"),i=h("div"),w=C(),_=h("label"),_.textContent=L,V=C(),g=h("input"),F=C(),y=h("label"),y.textContent=D,P=C(),A=h("input"),G=C(),x=h("label"),x.textContent=Y,H=C(),I=h("input"),J=C(),S=h("label"),S.textContent=Z,j=C(),b=h("select");for(let n=0;n<f.length;n+=1)f[n].c();z=C(),M=h("input"),K=C(),T=h("a"),T.textContent=$,this.h()},l(n){o=d(n,"MAIN",{class:!0});var c=U(o);r=d(c,"DIV",{class:!0});var a=U(r);u=d(a,"H1",{"data-svelte-h":!0}),O(u)!=="svelte-1bygy45"&&(u.textContent=p),m=E(a),e=d(a,"FORM",{});var s=U(e);i=d(s,"DIV",{style:!0});var ue=U(i);ue.forEach(N),w=E(s),_=d(s,"LABEL",{for:!0,"data-svelte-h":!0}),O(_)!=="svelte-jlxnah"&&(_.textContent=L),V=E(s),g=d(s,"INPUT",{type:!0,id:!0}),F=E(s),y=d(s,"LABEL",{for:!0,"data-svelte-h":!0}),O(y)!=="svelte-1flf0h4"&&(y.textContent=D),P=E(s),A=d(s,"INPUT",{type:!0,id:!0}),G=E(s),x=d(s,"LABEL",{for:!0,"data-svelte-h":!0}),O(x)!=="svelte-1weckky"&&(x.textContent=Y),H=E(s),I=d(s,"INPUT",{type:!0,id:!0}),J=E(s),S=d(s,"LABEL",{for:!0,"data-svelte-h":!0}),O(S)!=="svelte-1x86b6"&&(S.textContent=Z),j=E(s),b=d(s,"SELECT",{id:!0});var te=U(b);for(let W=0;W<f.length;W+=1)f[W].l(te);te.forEach(N),z=E(s),M=d(s,"INPUT",{type:!0}),s.forEach(N),K=E(a),T=d(a,"A",{href:!0,"data-svelte-h":!0}),O(T)!=="svelte-153ds50"&&(T.textContent=$),a.forEach(N),c.forEach(N),this.h()},h(){R(i,"width","100px"),R(i,"height","100px"),R(i,"border-radius","50%"),R(i,"overflow","hidden"),R(i,"background-color",t[0]),v(_,"for","name"),v(g,"type","text"),v(g,"id","name"),v(y,"for","email"),v(A,"type","email"),v(A,"id","email"),v(x,"for","password"),v(I,"type","password"),v(I,"id","password"),v(S,"for","favoritfärg"),v(b,"id","favoritfärg"),t[0]===void 0&&fe(()=>t[9].call(b)),v(M,"type","submit"),M.value="Registrera",v(T,"href",we+"/login"),v(r,"class","container svelte-etvc1u"),v(o,"class","svelte-etvc1u")},m(n,c){re(n,o,c),l(o,r),l(r,u),l(r,m),l(r,e),l(e,i),l(e,w),l(e,_),l(e,V),l(e,g),k(g,t[1]),l(e,F),l(e,y),l(e,P),l(e,A),k(A,t[2]),l(e,G),l(e,x),l(e,H),l(e,I),k(I,t[3]),l(e,J),l(e,S),l(e,j),l(e,b);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(b,null);ne(b,t[0],!0),l(e,z),l(e,M),l(r,K),l(r,T),Q||(ee=[q(g,"input",t[6]),q(A,"input",t[7]),q(I,"input",t[8]),q(b,"change",t[9]),q(e,"submit",_e(t[5]))],Q=!0)},p(n,[c]){if(c&1&&R(i,"background-color",n[0]),c&2&&g.value!==n[1]&&k(g,n[1]),c&4&&A.value!==n[2]&&k(A,n[2]),c&8&&I.value!==n[3]&&k(I,n[3]),c&16){B=ae(n[4]);let a;for(a=0;a<B.length;a+=1){const s=se(n,B,a);f[a]?f[a].p(s,c):(f[a]=oe(s),f[a].c(),f[a].m(b,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=B.length}c&17&&ne(b,n[0])},i:X,o:X,d(n){n&&N(o),ge(f,n),Q=!1,he(ee)}}}function ye(t,o,r){let u;de(t,le,P=>r(12,u=P));let p="",m=[{namn:"Blå",value:"blue"},{namn:"Gul",value:"yellow"},{namn:"Röd",value:"red"},{namn:"Svart",value:"black"},{namn:"Vit",value:"white"},{namn:"Grön",value:"green"}],e="",i="",w="",_={username:e,password:w,email:i,color:p},L=[];pe(()=>{u.length>2&&(L=JSON.parse(u))});function V(){_={username:e,password:w,email:i,color:p},L.filter(P=>P.username==_.username).length>0?alert("Användaren har redan ett konto! Prova att logga in istället"):(L=[...L,_],ve(le,u=JSON.stringify(L),u),alert("Välommen "+e+"!  Email: "+i+"  Password: "+w+"  Favorite color: "+p)),console.log(L)}function g(){e=this.value,r(1,e)}function F(){i=this.value,r(2,i)}function y(){w=this.value,r(3,w)}function D(){p=Ee(this),r(0,p),r(4,m)}return[p,e,i,w,m,V,g,F,y,D]}class xe extends ce{constructor(o){super(),me(this,o,ye,Le,ie,{})}}export{xe as component};
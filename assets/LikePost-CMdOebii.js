import{j as s,r as t,i as x,k as m,u as p,l as k,a as _,e as v}from"./index-BbNGXMUc.js";const w="_error_1pr66_1",u="_title_1pr66_19",g="_code_1pr66_27",r={error:w,title:u,code:g};function C({error:e}){return s.jsxs("div",{className:r.error,children:[s.jsx("div",{className:r.title,children:"Error"}),s.jsxs("div",{className:r.code,children:["code:",e.status]})]})}const E="_action_wsst2_9",h={delete:"_delete_wsst2_1",action:E},L=e=>t.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 443 443",style:{enableBackground:"new 0 0 443 443"},xmlSpace:"preserve",...e},t.createElement("g",null,t.createElement("rect",{x:61.785,y:128,width:60,height:290}),t.createElement("path",{d:"M211.785,250.65V128h-60v290h44.172c-14.861-21.067-23.602-46.746-23.602-74.43 C172.356,307.145,187.486,274.193,211.785,250.65z"}),t.createElement("path",{d:"M301.785,214.141l0-86.141h-60v100.918C259.731,219.488,280.144,214.141,301.785,214.141z"}),t.createElement("path",{d:"M321.785,38h-83.384V0H125.169v38H41.785v60h280V38z M155.169,30h53.232v8h-53.232V30z"}),t.createElement("path",{d:"M301.785,244.141c-54.826,0-99.429,44.604-99.429,99.429S246.959,443,301.785,443s99.43-44.604,99.43-99.43 S356.611,244.141,301.785,244.141z M355.961,376.533l-21.213,21.213l-32.963-32.963l-32.963,32.963l-21.213-21.213l32.963-32.963 l-32.963-32.963l21.213-21.213l32.963,32.963l32.963-32.963l21.213,21.213l-32.963,32.963L355.961,376.533z"})));function D({id:e}){const[c]=x(),i=m(),{addHidden:d}=p(),l=o=>{o.preventDefault(),c(e),d(e),i(k.products)};return s.jsx("div",{className:h.action,onClick:l,children:s.jsx(L,{width:32,height:32,className:h.delete})})}const j="_action_1194m_1",y="_liked_1194m_15",f="_liking_1194m_21",a={action:j,liked:y,liking:f},M=e=>t.createElement("svg",{id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",...e},t.createElement("path",{d:"M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"}));function N({id:e}){const{setLike:c,removeLike:i}=p(),l=!!_(n=>n.product.likes).find(n=>n==e),o=n=>{n.preventDefault(),l?i(e):c(e)};return s.jsx("div",{onClick:o,children:s.jsx(M,{width:32,height:32,className:v(l?a.liked:a.liking,a.action)})})}export{D,C as E,N as L};

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){},50:function(e,t,a){e.exports=a(72)},58:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(42),c=a.n(r),o=(a(58),a(12)),i=a(43),m=a.n(i),p=(a(40),{width:"100px",height:"100px",borderRadius:"30%",backgroundColor:"clear",margin:"3px",padding:"2px"}),u={display:"flex"},s={gap:"10px",margin:"8px",padding:"5px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)",alignItems:"center",borderRadius:"2%"},d=function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:u},l.a.createElement("div",null,l.a.createElement("img",{style:p,src:e.employeeDetail.image})),l.a.createElement("div",null,l.a.createElement("h3",null,e.employeeDetail.name),l.a.createElement("p",null,e.employeeDetail.occupation)," ")),l.a.createElement("div",{style:s},l.a.createElement("h3",null,"Call Office"),l.a.createElement("p",null,e.employeeDetail.callOffice),l.a.createElement("h3",null,"Call Mobile"),l.a.createElement("p",null,e.employeeDetail.callMobile),l.a.createElement("h3",null,"SMS"),l.a.createElement("p",null,e.employeeDetail.sms),l.a.createElement("h3",null,"Email"),l.a.createElement("p",null,e.employeeDetail.email)))};a(35);var E=function(){return l.a.createElement("div",null,l.a.createElement("h3",null," Employee Directory"))},y=function(e){return l.a.createElement("div",{className:"right"},l.a.createElement(E,null),l.a.createElement(d,{employeeDetail:e.employeeDetail}))};var x=function(){return l.a.createElement("div",null," ",l.a.createElement("input",{type:"search",placeholder:"Employee Search"}))},f={width:"60px",height:"60px",borderRadius:"50%",backgroundColor:"aqua",margin:"3px",padding:"2px"},g={display:"flex",gap:"10px",margin:"8px",padding:"5px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)",alignItems:"center",cursor:"pointer",borderRadius:"2%"},h=function(e){var t=e.index,a=e.image,n=e.name,r=e.occupation,c=e.setEmployeeDetail,o=e.employees;return l.a.createElement("div",{key:t,style:g,onClick:function(){return c(o[t])}},l.a.createElement("img",{style:f,src:a}),l.a.createElement("h3",{style:{margin:"0"}},n),l.a.createElement("p",{style:{margin:"0"}},r))},v=function(e){return e.employees.map(function(t,a){var n=t.image,r=t.name,c=t.occupation,o=t._id;return console.log(o),l.a.createElement(h,{index:a,image:n,name:r,title:c,setEmployeeDetail:e.setEmployeeDetail,employees:e.employees})})};var b=function(e){return l.a.createElement("div",{className:"left"},l.a.createElement(E,null),l.a.createElement(x,null),l.a.createElement(v,{setEmployeeDetail:e.setEmployeeDetail,employees:e.employees}))},D=a(109),k=a(113),w=a(111),C=a(115),S=a(117),O=a(44),j=a.n(O),R=a(116),M=a(114),F=a(112),I=["Home","Add EMployee","Employee List"];function L(e){e.window;var t=n.useState(!1),a=Object(o.a)(t,2),l=(a[0],a[1]),r=function(){l(function(e){return!e})};k.a,M.a,C.a;return n.createElement(k.a,{sx:{display:"flex"}},n.createElement(w.a,null),n.createElement(D.a,{component:"nav"},n.createElement(R.a,null,n.createElement(S.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:r,sx:{mr:2,display:{sm:"none"}}},n.createElement(j.a,null)),n.createElement(M.a,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}},"Employee App"),n.createElement(k.a,{sx:{display:{xs:"none",sm:"block"}}},I.map(function(e){return n.createElement(F.a,{key:e,sx:{color:"#fff"}},e)})))),n.createElement(k.a,{component:"nav"}),n.createElement(k.a,{component:"main",sx:{p:3}}))}var q={maxWidth:"1000px",margin:"0 auto",backgroundColor:"rgb(21, 14, 171)",display:"flex",gap:"10px",padding:"20px",borderRadius:"5px"},A=function(e){return n.createElement("div",{style:q},e.children)};var B=function(){m.a.init("vglvoq/mukera");var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(o.a)(c,2),p=i[0],u=i[1];return Object(n.useEffect)(function(){fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees").then(function(e){return e.json()}).then(function(e){e&&r(e),u(e[0])})},[]),l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(A,null,l.a.createElement(b,{setEmployeeDetail:u,employees:a}),l.a.createElement(y,{employeeDetail:p,employees:a})))},J=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,107)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null))),J()}},[[50,3,2]]]);
//# sourceMappingURL=main.8de4b1b9.chunk.js.map
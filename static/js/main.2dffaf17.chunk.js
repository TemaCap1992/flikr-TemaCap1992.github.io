(this["webpackJsonpfinder-image"]=this["webpackJsonpfinder-image"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(6),r=c.n(n),o=(c(14),c(5)),i=c.n(o),l=c(7),j=c(2),u=(c(16),c(8)),h=c.n(u),b=c(1);function m(e){var t=e.onChangeText,c=e.value,s=e.placeholder,n=Object(a.useCallback)((function(e){t(e.target.value)}),[t]);return Object(b.jsx)("input",{className:h.a.input,onChange:n,value:c,placeholder:s})}var d=c(9),O=c.n(d),p=null;var f=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(j.a)(n,2),o=r[0],u=r[1],h=Object(a.useState)(""),d=Object(j.a)(h,2),f=d[0],g=d[1],v=Object(a.useState)([]),x=Object(j.a)(v,2),N=x[0],S=x[1],k=Object(a.useState)([]),C=Object(j.a)(k,2),I=C[0],P=C[1],y=Object(a.useState)(!1),T=Object(j.a)(y,2),J=T[0],_=T[1],F=Object(a.useState)(!1),L=Object(j.a)(F,2),w=L[0],A=L[1],E=Object(a.useState)(1),D=Object(j.a)(E,2),B=D[0],q=D[1];Object(a.useEffect)((function(){A(!1),f&&(clearTimeout(p),p=setTimeout((function(){G()}),500))}),[f,B]);var G=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=45f050841e1b141624cc20c57101a53a&tags=".concat(f,"&per_page=3&page=").concat(B,"&format=json&nojsoncallback=1"));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,a=c.photos.photo.map((function(e){return{photoName:"".concat(e.title),srcPath:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}})),S(a),_(!1),A(!0),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),_(!1),A(!0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(o){var e=localStorage.getItem("savedItem"),t=JSON.parse(e);P(t)}}),[o]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h1",{children:"Image Finder"})}),Object(b.jsx)("div",{className:"login",children:"LOG"})]}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("button",{className:"button",onClick:function(){return s(!c)||u(!o)},children:" Search "}),Object(b.jsx)("button",{className:"button",onClick:function(){u(!o)||s(!c)},children:" Storage "})]}),Object(b.jsxs)("div",{className:"content",children:[c&&Object(b.jsxs)("div",{className:"searchContent",children:[Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(m,{value:f,onChangeText:g,placeholder:"Enter your query to search for images"})}),J?Object(b.jsx)(O.a,{}):Object(b.jsxs)("div",{className:"fotoSearch",children:[N.map((function(e){return Object(b.jsxs)("div",{className:"imgList",children:[Object(b.jsx)("img",{alt:"",src:e.srcPath,className:"imgItem"}),Object(b.jsx)("h2",{className:"titleImg",children:e.photoName}),Object(b.jsx)("button",{className:"buttonTools",onClick:function(){var t=localStorage.getItem("savedItem"),c=[];t&&(c=JSON.parse(t)),c.find((function(t){return t.srcPath===e.srcPath}))||(c.push({srcPath:e.srcPath,photoName:e.photoName}),localStorage.setItem("savedItem",JSON.stringify(c)))},children:"Save image"})]},e.srcPath)})),f&&w&&!N.length&&Object(b.jsx)("h1",{children:"No items matching your search criteria..."}),N.length?Object(b.jsxs)("div",{className:"tools",children:[Object(b.jsx)("button",{className:"buttonTools",onClick:function(){return q(B<=1?B=1:B-1)},children:" Prev page "}),Object(b.jsxs)("div",{className:"pageNumber",children:[" This page number  -  ",B,"  "]}),Object(b.jsx)("button",{className:"buttonTools",onClick:function(){return q(B+1)},children:" Next page "})]}):""]})]}),o&&Object(b.jsx)("div",{className:"storageContent",children:Object(b.jsx)("div",{className:"fotoStorage",children:I.map((function(e){return Object(b.jsxs)("div",{className:"imgList",children:[Object(b.jsx)("img",{alt:"",src:e.srcPath,className:"imgItem"}),Object(b.jsx)("h2",{className:"titleImg",children:e.photoName}),Object(b.jsx)("button",{className:"buttonTools",onClick:function(){var t=I.filter((function(t){return t.srcPath!==e.srcPath}));localStorage.setItem("savedItem",JSON.stringify(t)),P(t)},children:" Delete image"})]},e.srcPath)}))})})]})]}),Object(b.jsx)("footer",{className:"App-footer",children:Object(b.jsxs)("div",{className:"copy",children:[" ","\xa9"," by Artem Davydov"]})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()},8:function(e,t,c){e.exports={input:"styles_input__drOK6"}}},[[26,1,2]]]);
//# sourceMappingURL=main.2dffaf17.chunk.js.map
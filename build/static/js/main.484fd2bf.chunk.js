(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),u=t.n(c),r=t(3),a=t(1),o=t(0),i=function(e){var n=e.nameValue,t=e.nameHandler,c=e.numberValue,u=e.numberHandler,r=e.submit;return Object(o.jsxs)("form",{onSubmit:r,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:n,onChange:t})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{value:c,onChange:u})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var n=e.text,t=e.handleChange;return Object(o.jsxs)("form",{children:["Filter shown contacts ",Object(o.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.person,t=e.handleClick;return Object(o.jsxs)("div",{children:[n.name," ",n.number,Object(o.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},d=function(e){var n=e.personsList,t=e.handleClick;return Object(o.jsx)("div",{children:n.map((function(e){return Object(o.jsx)(l,{person:e,handleClick:t},e.id)}))})},j=t(4),b=t.n(j),f="http://localhost:3001/api/persons",h=function(){return b.a.get(f).then((function(e){return e.data}))},m=function(e){return b.a.post(f,e).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(f,"/").concat(e))},p=function(e){var n=e.message,t=e.style;return null===n?null:Object(o.jsx)("div",{className:t,children:n})},x=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),j=l[0],b=l[1],f=Object(a.useState)(""),x=Object(r.a)(f,2),g=x[0],C=x[1],w=Object(a.useState)(""),k=Object(r.a)(w,2),y=k[0],S=k[1],A=Object(a.useState)(null),H=Object(r.a)(A,2),L=H[0],T=H[1],V=Object(a.useState)("success"),E=Object(r.a)(V,2),J=E[0],N=E[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var P=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(s,{text:y,handleChange:function(e){S(e.target.value)}}),Object(o.jsx)(p,{message:L,style:J}),Object(o.jsx)("h2",{children:"Add a new contact"}),Object(o.jsx)(i,{nameValue:j,nameHandler:function(e){b(e.target.value)},numberValue:g,numberHandler:function(e){C(e.target.value)},submit:function(e){e.preventDefault();var n={name:j,number:g};if(t.some((function(e){return e.name===j})))return window.confirm("".concat(j," is already included in the phonebook. Would you like to update their number?"))?void function(e,n){var t=h();e in t||(T("Person ".concat(n.name," has already been removed!")),N("error"),setTimeout((function(){T(null)}),2e3)),O(e,n).then((function(u){c(t.map((function(n){return n.id!==e?n:u}))),N("success"),T("Updated ".concat(n)),setTimeout((function(){T(null)}),2e3)}))}(t.find((function(e){return e.name===j})).id,n):void 0;m(n).then((function(e){c(t.concat(e)),b(""),C(""),console.log("Added ".concat(j)),N("success"),T("Added ".concat(j)),setTimeout((function(){T(null)}),2e3)}))}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(d,{personsList:P,handleClick:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&(v(e),c(t.filter((function(n){return n.id!==e}))),N("success"),T("Removed ".concat(n.name)),setTimeout((function(){T(null)}),2e3))}})]})};t(38);u.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.484fd2bf.chunk.js.map
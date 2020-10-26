(this.webpackJsonptula=this.webpackJsonptula||[]).push([[0],{87:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),r=a(12),s=a.n(r),o=a(8),l=a(131),j=a(140),d=a(14),u=a(3),b=a(5),h=a(143),O=a(128),x=a(129),p=a(130),m=a(89),g=a(65),f=a.n(g),v=a(88),y=Object(b.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,i=e.onClose,c=Object(u.a)(e,["children","classes","onClose"]);return Object(n.jsxs)(O.a,Object(d.a)(Object(d.a)({disableTypography:!0,className:a.root},c),{},{children:[Object(n.jsx)(v.a,{variant:"h6",children:t}),i?Object(n.jsx)(m.a,{"aria-label":"close",className:a.closeButton,onClick:i,children:Object(n.jsx)(f.a,{})}):null]}))})),C=Object(b.a)((function(e){return{root:{padding:e.spacing(2),minWidth:320}}}))(x.a),S=Object(b.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(p.a);function N(e){var t=e.children,a=e.open,i=e.title,c=e.actions,r=e.handleClose;return Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(n.jsxs)(h.a,{"aria-labelledby":"customized-dialog-title",open:a,onClose:null!==r&&void 0!==r?r:function(){return null},children:[i&&Object(n.jsx)(y,{id:"customized-dialog-title",onClose:r,children:i}),Object(n.jsx)(C,{children:t}),Object(n.jsx)(S,{children:c})]})})}function I(e){var t=e.loggedIn,a=void 0!==t&&t,i=e.handleSubmit,r=c.a.useState(""),s=Object(o.a)(r,2),d=s[0],u=s[1],b=Object(n.jsx)(l.a,{type:"submit",onClick:function(e){e.preventDefault(),i({type:"LOGIN",userId:d})},color:"primary",children:"Login"});return Object(n.jsx)(N,{title:"Login",actions:b,open:!a,children:Object(n.jsx)(j.a,{id:"userId",label:"User Id",value:d,fullWidth:!0,autoFocus:!0,onChange:function(e){u(e.target.value)}})})}var w=a(132),k=a(142),A=a(135),T=a(134),E=a(49),D=a.n(E),z=a(136),R=a(133),B=a(47),L=a.n(B),P=a(13),W=a(17),F=(a(51),a(50),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return Math.random().toString(36).slice(-e)}),G=(a(24),function e(t,a,n){Object(W.a)(this,e),this.id=F(),this.name=t,this.description=a,this.opening_balance=n,this.balance=n}),H=Object(w.a)((function(e){return{grid:{textAlign:"right"}}}));function M(e){var t=e.handleAdd,a=H(),i=c.a.useState(""),r=Object(o.a)(i,2),s=r[0],d=r[1],u=c.a.useState(0),b=Object(o.a)(u,2),h=b[0],O=b[1],x=c.a.useState(""),p=Object(o.a)(x,2),m=p[0],g=p[1],f=c.a.useState(!1),v=Object(o.a)(f,2),y=v[0],C=v[1],S=function(){C(!y)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{open:y,actions:Object(n.jsx)(l.a,{onClick:function(e){e.preventDefault(),t(new G(s,m,h)),S()},color:"primary",children:"Submit"}),title:"New Entity",handleClose:S,children:Object(n.jsxs)(R.a,{container:!0,spacing:1,children:[Object(n.jsx)(R.a,{item:!0,sm:6,children:Object(n.jsx)(j.a,{id:"name",label:"Name",value:s,onChange:function(e){return d(e.target.value)},fullWidth:!0})}),Object(n.jsx)(R.a,{item:!0,sm:6,children:Object(n.jsx)(j.a,{id:"balance",label:"Opening Balance",value:h,onChange:function(e){return O(Number(e.target.value))},type:"number",fullWidth:!0})}),Object(n.jsx)(R.a,{item:!0,sm:12,children:Object(n.jsx)(j.a,{id:"description",label:"Description",value:m,onChange:function(e){return g(e.target.value)},type:"text",multiline:!0,rows:2,fullWidth:!0})})]})}),Object(n.jsx)(R.a,{container:!0,spacing:1,children:Object(n.jsx)(R.a,{item:!0,sm:12,className:a.grid,children:Object(n.jsx)(l.a,{variant:"contained",onClick:S,color:"primary",startIcon:Object(n.jsx)(L.a,{}),children:"Entity"})})})]})}var U=function e(t,a,n,i){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();Object(W.a)(this,e),this.id=F(),this.time=+new Date(c),this.entityId=t,this.credit=a,this.debit=n,this.remarks=null!==i&&void 0!==i?i:""},J=a(90),V=Object(w.a)((function(e){return{paper:{margin:"".concat(e.spacing(1),"px 0"),padding:"".concat(e.spacing(1),"px")},grid:{textAlign:"right"},button:{margin:"".concat(e.spacing(1),"px 0")}}}));function _(e){var t=e.handleAdd,a=V(),i=c.a.useState(Date.now()),r=Object(o.a)(i,2),s=r[0],d=r[1],u=c.a.useState(0),b=Object(o.a)(u,2),h=b[0],O=b[1],x=c.a.useState(0),p=Object(o.a)(x,2),m=p[0],g=p[1],f=c.a.useState(""),v=Object(o.a)(f,2),y=v[0],C=v[1],S=c.a.useState(!1),N=Object(o.a)(S,2),I=N[0],w=N[1],k=function(){w(!I)};return Object(n.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[I&&Object(n.jsx)(J.a,{className:a.paper,children:Object(n.jsxs)(R.a,{container:!0,spacing:1,children:[Object(n.jsx)(R.a,{item:!0,sm:4,xs:12,children:Object(n.jsx)(j.a,{id:"debit",label:"Time",value:s,onChange:function(e){return d(e.target.value)},type:"datetime-local",fullWidth:!0,size:"small"})}),Object(n.jsx)(R.a,{item:!0,sm:4,xs:12,children:Object(n.jsx)(j.a,{id:"credit",label:"Credit (+)",value:h,onChange:function(e){return O(Number(e.target.value))},type:"number",fullWidth:!0,size:"small"})}),Object(n.jsx)(R.a,{item:!0,sm:4,xs:12,children:Object(n.jsx)(j.a,{id:"debit",label:"Debit (-)",value:m,onChange:function(e){return g(Number(e.target.value))},type:"number",fullWidth:!0,size:"small"})}),Object(n.jsx)(R.a,{item:!0,xs:12,children:Object(n.jsx)(j.a,{id:"remarks",label:"Remarks",value:y,onChange:function(e){return C(e.target.value)},type:"text",multiline:!0,rows:2,fullWidth:!0,size:"small"})}),Object(n.jsx)(R.a,{item:!0,xs:12,className:a.grid,children:Object(n.jsx)(l.a,{variant:"contained",onClick:function(e){e.preventDefault(),t((function(e){return new U(e,h,m,y,s)})),k()},color:"primary",size:"small",children:"Submit"})})]})}),!I&&Object(n.jsx)(l.a,{onClick:k,color:"primary",startIcon:Object(n.jsx)(L.a,{}),size:"small",className:a.button,children:"Transaction"})]})}var q=a(10),K=a(66),Q=a.n(K),X=Object(w.a)((function(e){return{root:{fontSize:e.typography.pxToRem(15)},debit:{color:e.palette.error.main},credit:{color:e.palette.success.main}}}));function Y(e){var t,a=e.amount,i=X();return Object(n.jsxs)(v.a,{className:Q()(i.root,(t={},Object(q.a)(t,i.debit,a<0),Object(q.a)(t,i.credit,a>0),t)),component:"span",children:["\u20b9 ",Math.abs(a)]})}var Z="CREATE",$="UPDATE",ee="DELETE",te=Object(w.a)((function(e){return{root:{width:"100%"},heading:{flexBasis:"33.33%",flexShrink:0,textAlign:"right"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function ae(e){var t=e.id,a=e.time,i=e.credit,r=e.debit,s=e.remarks,l=te(),j=c.a.useState(!1),d=Object(o.a)(j,2),u=d[0],b=d[1];return Object(n.jsxs)(k.a,{expanded:u,onChange:function(e,t){b(t)},TransitionProps:{unmountOnExit:!0},children:[Object(n.jsxs)(T.a,{expandIcon:Object(n.jsx)(D.a,{}),"aria-controls":"content",id:t,children:[Object(n.jsx)(v.a,{children:new Date(a).toLocaleString()}),Object(n.jsx)("div",{className:l.heading,children:Object(n.jsx)(Y,{amount:i})}),Object(n.jsx)("div",{className:l.heading,children:Object(n.jsx)(Y,{amount:-r})})]}),Object(n.jsx)(A.a,{children:Object(n.jsx)(v.a,{className:l.secondaryHeading,children:s})})]})}function ne(e){var t=e.entityId,a=e.data,i=e.dispatch;te();return Object(n.jsxs)(R.a,{container:!0,children:[Object(n.jsx)(R.a,{item:!0,sm:12,children:a.map((function(e){return Object(n.jsx)(ae,Object(d.a)({},e),e.id)}))}),Object(n.jsx)(R.a,{item:!0,sm:12,children:Object(n.jsx)(_,{handleAdd:function(e){var a=e(t);i({type:Z,payload:a})}})})]})}var ie=Object(w.a)((function(e){return{root:{width:"100%",margin:"".concat(e.spacing(1),"px 0")},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),flexBasis:"66.66%",flexShrink:0,textAlign:"right",marginRight:e.spacing(2)},paper:{padding:e.spacing(1)},divider:{margin:"".concat(e.spacing(1),"px 0")},rightAlign:{textAlign:"right"}}}));function ce(e){var t=e.id,a=e.name,i=e.description,r=e.balance,s=e.opening_balance,l=e.transactions,j=e.transactionProps,u=ie(),b=c.a.useState(!1),h=Object(o.a)(b,2),O=h[0],x=h[1];return Object(n.jsxs)(k.a,{expanded:O,onChange:function(e,t){x(t)},TransitionProps:{unmountOnExit:!0},children:[Object(n.jsxs)(T.a,{expandIcon:Object(n.jsx)(D.a,{}),"aria-controls":"content",id:t,children:[Object(n.jsx)(v.a,{className:u.heading,children:a}),Object(n.jsx)("div",{className:u.secondaryHeading,children:Object(n.jsx)(Y,{amount:r})})]}),Object(n.jsx)(z.a,{}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(R.a,{container:!0,spacing:2,children:[Object(n.jsxs)(R.a,{item:!0,sm:3,children:[Object(n.jsx)(v.a,{variant:"caption",children:"Opening balance"}),Object(n.jsx)(v.a,{variant:"body2",children:Object(n.jsx)(Y,{amount:s})}),Object(n.jsx)(z.a,{className:u.divider}),Object(n.jsx)(v.a,{variant:"caption",children:"Description"}),Object(n.jsx)(v.a,{variant:"body2",children:i})]}),Object(n.jsx)(R.a,{item:!0,xs:12,sm:9,children:Object(n.jsx)(ne,Object(d.a)({entityId:t,data:l},j))})]})})]})}function re(e){var t=e.data,a=e.dispatch,i=e.transactionProps,c=ie();return Object(n.jsxs)(R.a,{container:!0,className:c.root,spacing:2,children:[Object(n.jsx)(R.a,{item:!0,sm:9,className:c.rightAlign,children:Object(n.jsxs)(v.a,{component:"div",variant:"subtitle1",children:["Total: ",Object(n.jsx)(Y,{amount:t.balance})]})}),Object(n.jsx)(R.a,{item:!0,sm:3,children:Object(n.jsx)(M,{handleAdd:function(e){a({type:Z,payload:e})}})}),Object(n.jsx)(R.a,{item:!0,sm:12,children:t.entities.map((function(e){return Object(n.jsx)(ce,Object(d.a)(Object(d.a)({},e),{},{transactionProps:i}),e.id)}))})]})}var se=a(137),oe=a(138),le=a(67),je=a.n(le),de=a(139),ue=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function be(e){var t=e.userId,a=e.children,i=ue();return Object(n.jsxs)("div",{className:i.root,children:[Object(n.jsx)(se.a,{position:"static",children:Object(n.jsxs)(oe.a,{children:[Object(n.jsx)(v.a,{variant:"h6",className:i.title,children:"Tula"}),Object(n.jsx)("div",{children:t?Object(n.jsx)(v.a,{variant:"h6",className:i.title,children:t}):Object(n.jsx)(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(n.jsx)(je.a,{})})})]})}),Object(n.jsx)(de.a,{children:t&&a})]})}function he(e,t){var a=t.type,n=t.userId;switch(a){case"LOGIN":return{userId:n};case"LOGOUT":return{};default:throw new Error}}function Oe(e,t){var a=e;switch(t.type){case Z:a=[].concat(Object(P.a)(e),[t.payload]);break;case $:var n=e.findIndex((function(e){return e.id===t.id}));if(n>0){var i=Object(d.a)(Object(d.a)({},e[n]),t.payload);a=[].concat(Object(P.a)(e.slice(0,n)),[i],Object(P.a)(e.slice(n+1)))}break;case ee:a=e.filter((function(e){return t.queryFn(e)}));break;default:throw new Error}return a}var xe=function(){var e=c.a.useReducer(he,{}),t=Object(o.a)(e,2),a=t[0].userId,r=t[1],s=c.a.useReducer(Oe,[]),l=Object(o.a)(s,2),j=l[0],u=l[1],b=c.a.useReducer(Oe,[]),h=Object(o.a)(b,2),O=h[0],x=h[1],p=c.a.useState({}),m=Object(o.a)(p,2),g=m[0],f=m[1];return Object(i.useEffect)((function(){f(function(e,t){var a={balance:0,entities:[]};return console.log(e,t),Array.isArray(e)&&Array.isArray(t)&&(a.entities=e.map((function(e){return a.balance+=e.balance,Object(d.a)(Object(d.a)({},e),{},{transactions:t.filter((function(t){return t.entityId===e.id}))})}))),a}(j,O))}),[a,j,O]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(I,{loggedIn:!!a,handleSubmit:r}),Object(n.jsx)(be,{userId:a,children:Object(n.jsx)(re,{data:g,dispatch:u,transactionProps:{dispatch:x}})})]})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,145)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(xe,{})}),document.getElementById("root")),pe()}},[[87,1,2]]]);
//# sourceMappingURL=main.1df83d04.chunk.js.map
import{r as m,c as _,a as d,u,j as s,o as x,F as g,d as h,e as j,E as p,t as F,N as b}from"./index-8KmicMRg.js";const N="_background_1m6xc_1",k="_image_1m6xc_25",E="_container_1m6xc_37",w="_container_signin_1m6xc_63",q="_title_1m6xc_75",v="_container_links_1m6xc_85",f="_link_1m6xc_95",a={background:N,image:k,container:E,container_signin:w,title:q,container_links:v,link:f},P="_formContainer_q5chj_1",M="_label_q5chj_17",$="_inputField_q5chj_27",B="_inputError_q5chj_51",C="_wrap_q5chj_85",S="_errorMessage_q5chj_93",y="_submitButton_q5chj_105",e={formContainer:P,label:M,inputField:$,inputError:B,wrap:C,errorMessage:S,submitButton:y},I=()=>{const r=m.useId(),t=_().shape({email:d().email("Please enter a valid email address").required("Email is Required")}),o=u(),c=(n,i)=>{const l={email:n.email};o(F(l)).unwrap(),i.resetForm()};return s.jsxs(s.Fragment,{children:[s.jsx(x,{}),s.jsx(g,{initialValues:{email:""},validationSchema:t,onSubmit:c,children:({errors:n,touched:i})=>s.jsxs(h,{className:e.formContainer,name:"ForgotPassword",noValidate:!0,children:[s.jsx("label",{htmlFor:r,className:e.label,children:"Enter your email"}),s.jsxs("div",{className:e.wrap,children:[s.jsx(j,{type:"email",name:"email",id:r,className:n.email&&i.email?`${e.inputField} ${e.inputError}`:e.inputField,placeholder:"Email"}),s.jsx(p,{name:"email",component:"span",className:e.errorMessage})]}),s.jsx("button",{type:"submit",className:e.submitButton,children:"Send"})]})})]})},V=()=>s.jsx("div",{className:a.container,children:s.jsxs("div",{className:a.background,children:[s.jsx("div",{className:a.image}),s.jsxs("div",{className:a.container_signin,children:[s.jsx("h2",{className:a.title,children:"Forgot Password"}),s.jsx(I,{}),s.jsx("div",{className:a.container_links,children:s.jsx(b,{className:a.link,to:"/signin",children:"Sign in"})})]})]})});export{V as default};
//# sourceMappingURL=ForgotPasswordPage-D7bgYnB5.js.map
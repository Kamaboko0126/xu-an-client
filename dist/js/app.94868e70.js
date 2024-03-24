(function(){"use strict";var e={8871:function(e,a,t){var s=t(9242),n=t(3396);function l(e,a,t,s,l,o){const r=(0,n.up)("HeaderItem"),i=(0,n.up)("router-view"),u=(0,n.up)("FooterItem");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n.Wm)(i),(0,n.Wm)(u)],64)}var o=t(7139);const r=e=>((0,n.dD)("data-v-3a535ffc"),e=e(),(0,n.Cn)(),e),i={class:"container"},u=r((()=>(0,n._)("div",{class:"logo"},"LOGO",-1))),v={class:"nav-items"},c=r((()=>(0,n._)("i",{class:"material-icons person"},"person",-1))),d={class:"person-text"};function m(e,a,t,s,l,r){const m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("div",i,[(0,n.Wm)(m,{to:"/"},{default:(0,n.w5)((()=>[u])),_:1}),(0,n._)("div",v,[s.showLoginIcon?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"nav-item",onClick:a[0]||(a[0]=(...e)=>s.checkDestination&&s.checkDestination(...e))},[c,(0,n._)("span",d,(0,o.zw)(s.username),1)])):(0,n.kq)("",!0)])])])}t(560);var p=t(2483),g=t(4870),w={setup(){const e=(0,g.iH)(!0),a=(0,p.yj)(),t=(0,g.iH)("登入"),s=(0,p.tv)();(0,n.YP)((()=>a.path),(async a=>{o(),e.value="/"==a&&"/verify"!==a}));const l=()=>{"true"==sessionStorage.getItem("islogin")&&"登入"!=t.value?s.push("/userinfo"):"true"!==sessionStorage.getItem("islogin")&&"登入"===t.value?s.push("/login"):s.push("/error")};(0,n.bv)((()=>{o(),console.log(sessionStorage.getItem("islogin"))}));const o=()=>{console.log(sessionStorage.getItem("islogin")),"true"==sessionStorage.getItem("islogin")?t.value=sessionStorage.getItem("userfirstname")+sessionStorage.getItem("userlastname"):t.value="登入"};return{showLoginIcon:e,username:t,checkUser:o,checkDestination:l}}},f=t(89);const h=(0,f.Z)(w,[["render",m],["__scopeId","data-v-3a535ffc"]]);var y=h;const _={class:"container"};function b(e,a,t,s,l,o){const r=(0,n.up)("HealthCheck"),i=(0,n.up)("VerifyCheck");return(0,n.wg)(),(0,n.iD)("footer",null,[(0,n._)("div",_,[(0,n._)("div",null,[(0,n.Wm)(r),(0,n.Wm)(i)])])])}function k(e,a,t,s,l,r){return(0,n.wg)(),(0,n.iD)("div",null,"連線狀態："+(0,o.zw)(s.isConnected?"連線成功":"連線失敗"),1)}var P=t(1076),S={setup(){const e=(0,g.iH)(!1),a=async()=>{try{const a=await P.Z.get("http://127.0.0.1:10000/health");e.value=!!a.data}catch(a){console.log("Error connect status:",a),e.value=!1}};return(0,n.bv)((()=>{a()})),{isConnected:e,connectCheck:a}}};const I=(0,f.Z)(S,[["render",k]]);var H=I;function N(e,a,t,s,l,r){return(0,n.wg)(),(0,n.iD)("div",null,"token驗證狀態："+(0,o.zw)(s.isVerified),1)}var C={setup(){const e=(0,g.iH)("驗證中"),a=(0,p.yj)(),t=async()=>{if(console.log("verifiedCheck",sessionStorage.getItem("islogin")),"true"==sessionStorage.getItem("islogin"))try{const a=await P.Z.get("http://127.0.0.1:10000/verify-token",{params:{token:sessionStorage.getItem("token"),userid:sessionStorage.getItem("userid")}});"Token success verified"===a.data.status?e.value="驗證成功":e.value="驗證失敗"}catch(a){console.error(a.response.data),e.value="api error"}else e.value="尚未登入"};return(0,n.YP)((()=>a.path),(()=>{t()})),(0,n.bv)((()=>{t()})),{isVerified:e,verifiedCheck:t}}};const T=(0,f.Z)(C,[["render",N]]);var E=T,x={components:{HealthCheck:H,VerifyCheck:E}};const D=(0,f.Z)(x,[["render",b],["__scopeId","data-v-6fb17667"]]);var F=D,O={components:{HeaderItem:y,FooterItem:F}};const Z=(0,f.Z)(O,[["render",l]]);var L=Z;const V=e=>((0,n.dD)("data-v-7845c757"),e=e(),(0,n.Cn)(),e),$={class:"container"},U={class:"row"},j=V((()=>(0,n._)("div",{class:"title"},"Sign in",-1))),z=V((()=>(0,n._)("div",{class:"add-account"},"Need an account?",-1))),q={key:0,class:"warn-text"},W={class:"button-container"},M=["disabled"];function A(e,a,t,l,r,i){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",$,[(0,n._)("div",U,[(0,n._)("form",{onSubmit:a[4]||(a[4]=(0,s.iM)(((...e)=>l.signIn&&l.signIn(...e)),["prevent"]))},[j,(0,n.Wm)(u,{to:"/signup"},{default:(0,n.w5)((()=>[z])),_:1}),l.wrongFormat?((0,n.wg)(),(0,n.iD)("div",q,(0,o.zw)(l.wrongText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"text",class:(0,o.C_)(["email",{"mt-25":!l.wrongFormat}]),onBlur:a[0]||(a[0]=(...e)=>l.emailCheck&&l.emailCheck(...e)),"onUpdate:modelValue":a[1]||(a[1]=e=>l.inputEmail=e),placeholder:"Email"},null,34),[[s.nr,l.inputEmail]]),(0,n.wy)((0,n._)("input",{type:"password",class:"password",onBlur:a[2]||(a[2]=(...e)=>l.passwordCheck&&l.passwordCheck(...e)),"onUpdate:modelValue":a[3]||(a[3]=e=>l.inputPassword=e),placeholder:"Password"},null,544),[[s.nr,l.inputPassword]]),(0,n._)("div",W,[(0,n._)("button",{type:"submit",disabled:l.isProcessing},"Sign in",8,M)])],32)])])}var J=t(4219),Y=t(5420),B={setup(){const e=(0,g.iH)(localStorage.getItem("inputEmail")||""),a=(0,g.iH)(""),t=(0,g.iH)(!1),s=(0,g.iH)(""),l=(0,g.iH)(!0),o=(0,g.iH)(!0),r=(0,p.tv)(),i=(0,g.iH)(!1),u=(0,J.Xw)();(0,n.bv)((()=>{e.value=localStorage.getItem("inputEmail")||""}));const v=()=>{u.value.$validate(),l.value?(""!=e.value?(l.value=!1,u.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect",console.log(u.value.inputEmail.$errors)):(t.value=!1,o.value||(a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):t.value=!1))):console.log("first email check && is null"),console.log("first email check")):""==e.value?(t.value=!0,s.value="⦁ The email can't be empty"):u.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect",console.log(u.value.inputEmail.$errors)):(t.value=!1,o.value||(a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):t.value=!1))},c=function(){o.value?(""!==a.value?(o.value=!1,a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):l.value||(u.value.$validate(),u.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect"):t.value=!1)):console.log("first password check && is null"),console.log("first password check")):""==a.value?(t.value=!0,s.value="⦁ The password can't be empty"):a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):l.value||(u.value.$validate(),u.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect"):t.value=!1)},d=async function(){if(i.value=!0,""==e.value||""==a.value)t.value=!0,s.value="⦁ The email or password can't be empty",i.value=!1;else if(t.value=!1,!t.value){let l={email:e.value,password:a.value},o=JSON.stringify(l);console.log("login");try{const a=await P.Z.post("http://127.0.0.1:10000/login",o,{headers:{"Content-Type":"application/json"}});console.log(a.data.status),"success"==a.data.status?(localStorage.setItem("inputEmail",e.value),sessionStorage.setItem("islogin",!0),sessionStorage.setItem("token",a.data.token),sessionStorage.setItem("userid",a.data.userid),sessionStorage.setItem("userfirstname",a.data.firstname),sessionStorage.setItem("userlastname",a.data.lastname),sessionStorage.setItem("useremail",a.data.useremail),sessionStorage.setItem("username",""),r.push("/")):"invalid email"==a.data.status?(t.value=!0,s.value="⦁ Invalid email",i.value=!1):"verify yet"==a.data.status?(t.value=!0,s.value="⦁ Email verify yet",i.value=!1):"wrong password"==a.data.status&&(t.value=!0,s.value="⦁ Wrong password",i.value=!1)}catch(n){"too many times"==n.response.data.status?(t.value=!0,s.value="⦁ Too many times, please try again later",i.value=!1):console.log(n.response.data)}}};return{inputEmail:e,inputPassword:a,emailCheck:v,wrongFormat:t,wrongText:s,signIn:d,passwordCheck:c,isProcessing:i,v$:u}},validations(){return{inputEmail:{email:Y.Do}}}};const R=(0,f.Z)(B,[["render",A],["__scopeId","data-v-7845c757"]]);var X=R;const G=e=>((0,n.dD)("data-v-86f64604"),e=e(),(0,n.Cn)(),e),K={class:"banner"},Q=G((()=>(0,n._)("div",null,[(0,n._)("div",null,"Hello World"),(0,n._)("div",null,"A place to put your book.")],-1))),ee=[Q];function ae(e,a,t,s,l,o){return(0,n.wg)(),(0,n.iD)("div",K,ee)}var te={components:{},setup(){}};const se=(0,f.Z)(te,[["render",ae],["__scopeId","data-v-86f64604"]]);var ne=se;const le=e=>((0,n.dD)("data-v-0fb8347a"),e=e(),(0,n.Cn)(),e),oe={class:"container"},re={class:"row"},ie=le((()=>(0,n._)("div",{class:"title"},"Sign up",-1))),ue=le((()=>(0,n._)("div",{class:"add-account"},"Already have one?",-1))),ve={key:0,class:"warn-text"},ce={key:1,class:"warn-text"},de={class:"name-container"},me={key:2,class:"warn-text"},pe={key:3,class:"warn-text"},ge={key:4,class:"warn-text"},we={class:"button-container"},fe=["disabled"];function he(e,a,t,l,r,i){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",oe,[(0,n._)("div",re,[(0,n._)("form",{onSubmit:a[5]||(a[5]=(0,s.iM)(((...e)=>l.send&&l.send(...e)),["prevent"]))},[ie,(0,n.Wm)(u,{to:"/login"},{default:(0,n.w5)((()=>[ue])),_:1}),l.signUpFail?((0,n.wg)(),(0,n.iD)("div",ve,(0,o.zw)(l.wranText),1)):(0,n.kq)("",!0),l.wrongNameFormat?((0,n.wg)(),(0,n.iD)("div",ce,(0,o.zw)(l.wranNameText),1)):(0,n.kq)("",!0),(0,n._)("div",de,[(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[0]||(a[0]=e=>l.inputFirstName=e),placeholder:"First Name"},null,512),[[s.nr,l.inputFirstName]]),(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[1]||(a[1]=e=>l.inputLastName=e),placeholder:"Last Name"},null,512),[[s.nr,l.inputLastName]])]),l.wrongEmailFormat?((0,n.wg)(),(0,n.iD)("div",me,(0,o.zw)(l.wranEmailText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"text",class:"email","onUpdate:modelValue":a[2]||(a[2]=e=>l.inputEmail=e),placeholder:"Email"},null,512),[[s.nr,l.inputEmail]]),l.wrongPasswordFormat?((0,n.wg)(),(0,n.iD)("div",pe,(0,o.zw)(l.wranPasswrodText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[3]||(a[3]=e=>l.inputPassword=e),placeholder:"Password: at least 6 characters"},null,512),[[s.nr,l.inputPassword]]),l.wrongConfirmPassword?((0,n.wg)(),(0,n.iD)("div",ge," ⦁ Password and Confirm Password not same ")):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",class:"confirmpassword","onUpdate:modelValue":a[4]||(a[4]=e=>l.inputConfirmPassword=e),placeholder:"Confirm Password"},null,512),[[s.nr,l.inputConfirmPassword]]),(0,n._)("div",we,[(0,n._)("button",{type:"submit",disabled:l.isProcessing},"Send",8,fe)])],32)])])}var ye={setup(){const e=(0,g.iH)(sessionStorage.getItem("inputFirstName")||""),a=(0,g.iH)(sessionStorage.getItem("inputLastName")||""),t=(0,g.iH)(sessionStorage.getItem("inputEmail")||""),s=(0,g.iH)(""),l=(0,g.iH)(""),o=(0,g.iH)(!1),r=(0,g.iH)(!1),i=(0,g.iH)(""),u=(0,g.iH)(!1),v=(0,g.iH)(""),c=(0,g.iH)(!1),d=(0,g.iH)(""),m=(0,g.iH)(!1),p=/[^\u4e00-\u9fa5]/,w=/[^a-zA-Z0-9]/,f=(0,g.iH)(!1),h=(0,g.iH)(""),y=(0,J.Xw)();(0,n.YP)(e,(e=>{sessionStorage.setItem("inputFirstName",e)})),(0,n.YP)(a,(e=>{sessionStorage.setItem("inputLastName",e)})),(0,n.YP)(t,(e=>{sessionStorage.setItem("inputEmail",e)})),(0,n.bv)((()=>{e.value=sessionStorage.getItem("inputFirstName")||"",a.value=sessionStorage.getItem("inputLastName")||"",t.value=sessionStorage.getItem("inputEmail")||""}));const _=async function(){if(!o.value&&(e.value=e.value.replace(/\s/g,""),a.value=a.value.replace(/\s/g,""),o.value=!0,""===e.value||""===a.value?(o.value=!1,r.value=!0,i.value="⦁ First Name and Last Name cannot be empty!"):p.test(e.value)||p.test(a.value)?(o.value=!1,r.value=!0,i.value="⦁ First Name and Last Name can only contain Chinese characters!"):r.value=!1,y.value.$validate(),t.value=t.value.replace(/\s/g,""),""===t.value?(u.value=!0,v.value="⦁ Email cannot be empty!",o.value=!1):y.value.inputEmail.$error?(u.value=!0,v.value="⦁ Email format is wrong!",o.value=!1):u.value=!1,s.value=s.value.replace(/\s/g,""),""===s.value||s.value.length<6?(o.value=!1,c.value=!0,d.value="⦁ Password must be at least 6 characters long!"):w.test(s.value)||w.test(s.value)?(o.value=!1,c.value=!0,d.value="⦁ Password can only contain letters and numbers!"):c.value=!1,s.value!=l.value?(o.value=!1,m.value=!0):m.value=!1,console.log(e.value,a.value,t.value,s.value),!r.value&&!u.value&&!c.value&&!m.value)){console.log("send data");let l={firstName:e.value,lastName:a.value,email:t.value,password:s.value},r=JSON.stringify(l);try{const e=await P.Z.post("http://127.0.0.1:10000/adduser",r,{headers:{"Content-Type":"application/json"}});"Success"===e.data.status?(alert("註冊成功"),sessionStorage.setItem("inputFirstName",""),sessionStorage.setItem("inputLastName",""),sessionStorage.setItem("inputEmail",""),Oa.push("/verify")):"already registered"===e.data.status&&(f.value=!0,h.value="⦁ Email already registered!",o.value=!1)}catch(n){console.error(n.response.data),o.value=!1,f.value=!0,h.value="⦁ Something wrong!"}}};return{inputFirstName:e,inputLastName:a,inputEmail:t,inputPassword:s,inputConfirmPassword:l,isProcessing:o,signUpFail:f,wranText:h,wrongNameFormat:r,wranNameText:i,wrongEmailFormat:u,wranEmailText:v,wrongPasswordFormat:c,wranPasswrodText:d,wrongConfirmPassword:m,send:_,v$:y}},validations(){return{inputEmail:{email:Y.Do}}}};const _e=(0,f.Z)(ye,[["render",he],["__scopeId","data-v-0fb8347a"]]);var be=_e;const ke=e=>((0,n.dD)("data-v-73730096"),e=e(),(0,n.Cn)(),e),Pe={class:"container"},Se={class:"row"},Ie=ke((()=>(0,n._)("div",{class:"title"},"verify",-1))),He={class:"verify-text"};function Ne(e,a,t,s,l,r){return(0,n.wg)(),(0,n.iD)("div",Pe,[(0,n._)("div",Se,[(0,n._)("div",null,[Ie,(0,n._)("div",He,(0,o.zw)(s.verifyStatus),1)])])])}var Ce={setup(){const e=(0,p.yj)(),a=(0,g.iH)(""),t=(0,g.iH)(e.query.email),s=(0,g.iH)(e.query.key);async function l(){if(null==t.value&&null==s.value)a.value="請前往信箱進行驗證，謝謝";else{let n={email:t.value,key:s.value},l=JSON.stringify(n);console.log(l);try{const e=await P.Z.post("http://127.0.0.1:10000/verify",l,{headers:{"Content-Type":"application/json"}});console.log(e.data.status),"success"==e.data.status?a.value="驗證成功，請重新登入，謝謝":"verified"==e.data.status&&(a.value="已驗證過，請重新登入，謝謝")}catch(e){a.value="驗證失敗，請重新驗證，如有任何問題請聯絡客服，謝謝",console.error(e.response.data)}}}return(0,n.bv)((()=>{l()})),{verifyStatus:a,email:t,key:s}}};const Te=(0,f.Z)(Ce,[["render",Ne],["__scopeId","data-v-73730096"]]);var Ee=Te;const xe=e=>((0,n.dD)("data-v-a54ae07c"),e=e(),(0,n.Cn)(),e),De={class:"container"},Fe={class:"row"},Oe=xe((()=>(0,n._)("div",{class:"title"},"使用者資訊",-1))),Ze={class:"edit-container"},Le=xe((()=>(0,n._)("div",{class:"edit"},"編輯",-1))),Ve={class:"name-container"},$e={class:"edit-container"},Ue={class:"button-container"};function je(e,a,t,l,o,r){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",De,[(0,n._)("div",Fe,[(0,n._)("div",null,[Oe,(0,n._)("div",Ze,[(0,n.Wm)(i,{to:"/edit"},{default:(0,n.w5)((()=>[Le])),_:1})]),(0,n._)("div",Ve,[(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[0]||(a[0]=e=>l.inputFirstName=e),placeholder:"First Name",readonly:""},null,512),[[s.nr,l.inputFirstName]]),(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[1]||(a[1]=e=>l.inputLastName=e),placeholder:"Last Name",readonly:""},null,512),[[s.nr,l.inputLastName]])]),(0,n.wy)((0,n._)("input",{type:"text",class:"email","onUpdate:modelValue":a[2]||(a[2]=e=>l.inputEmail=e),placeholder:"Email",readonly:""},null,512),[[s.nr,l.inputEmail]]),(0,n._)("div",$e,[(0,n.Wm)(i,{to:"/change"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"edit",onClick:a[3]||(a[3]=(...a)=>e.edit&&e.edit(...a))},"更改密碼")])),_:1})]),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[4]||(a[4]=e=>l.inputPassword=e),placeholder:"Password: at least 6 characters",readonly:""},null,512),[[s.nr,l.inputPassword]]),(0,n._)("div",Ue,[(0,n._)("button",{onClick:a[5]||(a[5]=(...e)=>l.logout&&l.logout(...e))},"Logout")])])])])}var ze={setup(){const e=(0,p.tv)(),a=(0,g.iH)(sessionStorage.getItem("userfirstname")),t=(0,g.iH)(sessionStorage.getItem("userlastname")),s=(0,g.iH)(sessionStorage.getItem("useremail")),l=(0,g.iH)("*********"),o=()=>{sessionStorage.removeItem("islogin"),sessionStorage.removeItem("username"),sessionStorage.removeItem("inputEmail"),sessionStorage.removeItem("token"),sessionStorage.setItem("islogin",!1),e.push("/")};return(0,n.bv)((()=>{"false"==sessionStorage.getItem("islogin")&&e.push("/")})),{logout:o,inputFirstName:a,inputLastName:t,inputEmail:s,inputPassword:l}}};const qe=(0,f.Z)(ze,[["render",je],["__scopeId","data-v-a54ae07c"]]);var We=qe;const Me={class:"container"},Ae=(0,n._)("div",{class:"row"},[(0,n._)("h1",null,"ERROR!!!!!!!!!!!!!!!!!!!!")],-1),Je=[Ae];function Ye(e,a){return(0,n.wg)(),(0,n.iD)("div",Me,Je)}const Be={},Re=(0,f.Z)(Be,[["render",Ye]]);var Xe=Re;const Ge=e=>((0,n.dD)("data-v-6a55acfe"),e=e(),(0,n.Cn)(),e),Ke={class:"container"},Qe={class:"row"},ea=Ge((()=>(0,n._)("div",{class:"title"},"編輯姓名",-1))),aa={key:0,class:"warn-text"},ta={class:"name-container"},sa={class:"button-container"},na=["disabled"];function la(e,a,t,l,r,i){return(0,n.wg)(),(0,n.iD)("div",Ke,[(0,n._)("div",Qe,[(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,s.iM)(((...e)=>l.edit&&l.edit(...e)),["prevent"]))},[ea,l.wrongFormat?((0,n.wg)(),(0,n.iD)("div",aa,(0,o.zw)(l.wrongText),1)):(0,n.kq)("",!0),(0,n._)("div",ta,[(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[0]||(a[0]=e=>l.inputFirstName=e),placeholder:"First Name"},null,512),[[s.nr,l.inputFirstName]]),(0,n.wy)((0,n._)("input",{type:"text",class:"name","onUpdate:modelValue":a[1]||(a[1]=e=>l.inputLastName=e),placeholder:"Last Name"},null,512),[[s.nr,l.inputLastName]])]),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[2]||(a[2]=e=>l.inputPassword=e),placeholder:"Password"},null,512),[[s.nr,l.inputPassword]]),(0,n._)("div",sa,[(0,n._)("button",{type:"submit",disabled:l.isProcessing},"Edit",8,na)])],32)])])}var oa={setup(){const e=(0,g.iH)(sessionStorage.getItem("userfirstname")),a=(0,g.iH)(sessionStorage.getItem("userlastname")),t=(0,g.iH)(""),s=(0,g.iH)(!1),n=(0,g.iH)(!1),l=(0,g.iH)(""),o=(0,g.iH)(sessionStorage.getItem("userid")),r=(0,p.tv)(),i=/[^\u4e00-\u9fa5]/,u=/[^a-zA-Z0-9]/,v=async()=>{if(s.value)return;if(console.log("edit"),s.value=!0,e.value=e.value.replace(/\s/g,""),""===e.value||""===a.value)return n.value=!0,l.value="⦁ 請輸入姓名",void(s.value=!1);if(i.test(e.value)||i.test(a.value))return n.value=!0,l.value="⦁ 姓名只能包含中文",void(s.value=!1);if(n.value=!1,t.value=t.value.replace(/\s/g,""),""===t.value)return n.value=!0,l.value="⦁ 請輸入密碼",void(s.value=!1);if(u.test(t.value))return n.value=!0,l.value="⦁ 密碼只能包含英文和數字",void(s.value=!1);n.value=!1;let v={user_id:o.value,password:t.value,firstName:e.value,lastName:a.value},c=JSON.stringify(v);try{const e=await P.Z.post("http://127.0.0.1:10000/edit",c,{headers:{"Content-Type":"application/json"}});"success"==e.data.status?(sessionStorage.setItem("userfirstname",e.data.firstname),sessionStorage.setItem("userlastname",e.data.lastname),alert("更新成功"),r.push("/userinfo")):"wrong password"==e.data.status?(n.value=!0,s.value=!1,l.value="⦁ 密碼錯誤"):(n.value=!0,s.value=!1,l.value="⦁ 更新失敗")}catch(d){"too many times"==d.response.data.status?(n.value=!0,l.value="⦁ Too many times, please try again later",s.value=!1):console.log(d.response.data)}};return{isProcessing:s,inputFirstName:e,inputLastName:a,inputPassword:t,wrongFormat:n,wrongText:l,edit:v}}};const ra=(0,f.Z)(oa,[["render",la],["__scopeId","data-v-6a55acfe"]]);var ia=ra;const ua=e=>((0,n.dD)("data-v-171af4da"),e=e(),(0,n.Cn)(),e),va={class:"container"},ca={class:"row"},da=ua((()=>(0,n._)("div",{class:"title"},"更改密碼",-1))),ma={key:0,class:"warn-text"},pa={key:1,class:"warn-text"},ga={key:2,class:"warn-text"},wa={class:"button-container"},fa=["disabled"];function ha(e,a,t,l,r,i){return(0,n.wg)(),(0,n.iD)("div",va,[(0,n._)("div",ca,[(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,s.iM)(((...e)=>l.edit&&l.edit(...e)),["prevent"]))},[da,l.wrongOldPasswordFormat?((0,n.wg)(),(0,n.iD)("div",ma,(0,o.zw)(l.wranOldPasswordText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[0]||(a[0]=e=>l.inputOldPassword=e),placeholder:"Old Password"},null,512),[[s.nr,l.inputOldPassword]]),l.wrongNewPasswordFormat?((0,n.wg)(),(0,n.iD)("div",pa,(0,o.zw)(l.wranNewPasswordText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[1]||(a[1]=e=>l.inputNewPassword=e),placeholder:"New Password"},null,512),[[s.nr,l.inputNewPassword]]),l.wrongConfirmPassword?((0,n.wg)(),(0,n.iD)("div",ga," ⦁ Password and Confirm Password not same ")):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"password",class:"password","onUpdate:modelValue":a[2]||(a[2]=e=>l.inputConfirmPassword=e),placeholder:"Confirm Password"},null,512),[[s.nr,l.inputConfirmPassword]]),(0,n._)("div",wa,[(0,n._)("button",{type:"submit",disabled:l.isProcessing},"Edit",8,fa)])],32)])])}var ya={setup(){const e=(0,g.iH)(""),a=(0,g.iH)(""),t=(0,g.iH)(""),s=(0,g.iH)(!1),n=(0,g.iH)(!1),l=(0,g.iH)(""),o=(0,g.iH)(!1),r=(0,g.iH)(""),i=(0,g.iH)(!1),u=(0,p.tv)(),v=/[^a-zA-Z0-9]/,c=async()=>{if(!s.value&&(s.value=!0,e.value=e.value.replace(/\s/g,""),a.value=a.value.replace(/\s/g,""),t.value=t.value.replace(/\s/g,""),""===e.value?(n.value=!0,l.value="⦁ 密碼不能為空",s.value=!1):v.test(e.value)?(n.value=!0,l.value="⦁ 密碼只能包含英文和數字",s.value=!1):n.value=!1,""===a.value?(o.value=!0,r.value="⦁ 密碼不能為空",s.value=!1):v.test(a.value)?(o.value=!0,r.value="⦁ 密碼只能包含英文和數字",s.value=!1):e.value===a.value?(o.value=!0,r.value="⦁ 新密碼不能和舊密碼相同",s.value=!1):o.value=!1,t.value===a.value?i.value=!1:(i.value=!0,s.value=!1),!n.value&&!o.value&&!i.value)){let t={user_id:sessionStorage.getItem("userid"),oldPassword:e.value,newPassword:a.value},o=JSON.stringify(t);try{const e=await P.Z.post("http://127.0.0.1:10000/change",o,{headers:{"Content-Type":"application/json"}});console.log(e.data.status),"success"==e.data.status?(alert("更改成功"),u.push("/userinfo")):"wrong password"==e.data.status?(n.value=!0,l.value="⦁ 密碼錯誤",s.value=!1):(n.value=!0,l.value="⦁ 更新失敗",s.value=!1)}catch(c){"too many times"==c.response.data.status?(n.value=!0,l.value="⦁ Too many times, please try again later",s.value=!1):console.log(c.response.data)}}};return{isProcessing:s,inputOldPassword:e,inputNewPassword:a,inputConfirmPassword:t,wrongOldPasswordFormat:n,wranOldPasswordText:l,wrongNewPasswordFormat:o,wranNewPasswordText:r,wrongConfirmPassword:i,edit:c}}};const _a=(0,f.Z)(ya,[["render",ha],["__scopeId","data-v-171af4da"]]);var ba=_a;const ka=e=>((0,n.dD)("data-v-2e72b75e"),e=e(),(0,n.Cn)(),e),Pa={class:"container"},Sa={class:"row"},Ia=ka((()=>(0,n._)("div",{class:"title"},"Admin Login",-1))),Ha={key:0,class:"warn-text"},Na={class:"button-container"},Ca=["disabled"];function Ta(e,a,t,l,r,i){return(0,n.wg)(),(0,n.iD)("div",Pa,[(0,n._)("div",Sa,[(0,n._)("form",{onSubmit:a[4]||(a[4]=(0,s.iM)(((...e)=>l.signIn&&l.signIn(...e)),["prevent"]))},[Ia,l.wrongFormat?((0,n.wg)(),(0,n.iD)("div",Ha,(0,o.zw)(l.wrongText),1)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("input",{type:"text",class:(0,o.C_)(["email",{"mt-25":!l.wrongFormat}]),onBlur:a[0]||(a[0]=(...e)=>l.emailCheck&&l.emailCheck(...e)),"onUpdate:modelValue":a[1]||(a[1]=e=>l.inputEmail=e),placeholder:"Email"},null,34),[[s.nr,l.inputEmail]]),(0,n.wy)((0,n._)("input",{type:"password",class:"password",onBlur:a[2]||(a[2]=(...e)=>l.passwordCheck&&l.passwordCheck(...e)),"onUpdate:modelValue":a[3]||(a[3]=e=>l.inputPassword=e),placeholder:"Password"},null,544),[[s.nr,l.inputPassword]]),(0,n._)("div",Na,[(0,n._)("button",{type:"submit",disabled:l.isProcessing},"Sign in",8,Ca)])],32)])])}var Ea={setup(){const e=(0,g.iH)(),a=(0,g.iH)(""),t=(0,g.iH)(!1),s=(0,g.iH)(""),n=(0,g.iH)(!0),l=(0,g.iH)(!0),o=(0,p.tv)(),r=(0,g.iH)(!1),i=(0,J.Xw)(),u=()=>{i.value.$validate(),n.value?(""!=e.value?(n.value=!1,i.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect",console.log(i.value.inputEmail.$errors)):(t.value=!1,l.value||(a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):t.value=!1))):console.log("first email check && is null"),console.log("first email check")):""==e.value?(t.value=!0,s.value="⦁ The email can't be empty"):i.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect",console.log(i.value.inputEmail.$errors)):(t.value=!1,l.value||(a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):t.value=!1))},v=function(){l.value?(""!==a.value?(l.value=!1,a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):n.value||(i.value.$validate(),i.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect"):t.value=!1)):console.log("first password check && is null"),console.log("first password check")):""==a.value?(t.value=!0,s.value="⦁ The password can't be empty"):a.value.length<6?(t.value=!0,s.value="⦁ The password must be at least 6 characters"):n.value||(i.value.$validate(),i.value.inputEmail.$error?(t.value=!0,s.value="⦁ The email format is incorrect"):t.value=!1)},c=async function(){if(r.value=!0,""==e.value||""==a.value)t.value=!0,s.value="⦁ The email or password can't be empty",r.value=!1;else if(t.value=!1,!t.value){let l={email:e.value,password:a.value},i=JSON.stringify(l);console.log("login");try{const e=await P.Z.post("http://127.0.0.1:10000/adminlogin",i,{headers:{"Content-Type":"application/json"}});console.log(e.data.status),"success"==e.data.status?(sessionStorage.setItem("islogin",!0),sessionStorage.setItem("token",e.data.token),sessionStorage.setItem("userid",e.data.userid),sessionStorage.setItem("userfirstname",e.data.firstname),sessionStorage.setItem("userlastname",e.data.lastname),sessionStorage.setItem("useremail",e.data.useremail),sessionStorage.setItem("username",""),o.push("/")):"invalid email"==e.data.status?(t.value=!0,s.value="⦁ Invalid email",r.value=!1):"verify yet"==e.data.status?(t.value=!0,s.value="⦁ Email verify yet",r.value=!1):"wrong password"==e.data.status&&(t.value=!0,s.value="⦁ Wrong password",r.value=!1)}catch(n){"too many times"==n.response.data.status?(t.value=!0,s.value="⦁ Too many times, please try again later",r.value=!1):console.log(n.response.data)}}};return{inputEmail:e,inputPassword:a,emailCheck:u,wrongFormat:t,wrongText:s,signIn:c,passwordCheck:v,isProcessing:r,v$:i}},validations(){return{inputEmail:{email:Y.Do}}}};const xa=(0,f.Z)(Ea,[["render",Ta],["__scopeId","data-v-2e72b75e"]]);var Da=xa;const Fa=(0,p.p7)({history:(0,p.PO)(),routes:[{path:"/",name:"home",component:ne},{path:"/login",name:"login",component:X},{path:"/signup",name:"signup",component:be},{path:"/verify",name:"verify",component:Ee},{path:"/userinfo",name:"userinfo",component:We},{path:"/error",name:"error",component:Xe},{path:"/edit",name:"edit",component:ia},{path:"/change",name:"change",component:ba},{path:"/admin",name:"admin",component:Da}]});var Oa=Fa;(0,s.ri)(L).use(Oa).mount("#app")}},a={};function t(s){var n=a[s];if(void 0!==n)return n.exports;var l=a[s]={exports:{}};return e[s].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,s,n,l){if(!s){var o=1/0;for(v=0;v<e.length;v++){s=e[v][0],n=e[v][1],l=e[v][2];for(var r=!0,i=0;i<s.length;i++)(!1&l||o>=l)&&Object.keys(t.O).every((function(e){return t.O[e](s[i])}))?s.splice(i--,1):(r=!1,l<o&&(o=l));if(r){e.splice(v--,1);var u=n();void 0!==u&&(a=u)}}return a}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[s,n,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var n,l,o=s[0],r=s[1],i=s[2],u=0;if(o.some((function(a){return 0!==e[a]}))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(i)var v=i(t)}for(a&&a(s);u<o.length;u++)l=o[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(v)},s=self["webpackChunkxu_an"]=self["webpackChunkxu_an"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(8871)}));s=t.O(s)})();
//# sourceMappingURL=app.94868e70.js.map
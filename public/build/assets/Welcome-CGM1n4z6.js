import{p,s as w,E as $,o as u,g as c,G as M,b as t,t as r,u as s,F as v,m as h,e as k,j as m,k as _,n as C,C as D,l as S,f as B,c as V,w as E,y as A,a as y}from"./app-Cu5KCDVq.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as F}from"./AuthenticatedLayout-D3qXGhr2.js";const I={class:"space-y-6"},O={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},U={class:"bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"},N={class:"text-2xl font-bold text-gray-700 mt-2"},L={class:"bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"},q={class:"text-2xl font-bold text-gray-700 mt-2"},j={class:"bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"},z={class:"text-2xl font-bold text-gray-700 mt-2"},P={__name:"FinancialOverview",setup(i){let b=p("");return w(()=>{$.get("/fetch-business-financials").then(l=>{b.value=l.data,console.log(l.data)})}),(l,e)=>(u(),c("div",I,[e[6]||(e[6]=M('<div class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg" data-v-8ee578fb><h1 class="text-xl font-bold text-gray-800" data-v-8ee578fb>Financial Overview</h1><select class="p-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" data-v-8ee578fb><option value="thisMonth" data-v-8ee578fb>Today</option><option value="thisMonth" data-v-8ee578fb>This week</option><option value="thisMonth" selected data-v-8ee578fb>This month</option><option value="thisMonth" data-v-8ee578fb>Last 3 months</option><option value="thisMonth" data-v-8ee578fb>Last 6 months</option><option value="thisMonth" data-v-8ee578fb>1 year</option><option value="thisMonth" data-v-8ee578fb>5 years</option><option value="thisMonth" data-v-8ee578fb>All time</option></select></div>',1)),t("div",O,[t("div",U,[e[0]||(e[0]=t("h3",{class:"text-lg font-semibold text-gray-900"},"Expenses",-1)),t("p",N,r(s(b).total_expense),1),e[1]||(e[1]=t("p",{class:"text-green-500 font-medium mt-1"},"vs last month",-1))]),t("div",L,[e[2]||(e[2]=t("h3",{class:"text-lg font-semibold text-gray-900"},"Income",-1)),t("p",q,r(s(b).total_income),1),e[3]||(e[3]=t("p",{class:"text-green-500 font-medium mt-1"},"vs last month",-1))]),t("div",j,[e[4]||(e[4]=t("h3",{class:"text-lg font-semibold text-gray-900"},"Net Profit",-1)),t("p",z,r(s(b).total_net_profit),1),e[5]||(e[5]=t("p",{class:"text-green-500 font-medium mt-1"},"vs last month",-1))])])]))}},G=T(P,[["__scopeId","data-v-8ee578fb"]]),R={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"},W={class:"text-xl font-semibold text-gray-900"},H={class:"text-gray-500 mt-2"},J={class:"text-green-600 font-medium"},K={class:"text-gray-500"},Q={class:"text-red-500 font-medium"},X={class:"font-bold text-blue-700 text-lg mt-2"},Y={__name:"DailyBusinessCard",setup(i){let b=p("");return w(()=>{$.get("/daily-business-transactions").then(l=>{b.value=l.data})}),(l,e)=>(u(),c("div",null,[e[3]||(e[3]=t("div",{class:"flex w-full p-4 justify-between items-center bg-blue-50 rounded-lg shadow-sm"},[t("h1",{class:"text-xl font-bold text-blue-700"},"Daily Business Totals"),t("input",{type:"date",class:"p-2 border rounded-md focus:ring-2 focus:ring-blue-500"})],-1)),t("div",R,[(u(!0),c(v,null,h(s(b),d=>(u(),c("div",{key:d.id,class:"bg-white shadow-md rounded-2xl p-6 w-full border border-gray-200 hover:shadow-lg transition"},[t("h3",W,r(d.name),1),t("p",H,[e[0]||(e[0]=k("Income: ")),t("span",J,r(d.total_daily_income),1)]),t("p",K,[e[1]||(e[1]=k("Expenses: ")),t("span",Q,r(d.total_daily_expense),1)]),e[2]||(e[2]=t("hr",{class:"my-2 border-gray-300"},null,-1)),t("p",X,"Net Profit: "+r(d.total_net_profit),1)]))),128))])]))}},Z=T(Y,[["__scopeId","data-v-18dfe87b"]]),tt={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},et={class:"text-2xl font-bold text-gray-900"},st={class:"text-green-500 text-lg font-semibold"},ot={class:"text-red-500 text-lg font-semibold"},nt={class:"text-gray-500 mt-4"},lt={__name:"BusinessMonthlySumarry",props:{businesses:Array},setup(i){return(b,l)=>(u(),c("div",tt,[(u(!0),c(v,null,h(i.businesses,e=>(u(),c("div",{key:e.id,class:"bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200"},[t("h3",et,r(e.name),1),l[0]||(l[0]=t("p",{class:"text-gray-500 mt-4"},"Income for February 2021",-1)),t("p",st,r(e.total_income),1),l[1]||(l[1]=t("p",{class:"text-gray-500 mt-4"},"Expenses for February 2021",-1)),t("p",ot,r(e.total_expense),1),t("p",nt,r(e.total_net_profit)+" vs previous month",1)]))),128))]))}},at=T(lt,[["__scopeId","data-v-78fd1e2a"]]),rt={class:"my-3 border-b-2 p-3 rounded-md w-full"},dt={class:"w-full"},it={class:"bg-white shadow-lg rounded-2xl p-6 w-full border border-gray-200"},ut={class:"flex flex-col"},ct={class:"flex bg-gray-200 py-1 w-fit my-2 rounded-md"},bt=["value","onClick"],gt={__name:"FinancialReports",props:{businesses:Array},emits:["addTransaction"],setup(i,{emit:b}){let l=i,e=p(""),d=p({income:"Income",expense:"Expense"});p("");let x=b,f=n=>{l.businesses.forEach(a=>{a.active=!1}),n.active=!0,e.value=n},o=(n,a)=>{if(n===""||n===void 0){alert("Please select a business");return}x("addTransaction",n,a)};return(n,a)=>(u(),c("section",rt,[t("div",dt,[t("div",it,[a[4]||(a[4]=t("h3",{class:"text-xl font-bold text-black"},"Total balance",-1)),t("div",ut,[m(t("input",{"onUpdate:modelValue":a[0]||(a[0]=g=>s(d).expense=g),readonly:"",onClick:a[1]||(a[1]=g=>s(o)(s(e),s(d).expense)),class:"cursor-pointer rounded-md text-gray-500 mt-2 font-bold text-white py-2 w-full bg-blue-500 text-center border-0 focus:outline-none"},null,512),[[_,s(d).expense]]),t("div",ct,[(u(!0),c(v,null,h(i.businesses,g=>(u(),c("input",{type:"button",value:g.name,onClick:It=>s(f)(g),class:C(["w-32 p-1 mx-1  cursor-pointer rounded-md ",g.active?" bg-white text-gray-800":"bg-gray-300 text-gray-500 border-2"])},null,10,bt))),256))]),m(t("input",{"onUpdate:modelValue":a[2]||(a[2]=g=>s(d).income=g),readonly:"",onClick:a[3]||(a[3]=g=>s(o)(s(e),s(d).income)),class:"cursor-pointer rounded-md text-gray-500 mt-2 font-bold text-white py-2 w-full bg-blue-500 text-center border-0 focus:outline-none"},null,512),[[_,s(d).income]])])])])]))}},pt={class:"overflow-x-auto"},mt={class:"w-full border border-gray-300"},ft={class:"p-2 border-b"},xt={class:"p-2 border-b font-bold"},yt={class:"p-2 border-b"},_t={class:"p-2 border-b"},vt={class:"p-2 border-b"},ht={__name:"AllTransactions",props:{transactions:Array},setup(i){return(b,l)=>(u(),c("div",pt,[t("table",mt,[l[0]||(l[0]=t("thead",{class:"bg-gray-200"},[t("tr",null,[t("th",{class:"p-2 border"},"Date"),t("th",{class:"p-2 border"},"Type"),t("th",{class:"p-2 border"},"Business Unit"),t("th",{class:"p-2 border"},"Category"),t("th",{class:"p-2 border"},"Description"),t("th",{class:"p-2 border"},"Amount")])],-1)),t("tbody",null,[(u(!0),c(v,null,h(i.transactions,(e,d)=>(u(),c("tr",{key:d,class:"text-center"},[t("td",ft,r(e.date_of_transaction),1),t("td",{class:C(["p-2 border-b",{"text-red-500":e.type==="Expense","text-green-500":e.type==="Income"}])},r(e.type),3),t("td",xt,r(e.business.name),1),t("td",yt,r(e.category.name),1),t("td",_t,r(e.description||"-"),1),t("td",vt,"₦"+r(e.amount.toLocaleString()),1)]))),128))])])]))}},wt={class:"bg-white shadow-lg rounded-2xl p-6 max-w-lg mx-auto"},$t={class:"w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"},Tt=["value"],kt={__name:"AddTransactionModel",props:{categories:Array,business:Array,typeOftransaction:String},emits:["closDialogue"],setup(i,{emit:b}){let l=i;const e=D({business_id:"",type:"",category_id:"",description:"",amount:"",date_of_transaction:""});let d=b;const x=()=>{e.business_id=l.business.id,e.type=l.typeOftransaction,console.log(e.business_id),e.post("add-new-transaction",{onSuccess:()=>{alert("Transaction saved successfully!"),e.reset(),d("closDialogue")}})};return(f,o)=>(u(),c("div",wt,[o[11]||(o[11]=t("h2",{class:"text-3xl font-semibold text-center mb-6 text-gray-900"},"Add Transaction",-1)),t("form",{onSubmit:B(x,["prevent"]),class:"space-y-4"},[t("div",null,[o[4]||(o[4]=t("label",{for:"amount",class:"block text-gray-700 font-medium mb-1"},"Adding transaction to:",-1)),t("div",$t,r(i.business.name),1)]),t("div",null,[o[6]||(o[6]=t("label",{for:"category_id",class:"block text-gray-700 font-medium mb-1"},"Select Category",-1)),m(t("select",{"onUpdate:modelValue":o[0]||(o[0]=n=>s(e).category_id=n),id:"category_id",required:"",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"},[o[5]||(o[5]=t("option",{value:"",disabled:"",selected:""},"Select a Category",-1)),(u(!0),c(v,null,h(i.categories,n=>(u(),c("option",{key:n.id,value:n.id},r(n.name),9,Tt))),128))],512),[[S,s(e).category_id]])]),t("div",null,[o[7]||(o[7]=t("label",{for:"description",class:"block text-gray-700 font-medium mb-1"},"Description",-1)),m(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=n=>s(e).description=n),id:"description",required:"",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"},null,512),[[_,s(e).description]])]),t("div",null,[o[8]||(o[8]=t("label",{for:"amount",class:"block text-gray-700 font-medium mb-1"},"Amount",-1)),m(t("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=n=>s(e).amount=n),id:"amount",required:"",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"},null,512),[[_,s(e).amount]])]),t("div",null,[o[9]||(o[9]=t("label",{for:"updated_at",class:"block text-gray-700 font-medium mb-1"},"Date of Transaction",-1)),m(t("input",{type:"date","onUpdate:modelValue":o[3]||(o[3]=n=>s(e).date_of_transaction=n),id:"updated_at",required:"",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"},null,512),[[_,s(e).date_of_transaction]])]),o[10]||(o[10]=t("button",{type:"submit",class:"w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"}," Save Transaction ",-1))],32)]))}},At={class:"fixed w-full max-w-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-50"},Ct={class:"my-6 w-full"},Mt={class:"bg-white shadow-md rounded-2xl p-6 w-full border border-gray-200"},Dt={class:"text-blue-600 mt-2 font-bold text-4xl"},St={class:"my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"},Bt={class:"my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"},Vt={class:"my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"},Et={class:"my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"},Ft={class:"my-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"},Lt={__name:"Welcome",props:{businesses:Array,categories:Array,transactions:Array},setup(i){let b=i,l=p(!1),e=p(""),d=p(""),x=p(0),f=(n,a)=>{e.value=n,d.value=a,l.value=!l.value},o=()=>{$.get("/business-total-balance").then(n=>{n.data&&(x.value=n.data,console.log(n.data))})};return w(()=>{o()}),(n,a)=>(u(),V(F,null,{default:E(()=>[m(t("div",{onClick:a[0]||(a[0]=(...g)=>s(f)&&s(f)(...g)),class:"fixed inset-0 bg-black bg-opacity-50 z-40"},null,512),[[A,s(l)]]),m(t("div",At,[y(kt,{business:s(e),typeOftransaction:s(d),categories:s(b).categories,onClosDialogue:s(f)},null,8,["business","typeOftransaction","categories","onClosDialogue"])],512),[[A,s(l)]]),t("section",Ct,[t("div",Mt,[a[1]||(a[1]=t("h3",{class:"text-2xl font-semibold text-gray-900"},"Total Balance",-1)),t("p",Dt,r(s(x)),1)])]),t("section",St,[y(G)]),t("section",Bt,[y(Z)]),t("section",Vt,[y(at,{businesses:i.businesses},null,8,["businesses"])]),t("section",Et,[y(gt,{businesses:i.businesses,onAddTransaction:s(f)},null,8,["businesses","onAddTransaction"])]),t("section",Ft,[y(ht,{transactions:i.transactions},null,8,["transactions"])])]),_:1}))}};export{Lt as default};

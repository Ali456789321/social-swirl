import{r as s,b as m,u as h,c as p,e as u,j as e,k as b,l as j,n as f}from"./index--DnvvA7e.js";import{A as g}from"./Adminnav-rywzFrDf.js";import"./person-htdLa4D3.js";const C=()=>{const[a,n]=s.useState(""),[c,d]=s.useState(!0),{jobs:l,loading:i}=m(t=>t.count),r=h(),o=p();s.useEffect(()=>{o(u())},[]),s.useEffect(()=>{l.length>0&&d(l.some(t=>t.title.toLowerCase().includes(a.toLowerCase())))},[a]),console.log(c);const x=l.filter(t=>t.type==="job").filter(t=>t.title.toLowerCase().includes(a.toLowerCase()));return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("h1",{className:"text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-10",children:"Job Table"}),e.jsxs("div",{className:"w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40",children:[e.jsx("div",{className:"text-center mb-20",children:e.jsx("input",{className:"m-auto bg-gray-100 py-1 ps-2 pe-6 rounded-md",placeholder:"search job",type:"text",onChange:t=>n(t.target.value)})}),e.jsx("div",{className:"w-full",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-14 py-3",children:"Job Title"}),e.jsx("th",{className:"px-14 py-3",children:"Job Issue Date"}),e.jsx("th",{className:"px-14 py-3",children:"Job Status"})]})}),e.jsx("tbody",{children:i?e.jsx("h1",{children:"loading"}):c?x.map(t=>e.jsxs("tr",{className:"bg-white border border-b-gray-300",children:[e.jsx("td",{className:"text-sm py-5 ps-5 flex items-center",children:e.jsx("h1",{className:"ps-5",children:t.title})}),e.jsx("td",{className:"text-sm py-5 ps-5 text-center",children:t.issuedate}),e.jsx("td",{className:"text-sm py-5 ps-5 text-center font-semibold text-blue-400",children:"Active"}),e.jsxs("td",{className:"text-sm py-5 ps-5 text-center flex gap-1",children:[e.jsx(b,{onClick:()=>r(`/jobupdate/${t.id}`),className:"bg-blue-400 p-2 rounded-full text-white",size:"35px"}),e.jsx(j,{onClick:()=>[o(f(t.id)),r("/remote")],className:"bg-blue-400 p-2 rounded-full text-white",size:"35px"})]})]},t.id)):e.jsx("h1",{children:"no data found"})})]})})]})]})};export{C as default};
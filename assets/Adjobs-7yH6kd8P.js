import{r as h,u as x,c as b,j as e,g}from"./index--DnvvA7e.js";import{A as j}from"./Adminnav-rywzFrDf.js";import"./person-htdLa4D3.js";const w=()=>{const[r,o]=h.useState({skills:[],qualifications:[]}),m=x(),u=b(),c=/\d+/,t=i=>{const{name:s,value:d}=i.target;if(s.startsWith("skills")){const n=parseInt(s.match(c)[0],10);o(a=>{const l=[...a.skills];return l[n-1]=d,{...a,skills:l}})}else if(s.startsWith("qualifications")){const n=parseInt(s.match(c)[0],10);o(a=>{const l=[...a.qualifications];return l[n-1]=d,{...a,qualifications:l}})}else o(n=>({...n,[s]:d}))},p=i=>{i.preventDefault(),console.log("Submitted Job:",r),console.log(r),u(g(r)),m("/remote")};return e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsxs("div",{className:"max-sm:px-5 ",children:[e.jsx("h1",{className:"text-center text-5xl max-sm:text-3xl mb-20 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent",children:"Add New Job/Internship"}),e.jsx("div",{className:"w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mb-20",children:e.jsxs("form",{action:"/",onSubmit:p,children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2",children:"Job title"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none",name:"title",placeholder:"job title",type:"text"})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h1",{className:"mb-2",children:"Add Description"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none",name:"description",placeholder:"Description",type:"text"})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"mt-8",children:"skills"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"skills1",placeholder:"Enter skill 1",type:"text"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"skills2",placeholder:"Enter skill 2",type:"text"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"skills3",placeholder:"Enter skill 3",type:"text"}),e.jsx("h1",{className:"mt-8",children:"qualifications"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"qualifications1",placeholder:"Enter qualification 1",type:"text"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"qualifications2",placeholder:"Enter qualification 2",type:"text"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"qualifications3",placeholder:"Enter qualification 3",type:"text"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2",name:"qualifications4",placeholder:"Enter qualification4",type:"text"}),e.jsx("h1",{className:"mb-2 mt-4",children:"Image Url"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none",name:"img",placeholder:"Add image url",type:"text"}),e.jsx("h1",{className:"mb-2 mt-4",children:"Issue Date"}),e.jsx("input",{onChange:t,className:"border rounded-md border-gray-200 w-full py-1 ps-2 outline-none",name:"issuedate",placeholder:"Issue Date",type:"text"})]}),e.jsxs("div",{className:"flex mt-5 justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("input",{onChange:t,type:"checkbox",name:"type",value:"job",id:""}),e.jsx("label",{className:"ps-2",htmlFor:"Job",children:"Job"})]}),e.jsxs("div",{children:[e.jsx("input",{onChange:t,type:"checkbox",value:"internship",name:"type",id:""}),e.jsx("label",{className:"ps-2",htmlFor:"Job",children:"Internship"})]})]}),e.jsx("button",{className:"mt-5 w-full border border-social_right py-2 rounded-xl hover:bg-social_right duration-300 hover:text-white font-semibold",children:"ADD JOB"})]})})]})]})};export{w as default};
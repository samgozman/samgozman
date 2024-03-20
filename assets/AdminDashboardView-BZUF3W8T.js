import{d as h,r as w,e as x,B as _,b as n,g as a,a as e,w as i,u as r,F as m,p as y,o as d,l as k,k as l,R as c,t as f,S as v}from"./index-TQQe2P_l.js";const D={class:"flex justify-end"},N={class:"grid grid-cols-1 gap-y-2 my-4"},B={class:"flex items-center"},C={class:"ml-4"},S={class:"text-sm text-gray-500"},V={class:"flex items center gap-2"},A=["disabled","onClick"],T=h({__name:"AdminDashboardView",setup(F){window.document.title="Admin Dashboard | Sam Gozman";const u=w([]);x(async()=>await p());const p=async()=>{const t=await _.getPosts(1,25);if(!t.ok){console.error("Failed to fetch posts:",t);return}u.value=t.posts},b=async t=>{const o=v.get("token");if(!o){console.error("No token found");return}const s=await _.sendPostToSubscribers(o,t);if(!s.ok){console.error("Failed to publish post:",s);return}await p()},g=t=>{const o=new Date(t);return!isNaN(o.getTime())&&t!=="0001-01-01T00:00:00Z"};return(t,o)=>(d(),n(m,null,[a(k,{value:"Admin Dashboard."}),e("div",D,[a(r(c),{class:"btn font-poppins font-semibold text-white btn-primary",to:{name:"admin-new-post"}},{default:i(()=>[l(" Create new post ")]),_:1})]),e("div",N,[(d(!0),n(m,null,y(u.value,s=>(d(),n("div",{key:s.slug,class:"flex items-center justify-between p-2 bg-white rounded-md shadow-md"},[e("div",B,[e("div",C,[a(r(c),{to:{name:"blog-post",params:{slug:s.slug}},class:"text-lg font-semibold hover:underline"},{default:i(()=>[l(f(s.title),1)]),_:2},1032,["to"]),e("p",S,f(s.created_at),1)])]),e("div",V,[e("button",{class:"btn",disabled:g(s.sent_to_subscribers_at),onClick:()=>b(s.slug)}," Send notifications ",8,A),a(r(c),{class:"btn text-white btn-primary",to:{name:"admin-edit-post",params:{slug:s.slug}}},{default:i(()=>[l(" Edit ")]),_:2},1032,["to"])])]))),128))])],64))}});export{T as default};
//# sourceMappingURL=AdminDashboardView-BZUF3W8T.js.map
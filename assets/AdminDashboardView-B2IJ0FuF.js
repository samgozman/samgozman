import{d as h,e as w,r as x,b as y,B as _,f as n,j as o,a as t,w as i,u as r,F as m,p as k,o as l,l as v,k as d,R as c,t as f,S as D}from"./index-js99ORtL.js";const N={class:"flex justify-end"},S={class:"grid grid-cols-1 gap-y-2 my-4"},B={class:"flex items-center"},C={class:"ml-4"},V={class:"text-sm text-gray-500"},A={class:"flex items center gap-2"},F=["disabled","onClick"],j=h({__name:"AdminDashboardView",setup(P){w({title:"Admin Dashboard | Sam Gozman"});const u=x([]);y(async()=>await p());const p=async()=>{const e=await _.getPosts(1,25);if(!e.ok){console.error("Failed to fetch posts:",e);return}u.value=e.posts},b=async e=>{const a=D.get("token");if(!a){console.error("No token found");return}const s=await _.sendPostToSubscribers(a,e);if(!s.ok){console.error("Failed to publish post:",s);return}await p()},g=e=>{const a=new Date(e);return!isNaN(a.getTime())&&e!=="0001-01-01T00:00:00Z"};return(e,a)=>(l(),n(m,null,[o(v,{value:"Admin Dashboard."}),t("div",N,[o(r(c),{class:"btn font-poppins font-semibold text-white btn-primary",to:{name:"admin-new-post"}},{default:i(()=>[d(" Create new post ")]),_:1})]),t("div",S,[(l(!0),n(m,null,k(u.value,s=>(l(),n("div",{key:s.slug,class:"flex items-center justify-between p-2 bg-white rounded-md shadow-md"},[t("div",B,[t("div",C,[o(r(c),{to:{name:"blog-post",params:{slug:s.slug}},class:"text-lg font-semibold hover:underline"},{default:i(()=>[d(f(s.title),1)]),_:2},1032,["to"]),t("p",V,f(s.created_at),1)])]),t("div",A,[t("button",{class:"btn",disabled:g(s.sent_to_subscribers_at),onClick:()=>b(s.slug)}," Send notifications ",8,F),o(r(c),{class:"btn text-white btn-primary",to:{name:"admin-edit-post",params:{slug:s.slug}}},{default:i(()=>[d(" Edit ")]),_:2},1032,["to"])])]))),128))])],64))}});export{j as default};
//# sourceMappingURL=AdminDashboardView-B2IJ0FuF.js.map

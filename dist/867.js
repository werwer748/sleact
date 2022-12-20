/*! For license information please see 867.js.LICENSE.txt */
"use strict";(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[867],{2219:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(5692),r=n(5916),o=n(9250),s=n(8678),i=n(8100),c=n(3564),p=n(8648),d=n(6042);const m=({show:e,onCloseModal:t,setShowInviteChannelModal:n})=>{const{workspace:m,channel:u}=(0,o.UO)(),[h,g,b]=(0,s.Z)(""),{data:x}=(0,i.ZP)("/api/users",c.Z),{data:f,mutate:k}=(0,i.ZP)(x&&u?`/api/workspaces/${m}/channels/${u}/members`:null,c.Z),w=(0,a.useCallback)((e=>{e.preventDefault(),h&&h.trim()&&p.Z.post(`/api/workspaces/${m}/channels/${u}/members`,{email:h}).then((()=>{k(),n(!1),b("")})).catch((e=>{console.dir(e),d.Am.error(e.response?.data,{position:"bottom-center"})}))}),[h]);return a.createElement(l.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:w},a.createElement(r.__,{id:"member-label"},a.createElement("span",null,"채널 멤버 초대"),a.createElement(r.II,{id:"member",value:h,onChange:g})),a.createElement(r.zx,{type:"submit"},"초대하기")))}},5692:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(1053);const r=(0,l.Z)("div",{target:"e1yr9h8w1"})({name:"10w7pu7",styles:"position:fixed;text-align:center;left:0;bottom:0;top:0;right:0;z-index:1022;&>div{margin-top:200px;display:inline-block;width:440px;background:white;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;max-width:440px;padding:30px 40px 0;z-index:1012;position:relative;}"}),o=(0,l.Z)("button",{target:"e1yr9h8w0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),s=({show:e,children:t,onCloseModal:n})=>{const l=(0,a.useCallback)((e=>{e.stopPropagation()}),[]);return e?a.createElement(r,{onClick:n},a.createElement("div",{onClick:l},a.createElement(o,{onClick:n},"×"),t)):null}},2951:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(3992),l=n(7294);let r;const o=e=>{const t=(0,l.useCallback)((()=>{r&&(r.disconnect(),r=void 0)}),[]);return r||(r=(0,a.io)(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[r,t]}},2867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(7294),l=n(1053);const r=(0,l.Z)("div",{target:"ehdscrr13"})({name:"tjo4qw",styles:"float:right"}),o=(0,l.Z)("header",{target:"ehdscrr12"})({name:"fvf0bi",styles:"height:38px;background:#350d36;color:#ffffff;box-shadow:0 1px 0 0 rgba(255, 255, 255, 0.1);padding:5px;text-align:center"}),s=(0,l.Z)("img",{target:"ehdscrr11"})({name:"1ly4jlu",styles:"width:28px;height:28px;position:absolute;top:5px;right:16px"}),i=(0,l.Z)("div",{target:"ehdscrr10"})({name:"47px7v",styles:"display:flex;padding:20px;& img{display:flex;}&>div{display:flex;flex-direction:column;margin-left:10px;}& #profile-name{font-weight:bold;display:inline-flex;}& #profile-active{font-size:13px;display:inline-flex;}"}),c=(0,l.Z)("button",{target:"ehdscrr9"})({name:"bl1q1k",styles:"border:none;width:100%;border-top:1px solid rgb(29, 28, 29);background:transparent;display:block;height:33px;padding:5px 20px 5px;outline:none;cursor:pointer"}),p=(0,l.Z)("div",{target:"ehdscrr8"})({name:"36bnqj",styles:"display:flex;flex:1"}),d=(0,l.Z)("div",{target:"ehdscrr7"})({name:"17lvj7e",styles:"width:65px;display:inline-flex;flex-direction:column;align-items:center;background:#3f0e40;border-top:1px solid rgb(82, 38, 83);border-right:1px solid rgb(82, 38, 83);vertical-align:top;text-align:center;padding:15px 0 0"}),m=(0,l.Z)("nav",{target:"ehdscrr6"})({name:"2pkygn",styles:"width:260px;display:inline-flex;flex-direction:column;background:#3f0e40;color:rgb(188, 171, 188);vertical-align:top;& a{padding-left:36px;color:inherit;text-decoration:none;height:28px;line-height:28px;display:flex;align-items:center;&.selected{color:white;}}& .bold{color:white;font-weight:bold;}& .count{margin-left:auto;background:#cd2553;border-radius:16px;display:inline-block;font-size:12px;font-weight:700;height:18px;line-height:18px;padding:0 9px;color:white;margin-right:16px;}& h2{height:36px;line-height:36px;margin:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;}"}),u=(0,l.Z)("button",{target:"ehdscrr5"})({name:"1rmthq7",styles:"height:64px;line-height:64px;border:none;width:100%;text-align:left;border-top:1px solid rgb(82, 38, 83);border-bottom:1px solid rgb(82, 38, 83);font-weight:900;font-size:24px;background:transparent;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0;padding-left:16px;margin:0;color:white;cursor:pointer"}),h=(0,l.Z)("div",{target:"ehdscrr4"})({name:"1146j5j",styles:"height:calc(100vh - 102px);overflow-y:auto"}),g=(0,l.Z)("div",{target:"ehdscrr3"})({name:"192o1ir",styles:"padding:10px 0 0;& h2{padding-left:20px;}&>button{width:100%;height:28px;padding:4px;border:none;background:transparent;border-top:1px solid rgb(28, 29, 28);cursor:pointer;&:last-of-type{border-bottom:1px solid rgb(28, 29, 28);}}"}),b=(0,l.Z)("div",{target:"ehdscrr2"})({name:"82a6rk",styles:"flex:1"}),x=(0,l.Z)("button",{target:"ehdscrr1"})({name:"9tlmej",styles:"color:white;font-size:24px;display:inline-block;width:40px;height:40px;background:transparent;border:none;cursor:pointer"}),f=(0,l.Z)("button",{target:"ehdscrr0"})({name:"wsqixl",styles:"display:inline-block;width:40px;height:40px;border-radius:10px;background:white;border:3px solid #3f0e40;margin-bottom:15px;font-size:18px;font-weight:700;color:black;cursor:pointer"});var k=n(3564),w=n(8100),E=n(8648),v=n(9250),Z=n(6182),C=n.n(Z),_=n(2584);const y=(0,l.Z)("div",{target:"ejoa3oo1"})({name:"3nqusf",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),M=(0,l.Z)("button",{target:"ejoa3oo0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),P=({children:e,style:t,show:n,onCloseModal:l,closeButton:r})=>{const o=(0,a.useCallback)((e=>{e.stopPropagation()}),[]);return n?a.createElement(y,{onClick:l},a.createElement("div",{onClick:o,style:t},r&&a.createElement(M,{onClick:l},"×"),e)):null};P.defaultProps={closeButton:!0};const S=P;var $=n(9655),z=n(5916),I=n(8678),q=n(5692),j=n(6042);const A=({show:e,onCloseModal:t,setShowCreateChannelModal:n})=>{const[l,r,o]=(0,I.Z)(""),{workspace:s,channel:i}=(0,v.UO)(),{data:c,error:p,mutate:d}=(0,w.ZP)("/api/users",k.Z),{data:m,mutate:u}=(0,w.ZP)(c?`/api/workspaces/${s}/channels`:null,k.Z),h=(0,a.useCallback)((e=>{e.preventDefault(),console.log(s),E.Z.post(`/api/workspaces/${s}/channels`,{name:l},{withCredentials:!0}).then((({data:e})=>{n(!1),u([...m,e],!1),o("")})).catch((e=>{console.dir(e),j.Am.error(e.response?.data,{position:"bottom-center"})}))}),[l]);return a.createElement(q.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:h},a.createElement(z.__,{id:"channel-label"},a.createElement("span",null,"채널"),a.createElement(z.II,{id:"channel",value:l,onChange:r})),a.createElement(z.zx,null,"생성하기")))},U=({show:e,onCloseModal:t,setShowInviteWorkspaceModal:n})=>{const{workspace:l}=(0,v.UO)(),[r,o,s]=(0,I.Z)(""),{data:i}=(0,w.ZP)("/api/users",k.Z),{mutate:c}=(0,w.ZP)(i?`/api/workspaces/${l}/members`:null,k.Z),p=(0,a.useCallback)((e=>{e.preventDefault(),r&&r.trim()&&E.Z.post(`/api/workspaces/${l}/members`,{email:r}).then((e=>{c(),n(!1),s("")})).catch((e=>{console.dir(e),j.Am.error(e.response?.data,{position:"bottom-center"})}))}),[l,r]);return a.createElement(q.Z,{show:e,onCloseModal:t},a.createElement("form",{onSubmit:p},a.createElement(z.__,{id:"channel-label"},a.createElement("span",null,"이메일"),a.createElement(z.II,{id:"channel",value:r,onChange:o})),a.createElement(z.zx,{type:"submit"},"초대하기")))};var O=n(2219);const D=(0,l.Z)("button",{target:"e589ftg0"})("background:transparent;border:none;width:26px;height:26px;display:inline-flex;justify-content:center;align-items:center;color:white;margin-left:10px;cursor:pointer;",(({collapse:e})=>e&&"\n    & i {\n      transform: none;\n    }\n  "),";");var L=n(2951);const N=()=>{const{workspace:e}=(0,v.UO)(),{data:t,error:n,mutate:l}=(0,w.ZP)("/api/users",k.Z,{dedupingInterval:2e3}),{data:r}=(0,w.ZP)(t?`/api/workspaces/${e}/members`:null,k.Z),[o]=(0,L.Z)(e),[s,i]=(0,a.useState)(!1),[c,p]=(0,a.useState)([]),d=(0,a.useCallback)((()=>{i((e=>!e))}),[]);return(0,a.useEffect)((()=>(o?.on("onlineList",(e=>{p(e)})),()=>{o?.off("onlineList")})),[o]),(0,a.useEffect)((()=>{}),[]),a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(D,{collapse:s,onClick:d},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement("span",null,"Direct Message")),a.createElement("div",null,!s&&r?.map((n=>{const l=c.includes(n.id);return a.createElement($.OL,{key:n.id,className:({isActive:e})=>e?"selected":"",to:`/workspace/${e}/dm/${n.id}`},a.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence "+(l?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),a.createElement("span",null,n.nickname),n.id===t?.id&&a.createElement("span",null," (나)"))}))))},W=()=>{const{workspace:e}=(0,v.UO)(),{data:t,error:n,mutate:l}=(0,w.ZP)("/api/users",k.Z,{dedupingInterval:2e3}),{data:r}=(0,w.ZP)(t?`/api/workspaces/${e}/channels`:null,k.Z),[o,s]=(0,a.useState)(!1),i=(0,a.useCallback)((()=>{s((e=>!e))}),[]);return a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(D,{collapse:o,onClick:i},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement("span",null,"Channels")),a.createElement("div",null,!o&&r?.map((t=>a.createElement($.OL,{key:t.name,className:({isActive:e})=>e?"selected":"",to:`/workspace/${e}/channel/${t.name}`},a.createElement("span",null,"# ",t.name))))))},F=(0,_.ZP)((()=>Promise.all([n.e(777),n.e(13),n.e(708)]).then(n.bind(n,5256)))),B=(0,_.ZP)((()=>Promise.all([n.e(777),n.e(13),n.e(94)]).then(n.bind(n,3094)))),R=()=>{const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),[Z,_]=(0,a.useState)(!1),[y,M,P]=(0,I.Z)(""),[D,R,G]=(0,I.Z)(""),[H,J]=(0,a.useState)(!1),[K,Q]=(0,a.useState)(!1),[T,V]=(0,a.useState)(!1),{workspace:X}=(0,v.UO)(),{data:Y,error:ee,mutate:te}=(0,w.ZP)("/api/users",k.Z),{data:ne}=(0,w.ZP)(Y?`/api/workspaces/${X}/channels`:null,k.Z),{data:ae}=(0,w.ZP)(Y?`/api/workspaces/${X}/members`:null,k.Z),[le,re]=(0,L.Z)(X);(0,a.useEffect)((()=>{ne&&Y&&le&&(console.log("소켓확인",le),le.emit("login",{id:Y.id,channels:ne.map((e=>e.id))}))}),[le,ne,Y]),(0,a.useEffect)((()=>()=>{re()}),[X,re]);const oe=(0,a.useCallback)((()=>{E.Z.post("/api/users/logout",null,{withCredentials:!0}).then((()=>{te(!1,!1)}))}),[te]),se=(0,a.useCallback)((()=>{t((e=>!e))}),[e]),ie=(0,a.useCallback)((e=>{e.stopPropagation(),t(!1)}),[e]),ce=(0,a.useCallback)((()=>{l(!0)}),[]),pe=(0,a.useCallback)((e=>{e.preventDefault(),y&&y.trim()&&D&&D.trim()&&E.Z.post("/api/workspaces",{workspace:y.trim(),url:D.trim()},{withCredentials:!0}).then((()=>{te(),l(!1),P(""),G("")})).catch((e=>{console.dir(e),j.Am.error(e.response?.data,{position:"bottom-center"})}))}),[y,D]),de=(0,a.useCallback)((()=>{l(!1),J(!1),Q(!1),V(!1)}),[]),me=(0,a.useCallback)((()=>{_((e=>!e))}),[]),ue=(0,a.useCallback)((()=>{J(!0)}),[]),he=(0,a.useCallback)((()=>{Q(!0)}),[]);return Y?a.createElement("div",null,a.createElement(o,null,a.createElement(r,null,a.createElement("span",{onClick:se},a.createElement(s,{src:C().url(Y.email,{s:"28px",d:"retro"}),alt:Y.nickname}),e&&a.createElement(S,{style:{right:0,top:38},show:e,onCloseModal:ie},a.createElement(i,null,a.createElement("img",{src:C().url(Y.email,{s:"36px",d:"retro"}),alt:Y.nickname}),a.createElement("div",null,a.createElement("span",{id:"profile-name"},Y.nickname),a.createElement("span",{id:"profile-active"},"Active"))),a.createElement(c,{onClick:oe},"로그아웃"))))),a.createElement(p,null,a.createElement(d,null,Y&&Y.Workspaces?.map((e=>a.createElement($.rU,{key:e.id,to:"/workspace/123/channel/일반"},a.createElement(f,null,e.name.slice(0,1).toUpperCase())))),a.createElement(x,{onClick:ce},"+")),a.createElement(m,null,a.createElement(u,{onClick:me},"Sleact"),a.createElement(h,null,a.createElement(S,{show:Z,onCloseModal:me,style:{top:95,left:80}},a.createElement(g,null,a.createElement("h2",null,"Sleact"),a.createElement("button",{onClick:he},"워크스페이스에 사용자 초대"),a.createElement("button",{onClick:ue},"채널 만들기"),a.createElement("button",{onClick:oe},"로그아웃"))),a.createElement(W,null),a.createElement(N,null))),a.createElement(b,null,a.createElement(v.Z5,null,a.createElement(v.AW,{path:"/channel/:channel",element:a.createElement(F,null)}),a.createElement(v.AW,{path:"/dm/:id",element:a.createElement(B,null)})))),a.createElement(q.Z,{show:n,onCloseModal:de},a.createElement("form",{onSubmit:pe},a.createElement(z.__,{id:"workspace-label"},a.createElement("span",null,"워크스페이스 이름"),a.createElement(z.II,{id:"workspace",value:y,onChange:M})),a.createElement(z.__,{id:"workspace-url-label"},a.createElement("span",null,"워크스페이스 URL"),a.createElement(z.II,{id:"workspace",value:D,onChange:R})),a.createElement(z.zx,{type:"submit"},"생성하기"))),a.createElement(A,{show:H,onCloseModal:de,setShowCreateChannelModal:J}),a.createElement(U,{show:K,onCloseModal:de,setShowInviteWorkspaceModal:Q}),a.createElement(O.Z,{show:T,onCloseModal:de,setShowInviteChannelModal:V})):a.createElement(v.Fg,{to:"/login"})}}}]);
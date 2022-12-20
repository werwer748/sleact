/*! For license information please see 256.js.LICENSE.txt */
"use strict";(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[256,708],{2219:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),l=a(5692),r=a(5916),o=a(9250),s=a(8678),c=a(8100),i=a(3564),p=a(8648),d=a(6042);const u=({show:e,onCloseModal:t,setShowInviteChannelModal:a})=>{const{workspace:u,channel:h}=(0,o.UO)(),[m,g,b]=(0,s.Z)(""),{data:f}=(0,c.ZP)("/api/users",i.Z),{data:w,mutate:x}=(0,c.ZP)(f&&h?`/api/workspaces/${u}/channels/${h}/members`:null,i.Z),k=(0,n.useCallback)((e=>{e.preventDefault(),m&&m.trim()&&p.Z.post(`/api/workspaces/${u}/channels/${h}/members`,{email:m}).then((()=>{x(),a(!1),b("")})).catch((e=>{console.dir(e),d.Am.error(e.response?.data,{position:"bottom-center"})}))}),[m]);return n.createElement(l.Z,{show:e,onCloseModal:t},n.createElement("form",{onSubmit:k},n.createElement(r.__,{id:"member-label"},n.createElement("span",null,"채널 멤버 초대"),n.createElement(r.II,{id:"member",value:m,onChange:g})),n.createElement(r.zx,{type:"submit"},"초대하기")))}},5692:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(1053);const r=(0,l.Z)("div",{target:"e1yr9h8w1"})({name:"10w7pu7",styles:"position:fixed;text-align:center;left:0;bottom:0;top:0;right:0;z-index:1022;&>div{margin-top:200px;display:inline-block;width:440px;background:white;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;max-width:440px;padding:30px 40px 0;z-index:1012;position:relative;}"}),o=(0,l.Z)("button",{target:"e1yr9h8w0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),s=({show:e,children:t,onCloseModal:a})=>{const l=(0,n.useCallback)((e=>{e.stopPropagation()}),[]);return e?n.createElement(r,{onClick:a},n.createElement("div",{onClick:l},n.createElement(o,{onClick:a},"×"),t)):null}},2951:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(3992),l=a(7294);let r;const o=e=>{const t=(0,l.useCallback)((()=>{r&&(r.disconnect(),r=void 0)}),[]);return r||(r=(0,n.io)(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[r,t]}},5256:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(7294),l=a(1053);const r=(0,l.Z)("div",{target:"enhg4lt2"})({name:"1a0r0eh",styles:"display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative"}),o=(0,l.Z)("header",{target:"enhg4lt1"})({name:"1ezwwi6",styles:"height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center;& .header-right{display:flex;flex:1;justify-content:flex-end;align-items:center;}"});var s=a(2545),c=a(2309),i=a(8678),p=a(9250),d=a(8100),u=a(3564),h=a(4593),m=a(2951),g=a(8648),b=a(8667),f=a(2219);const w=()=>{const{workspace:e,channel:t}=(0,p.UO)(),{data:a}=(0,d.ZP)("/api/users",u.Z),{data:l,mutate:w,setSize:x}=(0,h.ZP)((a=>`/api/workspaces/${e}/channels/${t}/chats?perPage=20&page=${a+1}`),u.Z),{data:k}=(0,d.ZP)(`/api/workspaces/${e}/channels/${t}`,u.Z),{data:Z}=(0,d.ZP)(a?`/api/workspaces/${e}/channels/${t}/members`:null,u.Z),[v]=(0,m.Z)(e),C=0===l?.[0]?.length,E=C||l&&l[l.length-1]?.length<20||!1,[_,y,$]=(0,i.Z)(""),S=(0,n.useRef)(null),[P,z]=(0,n.useState)(!1),I=(0,n.useCallback)((n=>{if(n.preventDefault(),_?.trim()&&l&&k){const n=_;w((e=>{const t=e?[...e]:[];return 0!==t.length&&(t[0]=[...t[0],{id:(l[0][0]?.id||0)+1,content:n,UserId:a.id,User:a,ChannelId:k.id,Channel:k,createdAt:new Date}]),t}),!1).then((()=>{$(""),S.current?.scrollToBottom()})),g.Z.post(`/api/workspaces/${e}/channels/${t}/chats`,{content:_}).then((e=>{console.log("채팅 성공값",e),w()})).catch(console.error)}$("")}),[_,l,a,k,e,t]),M=(0,n.useCallback)((e=>{e.Channel.name===t&&e.UserId!==a.id&&w((t=>(t?.[0].unshift(e),t)),!1).then((()=>{S.current&&S.current.getScrollHeight()<S.current.getClientHeight()+S.current.getScrollTop()+150&&(console.log("scrollToBottom!!!!",S.current?.getValues()),setTimeout((()=>{S.current?.scrollToBottom()}),50))}))}),[t,a]);(0,n.useEffect)((()=>(v?.on("message",M),()=>{v?.off("message",M)})),[v,M]),(0,n.useEffect)((()=>{1===l?.length&&S.current?.scrollToBottom()}),[l]);const T=(0,n.useCallback)((()=>{z(!0)}),[]),U=(0,n.useCallback)((()=>{z(!1)}),[]);if(!a||!a)return null;const B=(0,b.Z)(l?l.flat().reverse():[]);return n.createElement(r,null,n.createElement(o,null,n.createElement("span",null,"#",t),n.createElement("div",{className:"header-right"},n.createElement("span",null,Z?.length),n.createElement("button",{onClick:T,className:"c-button-unstyled p-ia__view_header__button","aria-label":"Add people to #react-native","data-sk":"tooltip_parent",type:"button"},n.createElement("i",{className:"c-icon p-ia__view_header__button_icon c--icon--add-user","aria-hidden":"true"})))),n.createElement(s.Z,{chatSections:B,ref:S,setSize:x,isEmpty:C,isReachingEnd:E}),n.createElement(c.Z,{chat:_,onChangeChat:y,onSubmitForm:I}),n.createElement(f.Z,{show:P,onCloseModal:U,setShowInviteChannelModal:z}))}}}]);
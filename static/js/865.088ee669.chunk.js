"use strict";(self.webpackChunktweets=self.webpackChunktweets||[]).push([[865],{865:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(87),s=n(683),a=n(433),o=n(861),c=n(439),u=n(757),l=n.n(u),i=n(791),f=n(243);function p(){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.Z)("tweets-app");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(l().mark((function t(e){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.put("tweets-app/".concat(e.id),{name:e.name,avatar:e.avatar,followers:e.followers+1,tweets:e.tweets});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)(l().mark((function t(e){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.put("tweets-app/".concat(e.id),{name:e.name,avatar:e.avatar,followers:e.followers-1,tweets:e.tweets});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f.Z.defaults.baseURL="https://6444295a90738aa7c0807feb.mockapi.io/";var m=n(184);function k(t){var e=t.user,n=t.follow,r=t.unfollow,s=t.followedUsers;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:e.avatar,alt:e.name})}),(0,m.jsx)("p",{children:e.name}),(0,m.jsxs)("p",{children:[e.tweets," Tweets"]}),(0,m.jsxs)("p",{children:[" ",e.followers.toLocaleString("en-US")," Followers"]}),s.includes(e.id)?(0,m.jsx)("button",{type:"button",onClick:function(){return r(e)},children:"Following"}):(0,m.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Follow"})]})}function b(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,i.useState)(3),f=(0,c.Z)(u,2),w=f[0],h=f[1],x=(0,i.useState)(JSON.parse(localStorage.getItem("followedUsers"))||[]),b=(0,c.Z)(x,2),g=b[0],j=b[1];(0,i.useEffect)((function(){function t(){return(t=(0,o.Z)(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var y=n.slice(0,w);function Z(t){var e=[].concat((0,a.Z)(g),[t.id]);function n(){return n=(0,o.Z)(l().mark((function t(e){var n,r,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:n=t.sent,r=n.id,s={followers:n.followers},U(r,s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),n.apply(this,arguments)}j(e),localStorage.setItem("followedUsers",JSON.stringify(e)),function(t){n.apply(this,arguments)}(t)}function S(t){var e=g.filter((function(e){return e!==t.id}));function n(){return n=(0,o.Z)(l().mark((function t(e){var n,r,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:n=t.sent,r=n.id,s={followers:n.followers},U(r,s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),n.apply(this,arguments)}j(e),localStorage.setItem("followedUsers",JSON.stringify(e)),function(t){n.apply(this,arguments)}(t)}function U(t,e){r((function(n){return n.map((function(n){return n.id===t?(0,s.Z)((0,s.Z)({},n),e):n}))}))}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("ul",{children:y.map((function(t){return(0,m.jsx)("li",{children:(0,m.jsx)(k,{user:t,follow:Z,unfollow:S,followedUsers:g})},t.id)}))}),y.length<n.length&&(0,m.jsx)("button",{type:"button",onClick:function(){h(w+3)},children:"Load more"})]})}var g=function(t){return t.users,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.OL,{to:"/",children:"\u2190 Go back"}),(0,m.jsx)("p",{children:" This is tweets"}),(0,m.jsx)(b,{})]})}}}]);
//# sourceMappingURL=865.088ee669.chunk.js.map
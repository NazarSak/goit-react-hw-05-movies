"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[256],{256:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var c=e(439),a=e(791),r=e(119),o=e(689),i=e(184),u=function(n){var t=n.cast;return(0,i.jsx)("ul",{children:t.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:n.profile_path?"https://www.themoviedb.org/t/p/original/".concat(n.profile_path):"https://i.ibb.co/VVFCdTD/image.jpg",alt:n.name,width:"400px",height:"400px"}),(0,i.jsx)("h3",{children:n.name})]},n.id)}))})},f=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],f=t[1],h=(0,o.UO)().moveid;return(0,a.useEffect)((function(){(0,r.og)(h).then((function(n){return n.json()})).then((function(n){return f(n.cast)}))}),[h]),(0,i.jsx)(i.Fragment,{children:0===e.length?(0,i.jsx)("p",{children:"Sorry but we don't have actors for unknown reasons"}):(0,i.jsx)(u,{cast:e})})}},119:function(n,t,e){e.d(t,{DK:function(){return o},J9:function(){return i},Jn:function(){return u},XT:function(){return r},og:function(){return f}});var c="450e11a88d577b3ba488dedff52e79a6",a="https://api.themoviedb.org/3/",r=function(){return fetch("".concat(a,"trending/movie/day?api_key=").concat(c))},o=function(n){return fetch("".concat(a,"search/movie?api_key=").concat(c,"&language=en-US&include_adult=false&query=").concat(n))},i=function(n){return fetch("".concat(a,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US"))},u=function(n){return fetch("".concat(a,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))},f=function(n){return fetch("".concat(a,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"))}}}]);
//# sourceMappingURL=256.076b8e3f.chunk.js.map
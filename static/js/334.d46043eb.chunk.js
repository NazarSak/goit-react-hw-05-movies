"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[334],{334:function(e,n,t){t.r(n);var c=t(439),i=t(689),r=t(119),a=t(791),o=t(87),s=t(184);n.default=function(){var e=(0,a.useState)(""),n=(0,c.Z)(e,2),t=n[0],u=n[1],h=(0,i.UO)().moveid;(0,a.useEffect)((function(){(0,r.J9)(h).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[h]);var l=t.popularity,d=t.original_title,f=t.overview,p=t.status;return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:t.poster_path?"https://www.themoviedb.org/t/p/original/".concat(t.poster_path):"https://i.ibb.co/FB037FW/image.jpg",alt:t.tagline,width:"1000",height:"1000"}),(0,s.jsx)("h2",{children:d}),(0,s.jsxs)("p",{children:["Popularity:",l]}),(0,s.jsx)("h3",{children:"Overview"}),""===f?(0,s.jsx)("p",{children:"sorry,but overview empty "}):(0,s.jsx)("p",{children:f}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Status"}),":",p]}),(0,s.jsx)("h4",{children:"Adittional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(i.j3,{})})]})}},119:function(e,n,t){t.d(n,{DK:function(){return a},J9:function(){return o},Jn:function(){return s},XT:function(){return r},og:function(){return u}});var c="450e11a88d577b3ba488dedff52e79a6",i="https://api.themoviedb.org/3/",r=function(){return fetch("".concat(i,"trending/movie/day?api_key=").concat(c))},a=function(e){return fetch("".concat(i,"search/movie?api_key=").concat(c,"&language=en-US&include_adult=false&query=").concat(e))},o=function(e){return fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"))},s=function(e){return fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))},u=function(e){return fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US"))}}}]);
//# sourceMappingURL=334.d46043eb.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{270:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var i,c,r,a,o,s,l,u,f,p,d,h=t(439),x=t(689),j=t(119),y=t(791),g=t(87),v=t(168),Z=t(444),m=Z.ZP.span(i||(i=(0,v.Z)(["\nfont-size:30px;\n\n"]))),w=Z.ZP.span(c||(c=(0,v.Z)(["\nfont-size:30px;\n"]))),_=Z.ZP.ul(r||(r=(0,v.Z)(["\ndisplay: flex;\njustify-content: center;\nlist-style: none;\ncolumn-gap: 30px;\n"]))),k=Z.ZP.h4(a||(a=(0,v.Z)(["\nfont-size: 30px;\ndisplay: flex;\njustify-content: center;\n"]))),P=Z.ZP.p(o||(o=(0,v.Z)(["\nfont-size: 30px;\ndisplay: flex;\njustify-content: center;\n"]))),b=Z.ZP.h3(s||(s=(0,v.Z)(["\nfont-size: 30px;\ndisplay: flex;\njustify-content: center;\n"]))),z=Z.ZP.p(l||(l=(0,v.Z)(["\nfont-size: 20px;\njustify-content: center;\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: center;\n"]))),S=Z.ZP.div(u||(u=(0,v.Z)(["\ndisplay: flex;\nheight: auto;\njustify-content: center;\nflex-direction: column;\n"]))),U=Z.ZP.p(f||(f=(0,v.Z)(["\nfont-size: 30px;\njustify-content: center;\ndisplay: flex;\nmargin: 55px 0;\n"]))),C=Z.ZP.h2(p||(p=(0,v.Z)(["\ndisplay: flex;\njustify-content: center;\nmargin: 60px 0;\n"]))),J=Z.ZP.img(d||(d=(0,v.Z)(["\ndisplay: flex;\njustify-content: center;\n"]))),F=t(184),O=function(){var n=(0,y.useState)(""),e=(0,h.Z)(n,2),t=e[0],i=e[1],c=(0,x.UO)().moveid;(0,y.useEffect)((function(){(0,j.J9)(c).then((function(n){return n.json()})).then((function(n){return i(n)}))}),[c]);var r=t.popularity,a=t.original_title,o=t.overview,s=t.status;return(0,F.jsxs)("div",{children:[(0,F.jsx)(J,{src:t.poster_path?"https://www.themoviedb.org/t/p/original/".concat(t.poster_path):"https://i.ibb.co/FB037FW/image.jpg",alt:t.tagline,width:"1000",height:"1000"}),(0,F.jsx)(C,{children:a}),(0,F.jsxs)(P,{children:["Popularity:",r]}),(0,F.jsxs)(S,{children:[(0,F.jsx)(b,{children:"Overview"}),""===o?(0,F.jsx)(z,{children:"sorry,but overview empty "}):(0,F.jsx)(z,{children:o})]}),(0,F.jsxs)(U,{children:[(0,F.jsx)("span",{children:"Status"}),":",s]}),(0,F.jsx)(k,{children:"Adittional information"}),(0,F.jsxs)(_,{children:[(0,F.jsx)("li",{children:(0,F.jsx)(g.rU,{to:"cast",children:(0,F.jsx)(m,{children:"Cast"})})}),(0,F.jsx)("li",{children:(0,F.jsx)(g.rU,{to:"reviews",children:(0,F.jsx)(w,{children:"Reviews"})})})]}),(0,F.jsx)(y.Suspense,{fallback:(0,F.jsx)("div",{children:"Loading..."}),children:(0,F.jsx)(x.j3,{})})]})}},119:function(n,e,t){t.d(e,{DK:function(){return a},J9:function(){return o},Jn:function(){return s},XT:function(){return r},og:function(){return l}});var i="450e11a88d577b3ba488dedff52e79a6",c="https://api.themoviedb.org/3/",r=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(i))},a=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(i,"&language=en-US&include_adult=false&query=").concat(n))},o=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"))},s=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))},l=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}}}]);
//# sourceMappingURL=270.64551f25.chunk.js.map
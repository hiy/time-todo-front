(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{9124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var a=t(5893),i=t(809),r=t.n(i),s=t(266),o=t(1664),d=t(5978),c=t(9163),u=t(4559),l=t(7294),h=t(8767),m=t(774),f=t(8687),p=t(4195),x=t(3023),j=t(5358),g=t(9307),v=t(6830),_=t(5735),w=t(2931),y=t(6208),b=t(3815),P=t(7955),k=t(1640),C=t(4668),Z=c.ZP.h2.withConfig({displayName:"dashboard__Title",componentId:"sc-1nak91j-0"})(["font-size:3rem;margin-bottom:2rem;"]),N=["#0088FE","#00C49F","#FFBB28","#FF8042"],M=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],E=c.ZP.div.withConfig({displayName:"dashboard__Container",componentId:"sc-1nak91j-1"})(["height:100%;padding:0 1rem;"]),F=c.ZP.main.withConfig({displayName:"dashboard__Main",componentId:"sc-1nak91j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10rem 0;"]),D=c.ZP.div.withConfig({displayName:"dashboard__YearMonthControl",componentId:"sc-1nak91j-3"})(["display:flex;justify-content:space-between;width:12rem;"]),T=c.ZP.span.withConfig({displayName:"dashboard__YearMonthButton",componentId:"sc-1nak91j-4"})([""]),I=c.ZP.div.withConfig({displayName:"dashboard__ChartWrapper",componentId:"sc-1nak91j-5"})(["display:flex;"]);function L(){var e=(0,l.useState)([]),n=e[0],t=e[1],i=(0,l.useState)(new Date),c=i[0],L=i[1],B=(0,h.useQuery)("searchTodoList",(0,s.Z)(r().mark((function e(){var n,t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,P.Z)(c,"Y"),t=(0,P.Z)(c,"MM"),a=new m.DT(n,t),e.next=5,m.ZP.searchChartData(a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))));(0,l.useEffect)((function(){if(!B.isLoading&&B.data){if(B.data.length>0)return void t(B.data);t([])}}),[B.isLoading,B.data]),(0,l.useEffect)((function(){B.refetch()}),[c]);var K=Math.PI/180;return B.isLoading?(0,a.jsx)(a.Fragment,{children:"Loading..."}):(0,a.jsxs)(E,{children:[(0,a.jsxs)(F,{children:[(0,a.jsx)(u.Z,{title:"Timer TODO"}),(0,a.jsx)(d.Z,{children:(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:"/todoList",children:"Todo\u30ea\u30b9\u30c8"})})}),(0,a.jsxs)(Z,{children:[(0,P.Z)(c,"Y/MM"),(0,a.jsx)("hr",{})]}),(0,a.jsxs)(D,{children:[(0,a.jsx)(T,{className:"pure-button",onClick:function(){return L((0,k.Z)(c,-1))},children:"\u524d\u6708\u3078"}),(0,a.jsx)(T,{className:"pure-button",onClick:function(){return L((0,k.Z)(c,1))},children:"\u6b21\u6708\u3078"})]}),0===n.length?(0,a.jsx)("p",{children:"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}):(0,a.jsxs)(I,{children:[(0,a.jsxs)(f.w,{width:500,height:300,data:M,margin:{top:5,right:30,left:20,bottom:5},children:[(0,a.jsx)(p.q,{strokeDasharray:"3 3"}),(0,a.jsx)(x.K,{dataKey:"name"}),(0,a.jsx)(j.B,{}),(0,a.jsx)(g.u,{}),(0,a.jsx)(v.D,{}),(0,a.jsx)(_.x,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),(0,a.jsx)(_.x,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]}),(0,a.jsxs)(w.u,{width:500,height:400,children:[(0,a.jsx)(y.b,{data:n,cx:"50%",cy:"50%",labelLine:!1,outerRadius:180,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.cx,i=e.cy,r=e.midAngle,s=e.innerRadius,o=e.outerRadius,d=e.percent,c=e.index,u=s+.5*(o-s),l=t+u*Math.cos(-r*K),h=i+u*Math.sin(-r*K);return(0,a.jsx)("text",{x:l,y:h,fill:"white",textAnchor:l>t?"start":"end",dominantBaseline:"central",children:"".concat(n[c].name," ").concat((100*d).toFixed(0),"%")},c)},children:n.map((function(e,n){return(0,a.jsx)(b.b,{fill:N[n%N.length]},"cell-".concat(n))}))}),(0,a.jsx)(g.u,{})]})]})]}),(0,a.jsx)(C.Z,{})]})}},5058:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(9124)}])}},function(e){e.O(0,[774,445,181,54,895,468,888,179],(function(){return n=5058,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
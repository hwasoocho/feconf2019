(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Y+7a":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsors",function(){var n=t("th2Z");return{page:n.default||n}}])},ZtMo:function(n,e,t){"use strict";var a=t("mXGw"),r=t.n(a),s=t("qXww"),o=t("DDOR"),i=t.n(o),u=t("wZh9"),c=t("3gUM"),l=r.a.createElement,p=Object(u.c)(),d=[{itemCnt:3,grade:"DIAMOND",sponsors:p.filter(function(n){return n.sponsor.grade===c.a.Diamond})},{itemCnt:3,grade:"PLATINUM",sponsors:p.filter(function(n){return n.sponsor.grade===c.a.Platinum})},{itemCnt:2,grade:"GOLD",sponsors:p.filter(function(n){return n.sponsor.grade===c.a.Gold})},{itemCnt:3,grade:"ETC",sponsors:p.filter(function(n){return n.sponsor.grade===c.a.ETC})}];e.a=function(){return l("div",{className:i.a.Sponsors},d.map(function(n){return n.sponsors.length?l("div",{key:n.grade,className:Object(s.a)([i.a.Row,n.grade])},l("h2",null,n.grade),n.sponsors.reduce(function(e,t,a){return a%n.itemCnt===0&&e.push([]),e[e.length-1].push(t),e},[]).map(function(e,t){return l("div",{key:t,className:Object(s.a)([i.a.SponsorList,i.a[n.grade]])},e.map(function(n){return l("a",{key:n.name,href:n.link,target:"_blank"},l("img",{src:"/static/images/sponsors/"+n.image,alt:n.name}))}))})):null}))}},th2Z:function(n,e,t){"use strict";t.r(e);var a=t("mXGw"),r=t.n(a),s=t("qXww"),o=t("PHvu"),i=t.n(o),u=t("/5iA"),c=t("Rblb"),l=t("ZtMo"),p=r.a.createElement,d=function(){return p(r.a.Fragment,null,p("div",{className:Object(s.a)(["container",i.a.SponsorsPage])},p(u.a,{title:"2019",subTitle:"Our Proud Sponsors"}),p("div",{className:i.a.SponsorList},p(l.a,null))),p(c.a,null))};e.default=d}},[["Y+7a",1,0,2]]]);
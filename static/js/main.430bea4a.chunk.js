(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,,,function(e,t,a){},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/ymir.3cf9ca15.jpg"},function(e,t,a){e.exports=a.p+"static/media/audumbla.e1bf16a9.jpg"},function(e,t,a){e.exports=a.p+"static/media/ran.bc7bb93c.jpg"},function(e,t,a){e.exports=a.p+"static/media/aegir.fc4d3907.png"},function(e,t,a){e.exports=a.p+"static/media/laufey.65a3ddbd.jpg"},function(e,t,a){e.exports=a.p+"static/media/farbauti.eebea3e7.jpg"},function(e,t,a){e.exports=a.p+"static/media/angrboda.71a318dc.jpg"},function(e,t,a){e.exports=a.p+"static/media/space.588e59c3.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),r=a.n(o),l=(a(18),a(4),a(1)),s=(a(5),a(22),a(6)),c=a(7),p=a(23),u=function(){function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(s.a)(this,e),this.name=t,this.gender=a,this.birthPool=n,this.spawningPool=null,this.imageUrl="https://www.wallpaperup.com/uploads/wallpapers/2014/01/14/227249/e0ae6e6675d0eae1559c948141358316-700.jpg"}return Object(c.a)(e,[{key:"procreate",value:function(e,t,a){return null===this.spawningPool?("male"===this.gender?(this.spawningPool=new m(e,this),null!==e&&(e.spawningPool=this.spawningPool)):(this.spawningPool=new m(this,e),null!==e&&(e.spawningPool=this.spawningPool)),this.spawningPool.newSpawn(t,a)):this.spawningPool.newSpawn(t,a)}},{key:"getSiblings",value:function(){if(null!==this.birthPool)return console.log(p.blue("siblings"),this.birthPool.getSpawn()),this.birthPool.getSpawn();console.log("this human sprang out of the ground")}},{key:"addImage",value:function(e){this.imageUrl=e}},{key:"addParents",value:function(t,a){if(null===this.birthPool){var n=new e(a,"male"),i=new e(t,"female"),o=new m(i,n);return o.spawn=[this],this.birthPool=o,{mom:i,dad:n}}}}]),e}(),m=function(){function e(t,a){Object(s.a)(this,e),this.x=t,this.y=a,this.spawn=[]}return Object(c.a)(e,[{key:"newSpawn",value:function(e,t){var a=new u(e,t,this);return this.spawn.push(a),console.log(p.red("spawn created"),a),a}},{key:"getSpawn",value:function(){return console.log("current spawn",this.spawn),this.spawn}},{key:"getX",value:function(){return console.log("this.x",this.x),this.x}},{key:"getY",value:function(){return console.log("this.y",this.y),this.y}}]),e}(),g=new u("Ymir","male");g.addImage(a(32));var d=new u("Audumbla","female");d.addImage(a(33)),g.procreate(d,"Ran","female").addImage(a(34));g.procreate(d,"Buri","male");g.procreate(d,"Aegir","male").addImage(a(35));var h=g.procreate(d,"Laufey","female");h.addImage(a(36));var y=g.procreate(d,"Farbauti","male");y.addImage(a(37));var w=g.procreate(d,"Angrboda","female");w.addImage(a(38));var f=y.procreate(h,"Loki","male");f.addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Loki_finds_Gullveigs_Heart_-_John_Bauer.jpg/220px-Loki_finds_Gullveigs_Heart_-_John_Bauer.jpg"),f.procreate(w,"Hel","female").addImage("https://i1.wp.com/sacredhaven.ca/files/resized/28453/213;284;34a95f349564602491ab3326e588bf480b8daf82.jpg"),f.procreate(w,"Jormungandr","male").addImage("https://vignette.wikia.nocookie.net/monster/images/2/22/Jormungand.jpg/revision/latest?cb=20090513192621"),f.procreate(w,"Fenrir","male").addImage("https://cdn.shopify.com/s/files/1/1879/3511/articles/5763661171091141b48ff398dbedf6a3_1024x1024.jpg?v=1526522495");var v=f,b=a(8),x=a(12);var k=function e(t){var a=t.kid;console.log(a,"kid");a.gender;var n=t.gr,o=t.cp,r=t.idx,s=[{x:0,y:0,z:-n},{x:0,y:0,z:n},{x:0,y:n,z:0},{x:0,y:-n,z:0},{x:0,y:o,z:o},{x:0,y:o,z:-o},{x:0,y:-o,z:o},{x:0,y:-o,z:-o}];return i.a.createElement(l.Entity,{class:"clickable",geometry:{primitive:"sphere",radius:n/8},material:{opacity:1,src:a.imageUrl},position:s[r],animation:{property:"rotation",dur:12e3,repeat:"indefinite",to:"360 0 0",loop:!0},rotation:{x:0,y:0,z:0},text:{value:a.name},events:{click:t.onClick}},null!==a.spawningPool?a.spawningPool.spawn.map(function(t,a){return i.a.createElement(e,{onClick:function(){return console.log("cliecked on child of child")},kid:t,gr:n/4,cp:Math.sqrt(Math.pow(n,2)/2),idx:a})}):null,i.a.createElement(l.Entity,{text:{value:a.name}}))};var E=function(){var e,t=Object(n.useState)(v.spawningPool),o=Object(x.a)(t,2),r=o[0],s=o[1];console.log(r,"pool in Tree");var c=Math.sqrt(Math.pow(2,2)/2);return i.a.createElement(l.Scene,null,i.a.createElement(l.Entity,{geometry:{primitive:"sphere",radius:2},material:{color:"lightblue",opacity:0},position:{x:0,y:0,z:-2},animation:{property:"rotation",to:"360 0 0",loop:!0,dur:2e4,easing:"linear"},rotation:{x:0,y:0,z:0}},r.spawn.length>0?r.spawn.map(function(e,t){return i.a.createElement(k,{onClick:function(){return t=e,console.log("clicked childclick"),void(null!==t.spawningPool&&s(t.spawningPool));var t},kid:e,gr:2,cp:c,idx:t})}):null,"//green block"),i.a.createElement(l.Entity,{geometry:{primitive:"sphere",radius:0},material:{color:"lightblue",opacity:0},position:{x:0,y:0,z:-2},animation:{property:"rotation",to:"0 360 0",loop:!0,dur:1e4,easing:"linear"},rotation:{x:0,y:0,z:0}},i.a.createElement(l.Entity,{class:"clickable",geometry:{primitive:"sphere",radius:.5},material:{opacity:1,src:r.y.imageUrl},position:{x:.6,y:0,z:0},animation:{property:"rotation",dur:12e3,repeat:"indefinite",to:"0 360 0",easing:"linear",loop:!0},rotation:{x:0,y:0,z:0},events:{click:function(){null!==r.y.birthPool&&s(r.y.birthPool)}}}),i.a.createElement(l.Entity,{geometry:{primitive:"sphere",radius:.5},material:{opacity:1,src:r.x.imageUrl},position:{x:-.6,y:0,z:0}})),"// look controls",i.a.createElement(l.Entity,{light:{type:"point"},position:{x:0,y:8,z:2}}),i.a.createElement(l.Entity,{light:{type:"point"},position:{x:0,y:-8,z:2}}),i.a.createElement(l.Entity,{text:{value:"children of "+r.x.name+" and "+r.y.name}}),i.a.createElement(l.Entity,{primitive:"a-camera",position:{x:-1,y:1,z:2}},i.a.createElement(l.Entity,(e={primitive:"a-cursor",cursor:{fuse:!1},material:{color:"white",shader:"flat",opacity:.75},geometry:{radiusInner:.005,radiusOuter:.007},"event-set__1":{_event:"mouseenter",scale:{x:1.4,y:1.4,z:1.4}}},Object(b.a)(e,"event-set__1",{_event:"mouseleave",scale:{x:1,y:1,z:1}}),Object(b.a)(e,"raycaster","objects: .clickable"),e))),i.a.createElement("a-sky",{src:a(39)}))};var P=function(){return console.log("loki",v.spawningPool.getSpawn()),Math.sqrt(Math.pow(2,2)/2),i.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.430bea4a.chunk.js.map
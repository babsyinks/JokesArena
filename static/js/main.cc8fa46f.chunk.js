(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,a,t){},25:function(e,a,t){e.exports=t(57)},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(22),i=t.n(o),s=(t(30),t(4)),l=t(3),c=t.n(l),u=t(10),m=t(5),d=t(6),h=t(8),p=t(7),g=t(2),k=t(9),v=(t(32),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleAudios=t.props.handleAudios,t.mapRatingToEmojiOrColor=t.mapRatingToEmojiOrColor.bind(Object(g.a)(t)),t}return Object(k.a)(a,e),Object(d.a)(a,[{key:"mapRatingToEmojiOrColor",value:function(e,a,t){var r=a.handleAnger,o=a.handleLaughter,i=a.handleNeutral,s=a.handleFurious,l=a.handleYawn,c=a.handleLaughHard;switch(e>12?e=12:e<-12&&(e=-12),e){case 0:return t?n.a.createElement("i",{onMouseOver:i,onClick:i,className:"em em-neutral_face smile","aria-role":"presentation","aria-label":"NEUTRAL FACE"}):"2px solid rgb(216, 216, 16)";case 1:case 2:case 3:return t?n.a.createElement("i",{onMouseOver:o,onClick:o,className:"em em-smile smile","aria-role":"presentation","aria-label":"SMILING FACE WITH OPEN MOUTH AND SMILING EYES"}):"2px solid rgb(157, 255, 0)";case 4:case 5:case 6:return t?n.a.createElement("i",{onMouseOver:o,onClick:o,className:"em em-laughing smile","aria-role":"presentation","aria-label":"SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"}):"2px solid rgb(0, 255, 0)";case 7:case 8:case 9:return t?n.a.createElement("i",{onMouseOver:c,onClick:c,className:"em em-joy smile","aria-role":"presentation","aria-label":"FACE WITH TEARS OF JOY"}):"2px solid rgb(7, 168, 7)";case 10:case 11:case 12:return t?n.a.createElement("i",{onMouseOver:c,onClick:c,className:"em em-rolling_on_the_floor_laughing smile","aria-role":"presentation","aria-label":"ROLLING ON THE FLOOR LAUGHING"}):"2px solid green";case-1:case-2:case-3:return t?n.a.createElement("i",{onMouseOver:l,onClick:l,className:"em em-dizzy_face smile","aria-role":"presentation","aria-label":"DIZZY FACE"}):"2px solid rgb(255, 174, 0)";case-4:case-5:case-6:return t?n.a.createElement("i",{onMouseOver:r,onClick:r,className:"em em-unamused smile","aria-role":"presentation","aria-label":"UNAMUSED FACE"}):"2px solid rgb(255, 123, 0)";case-7:case-8:case-9:return t?n.a.createElement("i",{onMouseOver:r,onClick:r,className:"em em-slightly_frowning_face smile","aria-role":"presentation","aria-label":"SLIGHTLY FROWNING FACE"}):"2px solid rgb(223, 37, 12)";case-10:case-11:case-12:return t?n.a.createElement("i",{onMouseOver:s,onClick:s,className:"em em-angry smile","aria-role":"presentation","aria-label":"ANGRY FACE"}):"2px solid red";default:return t?n.a.createElement("i",{onMouseOver:i,onClick:i,className:"em em-neutral_face smile","aria-role":"presentation","aria-label":"NEUTRAL FACE"}):"2px solid rgb(255, 255, 0)"}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"jokeWrapper"},n.a.createElement("i",{className:"em em---1","aria-role":"presentation","aria-label":"THUMBS UP SIGN",onClick:function(){e.props.handleVote(1,e.props.id)}}),n.a.createElement("span",{className:"rating",style:{border:this.mapRatingToEmojiOrColor(this.props.rating,!1)}},this.props.rating),n.a.createElement("i",{className:"em em--1","aria-role":"presentation","aria-label":"THUMBS DOWN SIGN",onClick:function(){e.props.handleVote(-1,e.props.id)}}),n.a.createElement("span",{className:"joke"},this.props.joke),n.a.createElement("i",{onClick:function(){return e.props.setFavourites(e.props.id)},className:"em ".concat(this.props.favouriteStatus?"em-star2":"em-star"," star"),"aria-role":"presentation","aria-label":this.props.favouriteStatus?"GLOWING STAR":"WHITE MEDIUM STAR"}),this.mapRatingToEmojiOrColor(this.props.rating,this.props.handleAudios,!0))}}]),a}(n.a.Component)),f=(t(12),t(33),function(){return n.a.createElement("div",{className:"emojiWrapper"},n.a.createElement("div",{className:"emojis animate"},n.a.createElement("i",{className:"em em-joy","aria-role":"presentation","aria-label":"FACE WITH TEARS OF JOY"}),n.a.createElement("i",{className:"em em-neutral_face neutral","aria-role":"presentation","aria-label":"NEUTRAL FACE"}),n.a.createElement("i",{className:"em em-angry angry","aria-role":"presentation","aria-label":"ANGRY FACE"}),n.a.createElement("h1",{className:"loading"},"Loading...")))}),E=t(23),A=t.n(E),N=t(24),j=t.n(N),b=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleLaughter=function(){t.playAudio(t.audioLaugh)},t.handleNeutral=function(){t.playAudio(t.audioNeutral)},t.handleAnger=function(){t.playAudio(t.audioAngry)},t.handleYawn=function(){t.playAudio(t.audioYawn)},t.handleLaughHard=function(){t.playAudio(t.audioLaughHard)},t.handleFurious=function(){t.playAudio(t.audioFurious)},t.state={jokesArray:[],canFetch:!0,loading:!0},t.getFavouriteJokes=t.getFavouriteJokes.bind(Object(g.a)(t)),t.getMoreJokes=t.getMoreJokes.bind(Object(g.a)(t)),t.vote=t.vote.bind(Object(g.a)(t)),t.setFavouriteJokes=t.setFavouriteJokes.bind(Object(g.a)(t)),t.playAudio=t.playAudio.bind(Object(g.a)(t)),t}return Object(k.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchJokes();case 3:a=e.sent,this.setState({jokesArray:a,canFetch:!0,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({canFetch:!1,loading:!1});case 10:this.audioLaugh=new Audio("audios/laugh.mp3"),this.audioNeutral=new Audio("audios/neutral.mp3"),this.audioAngry=new Audio("audios/angry.mp3"),this.audioYawn=new Audio("audios/yawn.mp3"),this.audioLaughHard=new Audio("audios/laughhard.mp3"),this.audioFurious=new Audio("audios/furious.mp3");case 16:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchJokes",value:function(){var e=Object(u.a)(c.a.mark((function e(){var a,t,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t=c.a.mark((function e(){var t,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 2:t=e.sent,n=r.state.jokesArray.every((function(e){return e.joke!==t.data.joke})),o={joke:t.data.joke,id:j()(),rating:0,favouriteSet:!1},n&&(a.length>0?a.every((function(e){return e.joke!==t.data.joke}))&&a.push(o):a.push(o));case 6:case"end":return e.stop()}}),e)}));case 2:if(!(a.length<this.props.numJokes)){e.next=6;break}return e.delegateYield(t(),"t0",4);case 4:e.next=2;break;case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFavouriteJokes",value:function(){var e=JSON.parse(window.localStorage.getItem("jokes"));0!==e.length?this.setState({jokesArray:e}):alert("No Favourites Jokes set yet;use the star on your favourite joke to set it")}},{key:"setFavouriteJokes",value:function(e){var a=this.state.jokesArray.find((function(a){return a.id===e})),t=this.state.jokesArray.findIndex((function(a){return a.id===e})),r=JSON.parse(window.localStorage.getItem("jokes"))||[];0===r.filter((function(e){return e.joke===a.joke})).length?(a.favouriteSet=!a.favouriteSet,window.localStorage.setItem("jokes",JSON.stringify([].concat(Object(s.a)(r),[a])))):(a.favouriteSet=!1,window.localStorage.setItem("jokes",JSON.stringify(r.filter((function(e){return e.joke!==a.joke}))))),this.setState({jokesArray:[].concat(Object(s.a)(this.state.jokesArray.slice(0,t)),[a],Object(s.a)(this.state.jokesArray.slice(t+1)))})}},{key:"getMoreJokes",value:function(){var e=Object(u.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,this.fetchJokes();case 4:a=e.sent,this.setState((function(e){return{jokesArray:[].concat(Object(s.a)(e.jokesArray),Object(s.a)(a)),canFetch:!0,loading:!1}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({loading:!1,canFetch:!1});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"playAudio",value:function(e){e.play().then((function(){return console.log("")})).catch((function(e){return console.log(e.message)}))}},{key:"vote",value:function(e,a){var t=this.state.jokesArray.map((function(t){return t.id===a?(t.rating+=e,t.rating>12?t.rating=12:t.rating<-12&&(t.rating=-12),t):t}));this.setState({jokesArray:t})}},{key:"render",value:function(){var e=this;return this.state.loading?n.a.createElement(f,null):this.state.canFetch?n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Laughter Arena"),n.a.createElement("div",{className:"emojis"},n.a.createElement("i",{onMouseOver:this.handleLaughter,className:"em em-joy","aria-role":"presentation","aria-label":"FACE WITH TEARS OF JOY"}),n.a.createElement("i",{onMouseOver:this.handleNeutral,className:"em em-neutral_face neutral","aria-role":"presentation","aria-label":"NEUTRAL FACE"}),n.a.createElement("i",{onMouseOver:this.handleAnger,className:"em em-angry angry","aria-role":"presentation","aria-label":"ANGRY FACE"})),n.a.createElement("div",{className:"jokes",style:{height:this.state.jokesArray.length<=10?"":"84.5vh"}},this.state.jokesArray.map((function(a){return n.a.createElement(v,{key:a.id,joke:a.joke,id:a.id,rating:a.rating,favouriteStatus:a.favouriteSet,handleVote:e.vote,setFavourites:e.setFavouriteJokes,handleAudios:{handleAnger:e.handleAnger,handleLaughter:e.handleLaughter,handleNeutral:e.handleNeutral,handleFurious:e.handleFurious,handleLaughHard:e.handleLaughHard,handleYawn:e.handleYawn}})}))),n.a.createElement("div",{className:"buttonWrapper"},n.a.createElement("button",{onClick:this.getFavouriteJokes,className:"getFavouritesJokes",value:"Get Saved Favourite Jokes"},"Get Saved Favourite Jokes",n.a.createElement("i",{className:"em em-star2","aria-role":"presentation","aria-label":"GLOWING STAR"})),n.a.createElement("button",{onClick:this.getMoreJokes,className:"getFavouritesJokes moreJokes",value:"Get Even More New Jokes"},"Get Even More New Jokes ",n.a.createElement("i",{className:"em em-rolling_on_the_floor_laughing","aria-role":"presentation","aria-label":"ROLLING ON THE FLOOR LAUGHING"})))):n.a.createElement("div",{className:"status"},n.a.createElement("h1",{style:{textAlign:"center"}},"Could not fetch jokes, please check your connection"))}}]),a}(n.a.Component);b.defaultProps={numJokes:10};var O=b;t(56);var y=function(){return n.a.createElement("div",null,n.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.cc8fa46f.chunk.js.map
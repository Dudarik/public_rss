(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})();const t=(e=0)=>{let t=parseInt(e%3600/60,10),a=parseInt(e%3600%60,10);return t=t<10?"0"+t:String(t),a=a<10?"0"+a:String(a),`${t}:${a}`},a=e=>e+1,n=(e,t,a,n,o)=>{[e[t][a],e[n][o]]=[e[n][o],e[t][a]]},o=(e,t=1e3,a=!1)=>{let o=e.length-1,r=e.length-1;a||(e.length>5&&(t=2e3),3===e.length&&(t=100));for(let a=0;a<t;a++)switch(Math.floor(4*Math.random()+0)){case 0:0!==o&&n(e,o,r,--o,r);break;case 1:o!==e.length-1&&n(e,o,r,++o,r);break;case 2:0!==r&&n(e,o,r,o,--r);break;case 3:r!==e.length-1&&n(e,o,r,o,++r)}return e},r=(e,t,a,n)=>!(e<0||t<0||e>a||t>n),s=(e,t,a)=>{if(isNaN(t)||isNaN(a))return null;const n=[-1,0,1,0],o=[0,1,0,-1],s=e.length-1,i=e[0].length-1;for(let m=0;m<n.length;m++)if(r(t+n[m],a+o[m],s,i)&&0===e[t+n[m]][a+o[m]]){if(0===m)return{direction:"up",coords:[t+n[m],a+o[m]]};if(1===m)return{direction:"right",coords:[t+n[m],a+o[m]]};if(2===m)return{direction:"down",coords:[t+n[m],a+o[m]]};if(3===m)return{direction:"left",coords:[t+n[m],a+o[m]]}}return null},i={gameArray:[],gameWinArray:[],gameSettings:{sound:!0,numbers:!0,boardSizes:[3,4,5,6,7,8],currentBoardSize:4},ls_available:!1,ls_key_data:"dudarik_fifteen_data",ls_key_settings:"dudarik_fifteen_settings",ls_key_records:"dudarik_fifteen_records",records:{3:[{name:"AAA",movesCount:100,playTime:150},{name:"BBB",movesCount:150,playTime:250},{name:"CCC",movesCount:160,playTime:350},{name:"DDD",movesCount:170,playTime:450},{name:"EEE",movesCount:200,playTime:550},{name:"FFF",movesCount:250,playTime:650},{name:"GGG",movesCount:300,playTime:750},{name:"HHH",movesCount:350,playTime:850},{name:"JJJ",movesCount:400,playTime:950},{name:"KKK",movesCount:450,playTime:1e3}],4:[{name:"BBB",movesCount:300,playTime:500},{name:"CCC",movesCount:320,playTime:600},{name:"DDD",movesCount:330,playTime:700},{name:"EEE",movesCount:440,playTime:800},{name:"FFF",movesCount:550,playTime:900},{name:"GGG",movesCount:660,playTime:1e3},{name:"DDD",movesCount:770,playTime:1100},{name:"MMM",movesCount:880,playTime:1200},{name:"LOL",movesCount:890,playTime:1300},{name:"KEK",movesCount:900,playTime:1400}],5:[{name:"KKK",movesCount:500,playTime:600},{name:"BBB",movesCount:520,playTime:700},{name:"LOL",movesCount:530,playTime:800},{name:"DDD",movesCount:540,playTime:900},{name:"EEE",movesCount:650,playTime:1e3},{name:"FFF",movesCount:660,playTime:1100},{name:"FOX",movesCount:670,playTime:1200},{name:"HHH",movesCount:880,playTime:1300},{name:"JJJ",movesCount:990,playTime:1400},{name:"KKK",movesCount:999,playTime:1500}],6:[{name:"AAA",movesCount:900,playTime:2e3},{name:"LOL",movesCount:920,playTime:2200},{name:"CCC",movesCount:930,playTime:2300},{name:"FOX",movesCount:940,playTime:2400},{name:"EEE",movesCount:1050,playTime:2500},{name:"FFF",movesCount:1060,playTime:2600},{name:"BUG",movesCount:1170,playTime:2700},{name:"HHH",movesCount:1180,playTime:2800},{name:"KEK",movesCount:1390,playTime:2900},{name:"KKK",movesCount:1600,playTime:3e3}],7:[{name:"AAA",movesCount:1e3,playTime:3e3},{name:"BBB",movesCount:1010,playTime:3100},{name:"CCC",movesCount:1730,playTime:3200},{name:"LEL",movesCount:1740,playTime:3300},{name:"EEE",movesCount:1750,playTime:3350},{name:"FFF",movesCount:1760,playTime:3400},{name:"GGG",movesCount:1770,playTime:3450},{name:"VAS",movesCount:1780,playTime:3500},{name:"IDA",movesCount:1790,playTime:3550},{name:"REA",movesCount:1853,playTime:3559}],8:[{name:"FOX",movesCount:2e3,playTime:3e3},{name:"LOL",movesCount:2020,playTime:3100},{name:"KEK",movesCount:2030,playTime:3200},{name:"REA",movesCount:2040,playTime:3300},{name:"ALX",movesCount:2050,playTime:3400},{name:"MRX",movesCount:2060,playTime:3500},{name:"JHO",movesCount:2070,playTime:3510},{name:"ING",movesCount:2080,playTime:3520},{name:"INP",movesCount:2090,playTime:3530},{name:"VOX",movesCount:9999,playTime:3540}]},playTime:0,movesCount:0,inGame:!1,gameTimerId:null,cheatMode:!1,dragndrop:!1,dragableStartPosX:0,dragableStartPosY:0,dragableEndPosX:0,dragableEndPosY:0,animationDropableTime:400,inDropable:!1},m=(e,t)=>!!i.ls_available&&(localStorage.setItem(e,JSON.stringify(t)),!0),l=e=>!!i.ls_available&&JSON.parse(localStorage.getItem(e)),d=e.p+"assets/6e1f7ceff265ea7fe037.mp3",c=()=>{i.gameTimerId=setInterval((()=>{i.playTime=a(i.playTime),P()}),1e3),i.inGame=!0},u=()=>{i.gameTimerId&&clearInterval(i.gameTimerId),i.inGame=!1,i.playTime=0,i.movesCount=0,i.gameTimerId=null,O(),P()},p=()=>{i.dragndrop=!1},g=()=>{i.movesCount+=1,O()},v=()=>i.gameArray.flat().join("")===i.gameWinArray.flat().join(""),y=()=>{clearInterval(i.gameTimerId),i.inGame=!1,i.gameSettings.sound&&new Audio(d).play();const e=document.querySelector(".popup_overlay"),a=document.querySelector(".popup_card");a.innerHTML="",document.createElement("div").classList.add("victory_title"),a.innerHTML=`\n    <h3 class='victory_title'>!!! VICTORY !!!</h3>\n    <div class='victory_subtitle'>Hooray! You solved the puzzle in ${t(i.playTime)} and ${i.movesCount} moves!</div>\n  `;const n=document.createElement("div");if(n.classList.add("close_popup"),n.addEventListener("click",(()=>{e.classList.remove("popup_overlay_active")})),a.append(n),i.movesCount<i.records[i.gameSettings.currentBoardSize][9].movesCount){const t=document.createElement("input"),n=document.createElement("div");n.classList.add("newrecord_title");const o=document.createElement("h4");o.innerText="Congratulations! This is a new record!";const r=document.createElement("br"),s=document.createElement("span");s.innerText="Enter your name:",a.append(n,o,r,s),t.type="text",t.className="record_name",t.placeholder="Input your name here... max 10 symbols",t.oninput=()=>{t.value.length>8&&(t.value=t.value.slice(0,8))};const i=document.createElement("button");i.innerText="SAVE",i.classList.add("btnRecords_save"),i.addEventListener("click",(()=>{T(t.value),e.classList.remove("popup_overlay_active")})),a.append(t,i)}e.classList.add("popup_overlay_active")},T=e=>{const t=i.gameSettings.currentBoardSize,{movesCount:a,playTime:n}=i;i.records[t].push({name:e,movesCount:a,playTime:n}),i.records[t].sort(((e,t)=>e.movesCount-t.movesCount)),i.records[t]=i.records[t].slice(0,10),m(i.ls_key_records,i.records)},b=e=>{const a=i.records[e],n=(e,t,a,n)=>{const o=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div");return o.classList.add("records_num"),r.classList.add("records_name"),s.classList.add("records_moves"),i.classList.add("records_time"),o.innerText=e,r.innerText=t,s.innerText=a,i.innerText=n,[o,r,s,i]},o=[],r=n("№","NAME","MOVES","TIME"),s=document.createElement("div");s.classList.add("record_str"),s.append(...r),o.push(s);for(let e=0;e<a.length;e++){const r=document.createElement("div");r.classList.add("record_str");const s=n(e+1,a[e].name,a[e].movesCount,t(a[e].playTime));r.append(...s),o.push(r)}return o},S=()=>{const e={sound:i.gameSettings.sound,currentBoardSize:i.gameSettings.currentBoardSize};m(i.ls_key_settings,e)},C=()=>{i.gameTimerId=setInterval((()=>{i.playTime=a(i.playTime),P()}),1e3)},E=()=>{const e=i.gameSettings.currentBoardSize;i.gameArray=[],i.gameWinArray=[];for(let t=0;t<e;t++){const a=[];for(let n=0;n<e;n++)a.push(t*e+n+1);i.gameArray.push(a)}i.gameArray[e-1][e-1]=0;for(let e=0;e<i.gameArray.length;e++)i.gameWinArray.push([...i.gameArray[e]])},_=e.p+"assets/c7ea62c4967b91c643bc.mp3",L=e.p+"assets/14c688fc1b952ed0a1a2.mp3",f=e.p+"assets/d0c05eae0a0cf06463b5.mp3",h=e.p+"assets/d6b189d8b2681bc52026.mp3",A=e.p+"assets/a4302ea00c61eddeb548.mp3",B=e.p+"assets/295645536aaabe5d8250.mp3",k=()=>{u(),E(),i.gameSettings.sound&&new Audio(L).play(),i.cheatMode?(i.gameArray=o(i.gameArray,10,!0),i.gameArray.flat().join("")===i.gameWinArray.flat().join("")&&(i.gameArray=o(i.gameArray,10,!0))):i.gameArray=o(i.gameArray),i.movesCount=0,i.inGame=!0,X(),c(),document.querySelectorAll(".cell").forEach((e=>{e.classList.add("start_cell_anim")}))},x=e=>{u(),i.gameSettings.currentBoardSize=e.target.value,S(),E(),X()},z=e=>{const t=e.target.dataset.r,a=e.target.dataset.c,o=document.querySelector(".dropable"),r=o.dataset.r,s=o.dataset.c;n(i.gameArray,r,s,t,a),g(),e.target.classList.remove(`move_${i.animationDirection}`),i.animationDirection=null,X(),v()&&y(),document.querySelector("#board").addEventListener("mouseup",$)},I=e=>{i.inGame&&null!==s(i.gameArray,+e.target.dataset.r,+e.target.dataset.c)&&(i.dragndrop=!0,setTimeout((()=>{if(!i.dragndrop)return;const t=e.target;if(!t||"dropable"===t.id)return;const a=document.querySelector(`#${e.target.id}`);let o=e.clientX-a.getBoundingClientRect().left,r=e.clientY-a.getBoundingClientRect().top;const s=document.createElement("div");s.classList.add("cell"),s.innerHTML=a.innerHTML,s.style.cursor="grabbing",s.style.width=a.getBoundingClientRect().width+"px",s.style.height=a.getBoundingClientRect().height+"px",document.body.append(s),s.style.position="absolute",s.style.zIndex=1e3,s.style.opacity=.75,s.style.fontSize=i.gameSettings.currentBoardSize<6?"2rem":"1rem",i.dragableStartPosX=a.getBoundingClientRect().left,i.dragableStartPosY=a.getBoundingClientRect().top;const m=(e,t)=>{s.style.left=e-o+"px",s.style.top=t-r+"px"};let l=null;const d=e=>{i.inDropable=!1,e.style.background="",e.style.opacity=0},c=e=>{m(e.pageX,e.pageY),s.classList.add("displaynone");let t=document.elementFromPoint(e.clientX,e.clientY);if(s.classList.remove("displaynone"),!t)return;let a=t.closest("#dropable");var n;l!=a&&(l&&d(l),l=a,l&&(n=l,i.inDropable=!0,n.style.background="#e2f5fc",n.style.opacity=.2))},u=e=>{if(i.inDropable){const e=document.querySelector("#dropable");i.dragableStartPosX=e.getBoundingClientRect().left,i.dragableStartPosY=e.getBoundingClientRect().top}i.dragableEndPosX=s.getBoundingClientRect().left,i.dragableEndPosY=s.getBoundingClientRect().top,s.style.transition=`all ${i.animationDropableTime}ms`,s.style.transform=`translate(${i.dragableStartPosX-i.dragableEndPosX}px, ${i.dragableStartPosY-i.dragableEndPosY}px)`,setTimeout((()=>{if(s.remove(),i.inDropable){const e=a.dataset.r,t=a.dataset.c,o=document.querySelector("#dropable"),r=o.dataset.r,s=o.dataset.c;n(i.gameArray,r,s,e,t),i.gameSettings.sound&&new Audio(f).play(),g(),X(),v()&&y(),d(l)}}),i.animationDropableTime),document.removeEventListener("mousemove",c),s.removeEventListener("mouseup",u)};document.addEventListener("mousemove",c),s.addEventListener("mouseup",u),m(e.pageX,e.pageY),p()}),150))},$=e=>{if(!i.inGame)return;p();const t=e.target;if(t){document.querySelector(`#${e.target.id}`).addEventListener("transitionend",z);const o=s(i.gameArray,+t.dataset.r,+t.dataset.c);o&&(i.gameSettings.sound&&new Audio(_).play(),a=e.target,n=o.direction,i.animationDirection=n,a.classList.add(`move_${n}`))}var a,n},D=()=>{i.ls_available||alert("Для того, чтобы сохранения были доступны, включите возможность записи в localstorage! В насатройках вашего браузера!"),i.gameSettings.sound&&new Audio(A).play();const e={gameArray:i.gameArray,gameWinArray:i.gameWinArray,playTime:i.playTime,movesCount:i.movesCount,inGame:i.inGame,gameSettings:{currentBoardSize:i.gameSettings.currentBoardSize}};m(i.ls_key_data,e)},M=()=>{if(!i.ls_available)return void alert("Для того, чтобы сохранения были доступны, включите возможность записи в localstorage! В насатройках вашего браузера!");i.gameSettings.sound&&new Audio(B).play(),u();const e=l(i.ls_key_data);if(e){for(const t in e)"gameSettings"!==t?Object.hasOwnProperty.call(e,t)&&(i[t]=e[t]):i.gameSettings.currentBoardSize=+e.gameSettings.currentBoardSize;const t=document.querySelectorAll("#boardsize > option");for(let e=0;e<t.length;e++)t[e].selected=!1,+t[e].value===i.gameSettings.currentBoardSize&&(t[e].selected=!0);X(),O(),P(),c()}},w=e=>{const t=document.querySelectorAll(".btnRecords"),a=e.target.dataset.bSize,n=document.querySelector("#restitle"),o=document.querySelector(".record_table");o.innerHTML="";for(let e=0;e<t.length;e++)t[e].classList.remove("btnRecords_active"),t[e].dataset.bSize===a&&(t[e].classList.add("btnRecords_active"),n.innerHTML=`Best of the best ${a} X ${a}`);o.append(...b(a))},F=()=>{if(i.gameSettings.sound){const e=new Audio(h);e.volume=.5,e.play()}const e=document.querySelector(".popup_overlay"),t=document.querySelector(".popup_card"),a=document.createElement("div"),n=i.gameSettings.currentBoardSize,o=i.gameSettings.boardSizes;a.innerHTML=`<h3 id='restitle'>Best of the best ${n} X ${n}</h3>`;const r=document.createElement("div");r.classList.add("close_popup"),r.addEventListener("click",(()=>{e.classList.remove("popup_overlay_active"),C()})),a.append(r);const s=document.createElement("div");s.classList.add("btn_rec_wrapper");for(let e=0;e<o.length;e++){const t=document.createElement("button");t.innerText=`${o[e]} X ${o[e]}`,t.addEventListener("click",w),t.classList.add("btnRecords"),t.dataset.bSize=o[e],o[e]===+n&&t.classList.add("btnRecords_active"),s.append(t)}a.append(s);const m=document.createElement("div");m.classList.add("record_table");const l=b(n);m.append(...l),t.innerHTML="",t.append(a),t.append(m),e.classList.add("popup_overlay_active"),i.gameTimerId&&(clearInterval(i.gameTimerId),i.gameTimerId=null)},G=e=>{i.gameSettings.sound?(i.gameSettings.sound=!1,e.target.innerText="Sound OFF",e.target.classList.add("btn_sound_disable"),S()):(i.gameSettings.sound=!0,e.target.innerText="Sound ON",e.target.classList.remove("btn_sound_disable"),S())},H=e=>{i.cheatMode=e.target.checked},R=(e,t,a)=>{const n=document.createElement("span");return n.classList.add(...a),n.innerText=`${e}: ${t}`,n},X=()=>{const e=i.gameSettings.currentBoardSize,t=i.gameArray,a=document.getElementById("board"),n=[];a.className="",a.classList.add("board",`board_${e}_${e}`);for(let a=0;a<t.length;a++)for(let o=0;o<t[a].length;o++){const r=a*e+o,s=document.createElement("div");s.id=`cell_${r}`,s.classList.add("cell"),0===t[a][o]&&(s.classList.add("dropable"),s.setAttribute("id","dropable")),s.dataset.r=a,s.dataset.c=o,s.innerText=t[a][o],n.push(s)}a.innerHTML="",a.append(...n)},O=()=>{document.querySelector(".moves_count").innerText=`Moves: ${i.movesCount}`},P=()=>{document.querySelector(".play_time").innerText=`Time: ${t(i.playTime)}`};(()=>{if(i.ls_available=(()=>{try{const e="test";return localStorage.setItem(e,JSON.stringify(e)),localStorage.removeItem(e),!0}catch(e){return console.log(e),!1}})(),i.ls_available){const e=l(i.ls_key_settings);e&&(i.gameSettings.sound=e.sound,i.gameSettings.currentBoardSize=+e.currentBoardSize)}(()=>{const e=l(i.ls_key_records);e&&(i.records=e)})(),E(),(()=>{const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("popup_overlay"),t.setAttribute("id","popup_overlay");const a=document.createElement("div");a.classList.add("close_popup");const n=document.createElement("div");return n.classList.add("popup_card"),t.addEventListener("click",(e=>{"popup_overlay"===e.target.id&&(e.stopPropagation(),e.preventDefault(),t.classList.remove("popup_overlay_active"),i.inGame&&C())})),a.addEventListener("click",(()=>{t.classList.remove("popup_overlay_active"),i.inGame&&C()})),n.append(a),t.append(n),e.append(t),document.body.innerHTML="",document.body.append(e),e})().append((()=>{const e=i.gameSettings.boardSizes,t=document.createElement("div");t.classList.add("buttons");const a=document.createElement("select");for(let t=0;t<e.length;t++){const n=document.createElement("option");n.setAttribute("value",e[t]),e[t]===i.gameSettings.currentBoardSize&&(n.selected=!0),n.innerText=`${e[t]} X ${e[t]}`,a.append(n)}a.setAttribute("id","boardsize"),a.addEventListener("change",x),t.append(a);const n=document.createElement("button"),o=document.createElement("button"),r=document.createElement("button"),s=document.createElement("button"),m=document.createElement("button");return n.innerText="Shuffle and start",o.innerText=i.gameSettings.sound?"Sound ON":"Sound OFF",r.innerText="Save",s.innerText="Load",m.innerText="Results",i.gameSettings.sound||o.classList.add("btn_sound_disable"),n.addEventListener("click",k),o.addEventListener("click",G),r.addEventListener("click",D),s.addEventListener("click",M),m.addEventListener("click",F),t.append(n,o,r,s,m),t})(),(()=>{const e=document.createElement("div");e.classList.add("stats");const t=R("Moves",0,["moves_count"]),a=R("Time","00:00",["play_time"]);return e.append(t,a),e})(),(()=>{const e=document.createElement("div");return e.classList.add("board"),e.setAttribute("id","board"),e.addEventListener("mousedown",I),e.addEventListener("mouseup",$),e})(),(()=>{const e=document.createElement("label");e.setAttribute("for","cheat"),e.innerText="cheat mode",e.classList.add("cheat_mode"),e.title="Включи этот режим, чтобы уменшить количество перемешиваний. И нажми 'shuffle and start!'";const t=document.createElement("input");return t.type="checkbox",t.id="cheat",t.checked=i.cheatMode,t.addEventListener("change",H),e.append(t),e})())})(),X()})();
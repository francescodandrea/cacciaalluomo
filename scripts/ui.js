if(localStorage.getItem("HG_tc")){
    logged(localStorage.getItem("HG_tc"));
}

function logged(logincode){
    sectiontoggle('game');
    teamcode=logincode;
    getmyplayers(logincode);
}
function logout(){
    localStorage.clear("HG_tc");
    location.reload();
}

function openhints(){
    document.querySelector("#hint").className="";
    let type=document.querySelector("#hint").dataset.type;
    switch (type) {
        case "hint":
            if(!document.querySelector("#hintcontainer").classList.contains("open")) hintmenu(1);
            document.querySelector("#hintcontainer").classList.toggle("open");
            break;
        case "chall":
            if(!document.querySelector("#hintcontainer").classList.contains("open")) hintmenu(2);
            document.querySelector("#hintcontainer").classList.toggle("open");
            break;
        case "news":
            opennews();
            break;
    }
}
function hintmenu(x){
    document.querySelectorAll("#hintmenu > p").forEach(element => {
        element.className="";
    });
    document.querySelector("#hintmenu > p:nth-child("+(x)+")").className="cur";
    
    switch (x) {
        case 1:
            hintcontents("hint");
            document.querySelector("#hintscreen").className="hint";
            break;
        case 2:
            hintcontents("chall");
            document.querySelector("#hintscreen").className="chall";
            break;
        case 3:
            var container = document.querySelector("#hintcontent");
            container.innerHTML='<div class="br">Emotes</div>';
            container.innerHTML+='<div class="emote" onclick="emote(0)"><i class="bi bi-cloud-arrow-up-fill"></i></div>';
            container.innerHTML+='<div class="emote" onclick="emote(1)"><i class="bi bi-bullseye"></i></div>';
            container.innerHTML+='<div class="emote" onclick="emote(2)"><i class="bi bi-emoji-sunglasses-fill"></i></div>';
            container.innerHTML+='<div class="br">Contattaci</div>';
            container.innerHTML+='<a href="https://www.instagram.com/oratoriosampe/"><div class="emote"><i class="bi bi-telephone"></i></div></a>';
            container.innerHTML+='<div class="br">Queste funzioni potrebbero servirti più tardi.</div>';
            container.innerHTML+='<div id="key" class="emote" onclick="sectiontoggle('+"'QR'"+')"><i class="bi bi-key"></i></div>';
            container.innerHTML+='<div class="emote" onclick="logout()"><i class="bi bi-box-arrow-right"></i></div>';
            document.querySelector("#hintscreen").className="";
            break;
    }
}

function opennews(){
    if(!document.querySelector("#newscontainer").classList.contains("open")) hintcontents("news");
    document.querySelector("#newscontainer").classList.toggle("open");
    document.querySelector("#broadcast").className="";
}

function controlthis(thisv){
    if(!thisv.paused){//is playing
        thisv.pause();
        thisv.currentTime=0;
    }else{
        thisv.play();
    }
}

var rulcount;
function openrules(){
    if(document.querySelector("#book").classList.contains("label")){
        clearTimeout(rulcount);
        sectiontoggle('rules');
            document.querySelector("#book").className="";
            document.querySelector("#book > i").className="bi bi-book";
    } else{
        document.querySelector("#book").className="label";
        document.querySelector("#book > i").className="bi bi-book-fill";
        rulcount = setTimeout(() => {
            document.querySelector("#book").className="";
            document.querySelector("#book > i").className="bi bi-book";
        }, 3000);
    }
}

function sectiontoggle(name){
    if(document.querySelector("#"+name).classList.contains('on')){
        document.querySelector("#"+name).classList.toggle('onopacity');
        setTimeout(() => {
            document.querySelector("#"+name).classList.toggle('on');
        }, 300);
    } else {
        document.querySelector("#"+name).classList.toggle('on');
        setTimeout(() => {
            document.querySelector("#"+name).classList.toggle('onopacity');
        }, 1);
    }
}

var hintsound = new Audio("media/clearly-602.mp3");
var newssound = new Audio("media/when-604.mp3");


function hintnotify(){
    hintsound.play();
    document.querySelector("#hint").className="pulse";
    try{
        window.navigator.vibrate(100);
    }
    catch {}
}
function newsnotify(){
    newssound.play();
    document.querySelector("#broadcast").className="read";
    if (window.navigator.vibrateanVibrate) window.navigator.vibrate(300);
}

function emote(x){
    let audio;
    switch (x) {
        case 0:
            audio = new Audio("media/emotes/credulous-512.mp3");
            break;
        case 1:
            audio = new Audio("media/emotes/sonar-259.mp3");
            break;
        case 2:
            audio = new Audio("media/emotes/avtr_common_boy_yeah_01.wav.mp3");
            break;
    }
    audio.play();
}

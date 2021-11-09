function openhints(){
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
            
            document.querySelector("#hintscreen").className="";
            break;
    }
}

function opennews(){
    if(!document.querySelector("#newscontainer").classList.contains("open")) hintcontents("news");
    document.querySelector("#newscontainer").classList.toggle("open");
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
function openhints(){
    document.querySelector("#hintcontainer").classList.toggle("open");
    document.querySelector("#hintmenu > p:nth-child(1)").className="cur";
    hintmenu(0);
}

function hintmenu(x){
    document.querySelectorAll("#hintmenu > p").forEach(element => {
        element.className="";
    });
    document.querySelector("#hintmenu > p:nth-child("+(x+1)+")").className="cur";
    
    switch (x) {
        case 0:
            hintcontents("hunted");
            break;
        case 1:
            hintcontents("hint");
            break;
        case 2:
            hintcontents("chall");
            break;
        case 3:
            
            break;
    }
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
        rules();
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
function rules(){
    console.log("rules");
}
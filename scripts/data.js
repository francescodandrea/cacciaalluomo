var hintconnection = false;
var hintcon_engine;

var hintdata;
hintsstartup();
hintengine(1);

function hintengine(x){
    if(x){
        hintcon_engine = setInterval(() => {
            gethints();
        }, 500);
        hintconnection=true;
    } else {
        clearInterval(hintcon_engine);
        hintconnection=false;
    }
}

function gethints(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var result=JSON.parse(this.responseText).reverse();
                console.log("hint upd");
                hintdata=result;
                hintscheckupd();
        }
    });
    xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZv7-NkU8RRHKXj3pwlGlLva4Wh4nVuO9fHekaHiWMJGsrUXJ_-7HoZfoSCUUSXY2GvQ/exec?richiesta=hints");
    xhr.send();
}

function hintscheckupd(){
    if(localStorage.getItem("HG_h")!=JSON.stringify(hintdata)){
        hintsupd();
        console.log(hintdata);
        localStorage.setItem("HG_h",JSON.stringify(hintdata));
    }
}

function hintsstartup(){
    if(localStorage.getItem("HG_h")){
        hintdata=JSON.parse(localStorage.getItem("HG_h"));
        console.log(hintdata);
        hintsupd();
    }
    gethints();
}


var uservis=[0];
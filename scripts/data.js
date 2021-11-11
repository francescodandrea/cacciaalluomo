var hintconnection = false;
var hintcon_engine;

var uservis=[0];
var teamcode=85;

//ottieni codici salvati
if(localStorage.getItem("HG_code")){
    uservis=JSON.parse(localStorage.getItem("HG_code"));
}

//ottieni codici salvati
if(localStorage.getItem("HG_tcode")){
    teamcode=JSON.parse(localStorage.getItem("HG_tcode"));
}

var hintdata;
hintsstartup();
hintengine(1);

//checkcode("4565");
getmyplayers("4565");


function hintengine(x){
    if(x){
        hintcon_engine = setInterval(() => {
            gethints();
        }, 5000);
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
    if(localStorage.getItem("HG_h")){
    if(localStorage.getItem("HG_h").length!=JSON.stringify(hintdata).length){

        localStorage.setItem("HG_h", JSON.stringify(hintdata));

        hintsupd();
        
        //update panel view
        if(document.querySelector("#hintcontainer").classList.contains("open")){
            let elem=document.querySelector("#hintmenu > p.cur");
                if (typeof elem.onclick == "function") { //check
                    elem.onclick.apply(elem); //aggiorna contenuto
                }
                document.querySelector("#hintcontent").scrollTo(0,0); //scroll in alto
        }

        console.log(hintdata);

        //check in detail
        let newscount = 0;
        hintdata.forEach(element => {
            if(element.type=="news"){
                newscount+=element.title.length;
                newscount+=element.desc.length;
            }
        });

        if(localStorage.getItem("NEWSc")){
            if(localStorage.getItem("NEWSc")!=newscount){
                //news aggiornate
                newsnotify();
            }else{
            //indizi aggiornati
            hintnotify();
            }
        }
        localStorage.setItem("NEWSc", newscount);


    }
    } else {
        localStorage.setItem("HG_h", JSON.stringify(hintdata));
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

function getplayers(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var result=JSON.parse(this.responseText).reverse();
                console.log("got players");
                console.log(result);
                teamsupd(result);
        }
    });
    xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZv7-NkU8RRHKXj3pwlGlLva4Wh4nVuO9fHekaHiWMJGsrUXJ_-7HoZfoSCUUSXY2GvQ/exec?richiesta=players");
    xhr.send();
}

function getmyplayers(code){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var result=JSON.parse(this.responseText).reverse();
                console.log("got players");
                console.log(result);
                document.querySelector("#game > div.header > h4").innerHTML=result[0].teamnick;
        }
    });
    xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZv7-NkU8RRHKXj3pwlGlLva4Wh4nVuO9fHekaHiWMJGsrUXJ_-7HoZfoSCUUSXY2GvQ/exec?richiesta=players&code="+code);
    xhr.send();
}

function checkcode(code){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var result=JSON.parse(this.responseText).reverse();
                console.log("code checked");
                console.log(result[0].check);      
        }
    });
    xhr.open("GET", "https://script.google.com/macros/s/AKfycbxZv7-NkU8RRHKXj3pwlGlLva4Wh4nVuO9fHekaHiWMJGsrUXJ_-7HoZfoSCUUSXY2GvQ/exec?richiesta=codecheck&code="+code);
    xhr.send();
}


//time
var countDownDate = new Date("Nov 20, 2021 22:00:00").getTime();
setInterval(() => {
    let time="";

      var now = new Date().getTime();
      var distance = countDownDate - now;
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      time = hours + ":"
      + minutes + ":" + seconds;
      
      if (distance < 0) {
        time = "TEMPO SCADUTO";
      }
    document.querySelector("#time > h3").innerHTML=time;
}, 1000);
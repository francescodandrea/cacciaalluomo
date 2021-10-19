function hintsupd(){
    let lasthunt;
    hintdata.forEach(element => {
        if(lasthunt==undefined && element.type=='hunted'){
            lasthunt=element; return false;
        }
    });
    sessionStorage.setItem("lasthunt",JSON.stringify(lasthunt));
    let lasthint;
    hintdata.forEach(element => {
        if(lasthint==undefined && element.type!='hunted'){
            lasthint=element; return false;
        }
    });
    sessionStorage.setItem("lasthint",JSON.stringify(lasthint));

    //hunted card
    document.querySelector("#hunted > div > h3").innerHTML=lasthunt.title;
    document.querySelector("#hunted > div > h4").innerHTML=lasthunt.desc;
    document.querySelector("#hunted > img").src=lasthunt.img;
    //hint card
    document.querySelector("#hint > div > h3").innerHTML=lasthint.title;
    let icon="";
    switch (lasthint.type) {
        case 'hint': icon="bi bi-search"; break;
        case 'chall': icon="bi bi-puzzle"; break;
        case 'news': icon="bi bi-broadcast-pin"; break;
    }
    document.querySelector("#hint > i").className=icon;
}

function hintcontents(x){
    var container = document.querySelector("#hintcontent");
    container.innerHTML="";
        hintdata.forEach(element => {
            if(element.type==x && uservis.includes(element.vis)){
                let div = document.createElement("div"),
                    h2 = document.createElement("h2"),
                    img = document.createElement("img"),
                    vid = document.createElement("video"),
                    h4 = document.createElement("h4");
                
                div.className="hintrow";
                
                h2.innerHTML=element.title;
                if(element.img) img.src=element.img;

                if(element.hasOwnProperty("vid")){
                    if(element.vid[1]=='t')
                        vid.src=element.vid;
                     else
                        vid.src="media/vid/"+element.vid;
                    vid.setAttribute("type","video/mp4");
                    vid.setAttribute("onclick", "controlthis(this)");
                }
                
                h4.innerHTML=element.desc;

                div.appendChild(h2);
                if(element.img) div.appendChild(img);
                if(element.vid) div.appendChild(vid);
                div.appendChild(h4);

                container.appendChild(div);
            }
        });
    //<div class="hintrow"><h2>HINT TTLE</h2><h4>HINT HINTDESC</h4></div>
}
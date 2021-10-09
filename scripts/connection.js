function hintsupd(){
    
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
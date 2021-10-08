function openhints(){
    document.querySelector("#hintcontainer").classList.toggle("open");
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
function scrollDocument(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        document.getElementById("scrollText").style.fontSize="200px";
        document.body.style.background="red";
}else{
    document.getElementById("scrollText").style.fontSize="100px";
    document.body.style.background="blue";

}
}

window.onscroll=function(){
    scrollDocument();
}
var modDate= document.lastModified;
var year= new Date();
document.getElementById("lastMod").innerHTML= modDate;
document.getElementById("copyYear").innerHTML= year.getFullYear();

function wait(){
    alert ("Too Soon! Wait another Week");
}
function wait2(){
    alert ("Way to SOON! Wait two weeks!")
}
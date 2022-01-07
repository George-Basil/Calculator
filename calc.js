var h1=x;

function clik(x)
{
    document.getElementById("displaybox").value=document.getElementById("displaybox").value+x;

}
function clr(){
    document.getElementById("displaybox").value=null;
}
function equal(){
    var text=document.getElementById("displaybox").value
    var input=text;
    var j=eval(text)
    document.getElementById("displaybox").value=document.getElementById("displaybox").value + "=" + j
    console.log(equal)

}
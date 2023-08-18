function btnclick(val)
{
 document.getElementById("input").value+=val
}
function clearr(){
    document.getElementById("input").value=""
}
function equalclick(val){
   
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value=result
}

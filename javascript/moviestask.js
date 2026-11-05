var movies=[];
function myfun(){
    var val1=document.getElementById("val1").value;
    var val2=document.getElementById("val2").value;
    console.log(val1,val2);
    var obj={
        name:val1,
        rating:val2
    };
    var result=movies.slice(0);

    
    movies.push(obj);
    console.log(result);

}
function searchanddisplay(){
    let query=documnet.getElementById("val1").value;
    for(let i=0;i<objArr.length;i++){
        if(query==objArr[i].name){
            
        }
    }
}
function toggleButtons(){
    if(document.getElementById("addNew").style.display=="block"){
        document.getElementById("addnew").style.display="none";
        document.getElementById("modifythis").style.display="block";

    }
    if(document.getElementById("addNew").style.display=="none"){
        document.getElementById("addnew").style.display="block";
        document.getElementById("modifythis").style.display="none";

    }
}

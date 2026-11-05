const palindorme=()=>{
    let name=document.getElementById("name").value;
    let namesplit=name.split('');
    let reverse=namesplit.reverse();
    let join=reverse.join('');
    if(name==join){
        console.log("it is a palindrome");
    }
    else{
        console.log("not a plaindrome");
    }
}
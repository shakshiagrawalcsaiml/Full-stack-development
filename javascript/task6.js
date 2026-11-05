const factorial=()=>{
    let num=document.getElementById("num").value;
let fact=1;
while(num>1){
    fact=num*fact;
    num--;
}
console.log(fact);
}

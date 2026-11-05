function fizzbuzz(){
    let num=document.getElementById("num").value;
    if(num%3==0){
        console.log("Fizz");
    }
    else if(num%5==0){
        console.log("Buzz");
    }
    else if(num%3==0&&num%5==0){
        console.log("FuzzBuzz");
    }
    else{
        console.log("not anumber");
    }
}
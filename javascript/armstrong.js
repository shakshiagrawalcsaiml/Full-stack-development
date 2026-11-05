function isarmstrong(n){
let o=n;
let sum=0;
while(n>0){
let digit=n%10;
sum=sum+(digit*digit*digit);
n=Math.floor(n/10);
}
if(sum==o){
return true;}
else{
return false;}}
function checkandshow(){
let val1=documnet.getElementById("val1").value;
if(isarmstrong(val1)){
console.log("it is a armstrong");
}
else{
console.log("not a armstrong");}
}
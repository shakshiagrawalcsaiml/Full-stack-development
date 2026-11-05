// let count=0;
// setTimeout(() => {
//     count++;
//     console.log("hello");
// }, 1000);
var  totalsec=15*60;
setInterval(()=>{
    totalsec-=1;
    
    updateTimer();
}
    ,1000
);
function updateTimer(){
    let sec=totalsec%60;
    let min=Number.parseInt(totalsec/60);
document.getElementById("min").innerHTML=min;
document.getElementById("sec").innerHTML=sec;
};
updateTimer();

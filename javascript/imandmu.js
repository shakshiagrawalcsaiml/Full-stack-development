
// let arr=[1,2,3,4,5];
// // let brr=arr;
// // brr.push(6);
// // console.log(arr);//1,2,3,4,5,6
// // console.log(brr);//1,2,3,4,5,6
// //spread operator
// let brr1=[... arr];
// brr1.push(6);//1,2,3,4,5,6
// console.log("this is the spread brr1=",brr1);
// console.log("this is the spread arr=",arr);
// let o={name:"ABCD",age:"123"}
// let obj=o;
// obj.name="BCDE";
// console.log(o);
// let [a,b]=[1,2];
// //rest operator
// let[a3,b3,...c3]=[1,2,3,4,5,6,7];
// console.log(a3);
// console.log(b3);
// console.log(c3);
// function sum(...a4){let sum=0; for(v of a4){sum=sum+v;} return sum;}
// console.log(sum(1,2,3,4));
// const sum1=(...arr)=>{return arr.reduce((sum1,n)=>sum1+n,0); };
// console.log(sum1(1,2,3,4));
//default parameteres
function add(a=0,b=0){return a+b};
console.log(add(1));
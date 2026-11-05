let arr=[1,2,3,4,5];
console.log(arr);
//its return all the numberws 
// let narr=arr.map((n)=>{return n*n;});
// console.log(narr);
//we onlly use map when we want to apply some changes to all the elements of array.
let narr=arr.map((n)=>{return n%2==0;})
console.log(narr);
let narr1=arr.filter(n=> n>3);
console.log(narr1);
let narr2=arr.find(n=> n>1);
console.log(narr2);
//in find  only the first function  returns 
let narr3=arr.reduce((sum,n)=> sum+=n,0);
console.log(narr3);
//0 is the intial value where we can keep any value and in reduce  functions we reduce the large the array in to small one elment 
//map function is immutable it do not change the original array 

// let arr=[1,2,3,4,5];
// console.log(arr);//[1,2,3,4,5]
// arr.push(6);
// console.log(arr);//[1,2,3,4,5,6]
// arr.unshift(0);
// console.log(arr);//[0,1,2,3,4,5,6]
// arr.pop();
// console.log(arr);//[0,1,2,3,4,5]
// arr.shift();
// console.log(arr);//[1,2,3,4,5]
// console.log(arr.join(":")); 

// let price =100,quantity;
// let total=price*Number.parseInt(quantity??1);
// console.log(total);
let obj={
    name:"abhay",
    location:{
        city:"mathura"
    }
};
// console.log(obj.location.state??="UP");
// console.log(obj);
console.log(obj.location??=state);
console.log(obj);
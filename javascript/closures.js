// function outer(){//fucton ke andr function likh do usse closures bolte hai 
//     let a=5;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }outer();
// function managecounter(){
//     let c=0;
//     function increment(){
//         c++;
//         console.log(c);
//   }
// return{increment};
// }
// const a=managecounter();
// a.increment();
// a.increment();
// a.increment();
//currying :-Instead of passing all arguments at once, we pass them one by one.
// function a(x){
//     return function b(y){
//         return function c(z){
//             return x+y+z;
//         }
//     }
// }
// console.log(a(1)(2)(3));
//memoization:-always do on pure function like which gives the same input and same output ....
// Stores previous function results to avoid repeated calculations.
// function memoize(fn){
//     const cache={};
//     return function(x,y){
//         const key=`${x},${y}`;
//         if(cache[key]){
//             console.log('from cache');
//             return cache[key];
//         }
//         const res=fn(x,y);
//         cache[key]=res;
//         return res;
//     }
// }

// const add=memoize(function(x,y){
//     return x+y;
// });
// console.log(add(1,2));
// console.log(add(1,2));
//factorial question 
// function memofactorial(){
//     const cache={};
//     return function factorial(fn){
//         if(fn in cache){
//             console.log("fetching from memo");
//             return cache[fn];
//         }
//         if(fn==0){
//             return 1;
//         }
//         console.log("calculatig...");
//         cache[fn]=fn*factorial(fn-1);
//         return cache[fn];

//     };
// }
// let fact = memofactorial();

// console.log(fact(5));
// console.log(fact(5));
// console.log(fact(4));
//fibonacci question
function memofibonacci(){
    const cache={};
    return function fibonacci(fn){
        if(fn in cache){
            console.log("fetching from cache....");
            return cache[fn];
        }
        if(fn<=1){
            return fn;   
        }
        console.log("calculating.....");
        cache[fn]=fibonacci(fn-1)+fibonacci(fn-2);
        return cache[fn];
    };
}
let fib=memofibonacci();
console.log(fib(3));
console.log(fib(3));
console.log(fib(4));
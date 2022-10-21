var returnedvalue = Math.max(2,3,4,5,6,7,8,9);
console.log(returnedvalue);

var myobj = {};

Object.assign(myobj,{a:1,b:2,c:3},{z:9,y:8,x:7});
console.log(myobj);

function sumone(a,b){
    return a/b;
}

let mya = [5,5];
// console.log(sumone(...mya));



function sumtwo(...args){
    let sum = 0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumtwo(2,3,4,5));
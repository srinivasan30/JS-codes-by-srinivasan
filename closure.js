function divide(x){
    return function(y){
        return x/y;
    }
}

var div = divide(30);
console.log(div(3));
console.log(divide(40)(4));
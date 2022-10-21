console.log(this);

var game = "cricket"


function sayname() {
    var name = "tim"
console.log(this);
}

sayname()
// this keyword will give the global context
// in browser it will give window objects and in node it will empty parenthesis
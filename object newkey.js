var user = function(fname,regno,mark1,mark2){
    this.fname=fname;
    this.regno = regno;
    this.total = mark1+mark2;
    this.getcoursecount = function(){
        console.log(`total marks is ${this.total}`);
    }

}

var srins = new user("Srinivasan",149,100,100)
console.log(srins);
srins.getcoursecount()

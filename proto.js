var user = function(fname,regno,mark1,mark2){
    this.fname=fname;
    this.regno = regno;
    this.total = mark1+mark2;
    this.getcoursecount = function(){
        console.log(`total marks is ${this.total}`);
    }

}
user.prototype.getfirstname = function(){
    console.log(`your firstname is : ${this.fname}`);
}

user.prototype.initial = "karthikeyan"

user.prototype.getinitial = function(){
    console.log(`your initial is : ${this.initial}`);
}

var srins = new user("Srinivasan",149,100,100)
// console.log(srins);
// srins.getfirstname();
srins.getinitial();

if (srins.hasOwnProperty("fname")){
    srins.getfirstname()
}



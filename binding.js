const srins = {
    fname : "srinivasan",
    lname : "super",
    reg : 149,
    role : "dba",
    coursecount : 3,
    getinfo : function(){
        console.log(`
        no of courses enrolled are ${this.coursecount}
        fname is ${this.fname}
        lname is ${this.lname}`);
    }

}
const dj = {
    fname : "rock",
    lname : "hitler",
    role : "admin",
};

srins.getinfo();
// dj.getinfo(); will result in error because no getinfo fn in dj
// here we are using a bind method to borrow a fn 

srins.getinfo.bind(dj)();

let fnbind = srins.getinfo.bind(dj);
fnbind();
// here we are using call method to borrow a fn to print without calling
var fncall = srins.getinfo.call(dj)


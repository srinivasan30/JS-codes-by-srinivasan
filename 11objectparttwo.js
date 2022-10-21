var user = {
    fname: "srinivasan",
    lname: "karthikeyan",
    role: "full stack dev",
    login: 44,
    iglogin: true,
    courselist:  [],
    buycourse: function (coursename) {
        this.courselist.push(coursename);
    },
    getcoursecount: function () {
        return `${this.fname} is enrolled to ${this.courselist.length} courses`

    },
    printings: function(){
        return `${this.fname}`
    },
};
var courselist = true
console.log(user.fname);
console.log(user.getcoursecount());
user.buycourse("reactjs")
user.buycourse("angular")
console.log(user.getcoursecount());
console.log(user.printings());


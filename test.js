// // const mystates = ["tamilnadu",
// // "kerala",
// // "maharashta",
// // 1947,
// // "karnataka"];

// // // for(let i = mystates.length; i>0; i--){
// // //     console.log(mystates[i]);
// // // }


// // // var sports = ["football"]
// // // var supercars = new Array ("buggati","dsfsdf","fsd","koenis");
// // // console.log(sports[0] + supercars[3]);

// // // var stud = {
// // //     name: "adam",
// // //     age: 20,
// // // }
// // // console.log(Array.from(stud.name));

// // let i = 0
// // while(i<mystates.length){
// //     i++;
// //     console.log(mystates[i]);
// // }


// var num = 100;
// var hello = {
//     num:90,
//     saynum: function (){
//         console.log(num);
//         console.log(this.num);

//     }
// }
// console.log(num);
// console.log(this.num);

// hello.saynum();



var studentdet = {
    name: "srinivasan",
    age: 18,
    dept: "cse",
    email: "abc@gmail.com",
    phnnumb: 1234567891,
    subjects:  [],
    addsubs: function (subname) {
        this.subjects.push(subname);
    },
    getsubname: function () {
        return `${this.name} is enrolled to ${this.subjects.length} subjects`

    },
};
console.log(studentdet.getsubname());
studentdet.addsubs("chemistry");
studentdet.addsubs("physics");
console.log(studentdet.getsubname());
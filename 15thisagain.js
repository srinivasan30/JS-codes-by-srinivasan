console.log(this);

var user = {
    firstname: "hitesh",
    coursecount: 4,
    getcoursecount: function () {
        console.log("LINE 7",this);
        function sayhello () {
            console.log("hello");
            console.log("LINE 10",this);

        }
        sayhello();

    }
};

user.getcoursecount();

// for all regular function calls this points to window object

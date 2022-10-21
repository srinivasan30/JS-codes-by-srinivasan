var loggedin = true
var email = false
var cardinfo = true;

if (loggedin) {
    console.log("loggin success");
    if (email) {
        console.log("email is verified");
        if (cardinfo) {
            console.log("you can make the payment");
            
        }
        
    }
    
}

if (loggedin && email && cardinfo) {
    console.log("allow the user to make the payment");
}
else {
    console.log("you can not make the payment");
}
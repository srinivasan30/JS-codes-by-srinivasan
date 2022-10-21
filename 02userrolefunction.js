// var getuserrole = function (name,role)
// functions can also written in the above mentioned way
function getuserrole(name,role){ 
    switch (role) {
        case "admin":
            return `${name} gets access to all content`
            break;
        case "subadmin":
            return `${name} gets access to partial content`
            break;
        case "testprep":
            return `${name} gets access to create test`
            break;
        case "user":
            return `${name} gets access to watch content`
            break;
        default:
            return `${name}you are a trial user`
            break;
    }
}
console.log(getuserrole("arun","subadmin"))

var getrole = getuserrole("srinivasan","admin")
console.log(getrole);
var user = "subadmin"

switch (user) {
    case "admin":
        console.log("gets full access")
        break;
    case "subadmin":
        console.log("gets partial access")
        break;
    case "user":
        console.log("gets access to watch content")
        break;

    default:
        console.log("you are a trial user");
        break;
}
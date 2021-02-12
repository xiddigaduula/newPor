var database = [
{
    username: "khalid",
    password: "xiddig"

},
{
    username: "khalidka",
    password: "xiddiga"
},
{
    username: "xiddig",
    password: "khalid"
}

];
var newsFeed=[{
    username: "wali",
    timeline: "excelent!"
},
{
    username: "moha",
    timeline: "good! lecture"
}

];
var usernamePrompt = prompt("what's your username?");
var passsWordPrompt = prompt("what's your password?");

function isUserValid(user, pass){
    for(var i=0; i<database.length; i++){
        if (database[i].username===user && database[i].password===pass)
        {
            return true;}
        }return false;
    }
    
    function signIn(user,pass){
    if(isUserValid(user,pass))
    {console.log(newsFeed);
    }else {
        alert("sorry, wrong credentail");
    }

}
signIn(usernamePrompt, passsWordPrompt);
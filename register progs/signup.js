function signup()
{
    var username =  document.getElementById("signup-name").value;
    var email =  document.getElementById("signup-email").value;
    var password =  document.getElementById("signup-password").value;
    if(username == "admin" && password =="user@123" && email=="admin@gmail.com") {
        alert( "Signed up successfully!" );
        window.open("dashboard.html");
        return false;
    } else {
        alert( "Username or password is incorrect" );
    }
}

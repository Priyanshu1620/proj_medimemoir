function validate()
{
    var username =  document.getElementById("login-username").value;
    var password =  document.getElementById("login-password").value;
    if(username == "admin" && password =="user") {
        alert( "Signed up successfully!" );
        window.open("dashboard.html");
    } else {
        alert( "Username or password is incorrect" );
    }
}
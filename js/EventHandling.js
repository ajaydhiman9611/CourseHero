function LoginClicked(){
    var username = document.getElementById('email-address-field-new').value;
    var password = document.getElementById('password-field-new').value;
    if(username === "admin" && password === "admin")
    {   
        window.location.href = "dashboard_new.html";
    }
    else alert("Credentials aren't correct!!");
}
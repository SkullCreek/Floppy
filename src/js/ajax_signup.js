

const user_register = document.getElementById("register");
user_register.onclick = () => {
    const username = document.getElementById("sign_username");
    const email = document.getElementById("sign_email");
    const password = document.getElementById("sign_password");
    if(username.value.length != 0){
        if(email.value.length != 0){
            if(password.value.length != 0 && password.value.length > 5){
                alert("success");
            }
            else{
                document.getElementsByClassName("icon")[2].style.color = "#B10404";
                document.getElementById("showpassword").style.color = "#B10404";
                password.style.border = "2px solid #B10404";
                document.getElementById("password_error").style.color = "#B10404";
                document.getElementById("password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Minimum 6 characters are required";
            }
        }
        else{
            document.getElementsByClassName("icon")[1].style.color = "#B10404";
            email.style.border = "2px solid #B10404";
            document.getElementById("email_error").style.color = "#B10404";
            document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> User Already exists";
        }
    }
    else{
        username.style.border = "2px solid #B10404";
        document.getElementsByClassName("icon")[0].style.color = "#B10404";
        document.getElementById("username_error").style.color = "#B10404";
        document.getElementById("username_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Username field is empty";
    }
}
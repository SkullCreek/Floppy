const user_register = document.getElementById("register");
user_register.onclick = (e) => {
    user_register.value = "";
    document.getElementById("loading").style.display = "block";
    user_register.style.backgroundColor = "#8c8c8c";
    user_register.setAttribute("disabled","disabled");
    const username = document.getElementById("sign_username");
    const email = document.getElementById("sign_email");
    const password = document.getElementById("sign_password");
    if(username.value.length != 0){
        if(email.value.length != 0){
            if(password.value.length != 0 && password.value.length > 5){
                const request = new XMLHttpRequest();
                request.open("POST","src/backend/database/signup.php",true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(`username=${btoa(username.value)}&email=${btoa(email.value)}&password=${btoa(password.value)}`);
                request.onreadystatechange = () => {
                    if(request.readyState == 4 && request.status == 200){
                        user_register.value = "Register";
                        document.getElementById("loading").style.display = "none";
                        user_register.style.backgroundColor = "#9733EE";
                        user_register.removeAttribute("disabled");
                        if(request.response.trim() == "sending success"){
                            // username.value = "";
                            // email.value = "";
                            // password.value = "";
                            // username.style.border = "border: 2px solid #BABABA;";
                            // document.getElementsByClassName("icon")[0].style.color = "#9C9C9C";
                            // document.getElementById("username_error").innerHTML = ""; 
                            // email.style.border = "border: 2px solid #BABABA;";
                            // document.getElementsByClassName("icon")[1].style.color = "#9C9C9C"; 
                            // document.getElementById("email_error").innerHTML = "";
                            // password.style.border = "border: 2px solid #BABABA;";
                            // document.getElementsByClassName("icon")[2].style.color = "#9C9C9C";
                            // document.getElementById("showpassword").style.color = "#9C9C9C";
                            // document.getElementById("password_error").innerHTML = "";  
                            let form = document.getElementById("form");
                            let form2 = document.getElementById("form2");
                            form.classList.remove("animate__zoomIn");
                            form.classList.add("animate__zoomOut");
                            setTimeout(()=>{
                                form.style.display = "none";
                                form2.style.display = "grid";
                                form2.classList.remove("animate__zoomOut");
                                form2.classList.add("animate__zoomIn");
                                let email_id_code = document.getElementById("email_id_code");
                                email_id_code.innerHTML = email.value;
                            },500);
                        }
                        else{
                            alert("Email not valid");
                        }
                    }
                }
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
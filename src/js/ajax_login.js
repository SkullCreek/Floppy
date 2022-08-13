const login_user = document.getElementById("loginbtn");
login_user.onclick= (e) => {
    e.preventDefault();
    let login_email_check = document.getElementById("login_email");
    let login_password_check = document.getElementById("login_password");
    let login_password_error = document.getElementById("login_password_error");
    let login_email_error = document.getElementById("login_email_error");
    if(login_email_check.value == ""){
        login_email_check.style.border = "2px solid #B10404";
        document.getElementsByClassName("icon2")[0].style.color = "#B10404";
        document.getElementById("login_email_error").style.color = "#B10404";
        document.getElementById("login_email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Email field is empty";
    }
    if(login_password_check.value == ""){
        document.getElementsByClassName("icon2")[1].style.color = "#B10404";
        document.getElementsByClassName("icon2")[2].style.color = "#B10404";
        login_password_check.style.border = "2px solid #B10404";
        document.getElementById("login_password_error").style.color = "#B10404";
        document.getElementById("login_password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Password Field is empty";
    }
    if(login_email_error.innerHTML.indexOf("Done") != -1 && login_password_error.innerHTML.indexOf("Done") != -1){
        login_user.value = "";
        document.getElementById("loading2").style.display = "block";
        login_user.style.backgroundColor = "#8c8c8c";
        login_user.setAttribute("disabled","disabled");
        const login_request = new XMLHttpRequest();
        login_request.open("POST","src/backend/database/login.php",true);
        login_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        login_request.send(`email=${btoa(login_email_check.value)}&password=${btoa(login_password_check.value)}`);
        login_request.onreadystatechange = () => {
            if(login_request.readyState == 4 && login_request.status == 200){
                login_user.value = "Login";
                document.getElementById("loading2").style.display = "none";
                login_user.style.backgroundColor = "#9733EE";
                login_user.removeAttribute("disabled");
                if(login_request.response.trim() == "email not valid"){
                    login_email_check.style.border = "2px solid #B10404";
                    document.getElementsByClassName("icon2")[0].style.color = "#B10404";
                    document.getElementById("login_email_error").style.color = "#B10404";
                    document.getElementById("login_email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Wrong email address";
                }
                if(login_request.response.trim() == "password not valid"){
                    document.getElementsByClassName("icon2")[1].style.color = "#B10404";
                    document.getElementsByClassName("icon2")[2].style.color = "#B10404";
                    login_password_check.style.border = "2px solid #B10404";
                    document.getElementById("login_password_error").style.color = "#B10404";
                    document.getElementById("login_password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Wrong password, try again";
                }
                if(login_request.response.trim() == "login pending"){
                    let form4 = document.getElementById("form4");
                    let form5 = document.getElementById("form5");
                    form4.classList.remove("animate__zoomIn");
                    form4.classList.add("animate__zoomOut");
                    setTimeout(()=>{
                        form4.style.display = "none";
                        form5.style.display = "grid";
                        form5.classList.remove("animate__zoomOut");
                        form5.classList.add("animate__zoomIn");
                        let email_id_code2 = document.getElementById("email_id_code2");
                        email_id_code2.innerHTML = login_email_check.value;
                    },500);
                }
                if(login_request.response.trim() == "login success"){
                    window.location = "src/pages/profile.php";
                }
                else{
                    login_email_check.style.border = "2px solid #B10404";
                    document.getElementsByClassName("icon2")[0].style.color = "#B10404";
                    document.getElementById("login_email_error").style.color = "#B10404";
                    document.getElementById("login_email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Something went wrong";
                }
            }
        }
    }
}
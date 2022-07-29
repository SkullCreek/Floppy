const check_user = () => {
    const email = document.getElementById("sign_email");
    let loader = document.getElementById("loader");
    let register_button = document.getElementById("register");

    email.onblur = () => {
        if(email.value == ""){
            document.getElementsByClassName("icon")[1].style.color = "#B10404";
            email.style.border = "2px solid #B10404";
            document.getElementById("email_error").style.color = "#B10404";
            document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Required field is empty";
            register_button.setAttribute("disabled", "disabled");
        }
        else{
            if(email.value.indexOf("@") != -1 ){

                const httpreq = new XMLHttpRequest();
                httpreq.open("POST","src/backend/database/check_user.php",true);
                httpreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                httpreq.send(`email=${btoa(email.value)}`);
                httpreq.onprogress = () => {
                    loader.style.display="block";
                }
                httpreq.onreadystatechange = () => {
                    if(httpreq.readyState == 4 && httpreq.status == 200){
                        loader.style.display="none";
                        if(httpreq.response.trim()=="user found"){
                            document.getElementsByClassName("icon")[1].style.color = "#B10404";
                            email.style.border = "2px solid #B10404";
                            document.getElementById("email_error").style.color = "#B10404";
                            document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> User Already exists";
                            register_button.setAttribute("disabled", "disabled");
                        }
                        else{
                            document.getElementsByClassName("icon")[1].style.color = "#006931";
                            email.style.border = "2px solid #006931";
                            document.getElementById("email_error").style.color = "#006931";
                            document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>";
                            register_button.removeAttribute("disabled");
                        }
                    }
                }
            }
            else{
                document.getElementsByClassName("icon")[1].style.color = "#B10404";
                email.style.border = "2px solid #B10404";
                document.getElementById("email_error").style.color = "#B10404";
                document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> This is not an email address";
                register_button.setAttribute("disabled", "disabled");
            }
            
        } 
   
    }
}

check_user();
const check_user = () => {
    const email = document.getElementById("sign_email");
    let loader = document.getElementById("loader");
    let register_button = document.getElementById("register");
    email.onchange = () => {
        if(email.value != ""){
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
                        email.style.border = "2px solid #B10404";
                        document.getElementById("email_error").style.color = "#B10404";
                        document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> User Already Exists";
                        register_button.setAttribute("disabled", "disabled");
                        register_button.style.color = "#B10404";

                    }
                    else{
                        email.style.border = "2px solid #006931";
                        document.getElementById("email_error").style.color = "#006931";
                        document.getElementById("email_error").innerHTML = "<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>";
                        register_button.removeAttribute("disabled");
                        register_button.style.backgroundColor = "#9733EE";

                    }

                }
            }
        }
    }
}

check_user();
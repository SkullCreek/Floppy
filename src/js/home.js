const signup = () => {
    let sign_btn = document.getElementById("signbtn");
    let sign_btn2 = document.getElementById("signbtn2");
    let signup = document.getElementsByClassName("signup");
    let form = document.getElementById("form");
    sign_btn.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__zoomOut");
        form.classList.add("animate__zoomIn");
        return false;
    }
    sign_btn2.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__zoomOut");
        form.classList.add("animate__zoomIn");
        return false
    }
    signup[0].onclick = function(e){
        if(e.target.id == 'signup'){
            form.classList.remove("animate__zoomIn");
            form.classList.add("animate__zoomOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },400);     
        }
        return false;
    }
}
signup();


const login = () => {
    let log_btn = document.getElementById("logbtn");
    let login = document.getElementsByClassName("login");
    let form2 = document.getElementById("form2");
    log_btn.onclick = () =>{
        login[0].style.display = "grid";
        form2.classList.remove("animate__zoomOut");
        form2.classList.add("animate__zoomIn");
        return false;
    }
    login[0].onclick = function(e){
        if(e.target.id == 'login'){
            form2.classList.remove("animate__zoomIn");
            form2.classList.add("animate__zoomOut");
            setTimeout(function(){
                login[0].style.display = 'none';
            },400);
            return false;     
        }
    }
}
login();
const validation = () => {
    const username = document.getElementById("sign_username");
    const email = document.getElementById("sign_email");
    const password = document.getElementById("sign_password");
    const visibility = document.getElementById("showpassword");
    username.onfocus = () => {
        username.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon")[0].style.color = "#7d28c8";
        document.getElementById("username_error").innerHTML = "";   
    }

    username.onblur = () => {
        if(username.value.length == 0){
            username.style.border = "2px solid #B10404";
            document.getElementsByClassName("icon")[0].style.color = "#B10404";
            document.getElementById("username_error").style.color = "#B10404";
            document.getElementById("username_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Username field is empty";
        }
        else{
            username.style.border = "2px solid #006931";
            document.getElementsByClassName("icon")[0].style.color = "#006931";
            document.getElementById("username_error").style.color = "#006931";
            document.getElementById("username_error").innerHTML = "<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>";
        }
    }

    email.onfocus = () => {
        email.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon")[1].style.color = "#7d28c8"; 
        document.getElementById("email_error").innerHTML = "";   
    }
    password.onfocus = () => {
        password.style.border = "2px solid #7d28c8";
        document.getElementsByClassName("icon")[2].style.color = "#7d28c8";
        document.getElementById("showpassword").style.color = "#7d28c8";
        document.getElementById("password_error").innerHTML = "";
    }

    password.onblur = () => {
        
        if(password.value.length == 0) {
            document.getElementsByClassName("icon")[2].style.color = "#B10404";
            document.getElementById("showpassword").style.color = "#B10404";
            password.style.border = "2px solid #B10404";
            document.getElementById("password_error").style.color = "#B10404";
            document.getElementById("password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Password field is empty";
        }
        else{
            if(password.value.length <= 6 && password.value.length > 0) {
                document.getElementsByClassName("icon")[2].style.color = "#B10404";
                document.getElementById("showpassword").style.color = "#B10404";
                password.style.border = "2px solid #B10404";
                document.getElementById("password_error").style.color = "#B10404";
                document.getElementById("password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> Minimum 6 characters are required";
            }
            else{
                document.getElementsByClassName("icon")[2].style.color = "#006931";
                document.getElementById("showpassword").style.color = "#006931";
                password.style.border = "2px solid #006931";
                document.getElementById("password_error").style.color = "#006931";
                document.getElementById("password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>";
                document.getElementById("showpassword").style.color = "#006931";
            }
        }
        
    }

    visibility.onclick = () => {
        if(visibility.innerHTML == "visibility"){
            visibility.innerHTML = "visibility_off";
            password.type = "password";
        }
        else{
            visibility.innerHTML = "visibility";
            password.type = "text";
        }
    }

    document.getElementById("generate").onclick = () => {
        let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        let length = pattern.length;
        let pass="";
        for(let i=0;i<8;i++){
            var char = Math.floor(Math.random()* length + 1);
            pass += pattern.charAt(char);
        }
        document.getElementById("sign_password").value = pass;
        document.getElementsByClassName("icon")[2].style.color = "#006931";
        document.getElementById("showpassword").style.color = "#006931";
        password.style.border = "2px solid #006931";
        document.getElementById("password_error").style.color = "#006931";
        document.getElementById("password_error").innerHTML = "<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>";
        document.getElementById("showpassword").style.color = "#006931";
    }
    
}

validation();
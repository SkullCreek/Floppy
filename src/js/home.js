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
const otp = (x,y) => {
    var user = x.value.length;
    var length = x.getAttribute('maxlength');
    if(user == length)
    {
        document.getElementById(y).focus();
    }
}

let verify = document.getElementById("verify");
verify.onclick = () => {
    verify.innerHTML = "verifying...";
    let code = document.getElementsByClassName("code");
    let fullcode = "";
    for(let i=0;i<code.length;i++){
        fullcode = fullcode + code[i].value;
    }
    fullcode = btoa(fullcode);
    let email = btoa(document.getElementById("email_id_code").innerHTML);
    let request = new XMLHttpRequest();
    request.open("POST","src/backend/varification/ajax_activation.php",true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`code=${fullcode}&email=${email}`);
    request.onreadystatechange = () => {
        if(request.readyState==4 && request.status == 200){
            if(request.response.trim() == "activated"){
                alert("success");
                verify.innerHTML = "verified";
                document.getElementById("verify_error").style.color = "#006931";
                document.getElementById("verify_error").innerHTML = `<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>`;
                //code from here
            }
            else{
                document.getElementById("verify_error").style.color = "#B10404";
                document.getElementById("verify_error").innerHTML = `<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> ${request.response}`;
                verify.innerHTML = "verify";
            }
        }
    }
}
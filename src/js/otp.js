const otp = (x,y) => {
    var user = x.value.length;
    var length = x.getAttribute('maxlength');
    if(user == length)
    {
        document.getElementById(y).focus();
    }
}

// const validation = () => {
//     let a = document.getElementById("a");
//     let b = document.getElementById("b");
//     let c = document.getElementById("c");
//     let d = document.getElementById("d");
//     d.onblur = () => {
//         if(a!="" && b!="" && c!="" && d!=""){
//             document.getElementById("verify").removeAttribute("disabled");
//         }
//         else{
//             document.getElementById("verify").setAttribute("disabled","disabled");
//         }
//     }
// }
// validation();

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
                verify.innerHTML = "verified";
                document.getElementById("verify_error").style.color = "#006931";
                document.getElementById("verify_error").innerHTML = `<span class='material-symbols-outlined' style='color:#006931;font-size:18px'>Done</span>`;
                let form2 = document.getElementById("form2");
                let form3 = document.getElementById("form3");
                form2.classList.remove("animate__zoomIn");
                form2.classList.add("animate__zoomOut");
                setTimeout(()=>{
                    form2.style.display = "none";
                    form3.style.display = "grid";
                    form3.classList.remove("animate__zoomOut");
                    form3.classList.add("animate__zoomIn");
                    setTimeout(()=>{
                        document.location.reload(true);                    
                    },4000);
                },500);
            }
            else{
                document.getElementById("verify_error").style.color = "#B10404";
                document.getElementById("verify_error").innerHTML = `<span class='material-symbols-outlined' style='color:#B10404;font-size:18px'>warning</span> ${request.response}`;
                verify.innerHTML = "verify";
            }
        }
    }
}
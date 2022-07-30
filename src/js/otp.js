const otp = (x,y) => {
    var user = x.value.length;
    var length = x.getAttribute('maxlength');
    if(user == length)
    {
        document.getElementById(y).focus();
    }
}
addEventListener('DOMContentLoaded', () => {
    let image = document.getElementsByClassName("edit-icon");
    for(let i=0;i<image.length;i++){
        image[i].onclick = () => {
            path = image[i].getAttribute("data-location");
            let footer = image[i].parentElement;
            let pre = footer.getElementsByTagName("PRE")[0];
            pre.contentEditable = "true";
            pre.focus();
            image[i].style.display = "none";
            let save_icon = footer.getElementsByClassName("save-icon")[0];
            save_icon.style.display = "block";
            save_icon.onclick = () => {
                let image_name = pre.innerHTML;
                let httpreq = new XMLHttpRequest();
                httpreq.open("GET","pages_backend/rename.php?iname="+image_name+"&path="+path,true);
                httpreq.send();
                httpreq.onreadystatechange = () => {
                    if(httpreq.readyState == 4 && httpreq.status == 200){
                        alert(httpreq.responseText);
                    }
                }
            }
        }
    }
});
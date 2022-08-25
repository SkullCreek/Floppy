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
                        if(httpreq.responseText.trim() == "error"){
                            alert("Something went Wrong");
                        }
                        else if(httpreq.responseText.trim() == "File Already Exists"){
                            alert("File Already Exists")
                        }
                        else{
                            pre.contentEditable = "false";
                            save_icon.style.display = "none";
                            image[i].style.display = "block";
                            image[i].removeAttribute("data-location");
                            image[i].setAttribute("data-location",httpreq.responseText);
                        }
                    }
                }
            }
        }
    }
    
    const download = () => {
        const dwnld_btn = document.getElementsByClassName("download-icon");
        for(let i = 0; i < dwnld_btn.length;i++){
            dwnld_btn[i].onclick = () => {
                let location = dwnld_btn[i].getAttribute("data-location");
                const search = '~';
                const replaceWith = ' ';
                const actual_location = location.split(search).join(replaceWith);
                let image_name = actual_location.split("/");
                var a = document.createElement("A");
                a.href = actual_location.replace("../../../","../../");
                a.download = image_name[image_name.length-1];
                a.click();
            }
        }
        
    }

    download();

    const del = () => {
        const del_btn = document.getElementsByClassName("delete-icon");
        for(let i = 0; i < del_btn.length;i++){
            del_btn[i].onclick = () => {
                del_path = del_btn[i].getAttribute("data-location");
                let httpreq = new XMLHttpRequest();
                httpreq.open("GET","pages_backend/delete.php?path="+del_path,true);
                httpreq.send();
                httpreq.onreadystatechange = () => {
                    if(httpreq.readyState == 4 && httpreq.status == 200){
                        if(httpreq.responseText.trim() == "Delete Success"){
                            del_btn[i].parentElement.parentElement.style.display = "none";
                            history.go(0);
                        }
                    }
                }
            } 
        }
        
    }
    del();
    const magnify_image = () => {
        const image_btn = document.getElementsByClassName("stored-image");
        for(let i=0;i<image_btn.length;i++){
            image_btn[i].onclick = () => {
                let image_path = image_btn[i].getAttribute("data-location");
                const search2 = '~';
                const replaceWith2 = ' ';
                const actual_location2 = image_path.split(search2).join(replaceWith2);
                let actual_path = actual_location2.replace("../../../","../../");
                document.getElementsByClassName("magify")[0].style.display = "grid";
                document.getElementsByClassName("magify-image")[0].style.background = "url('"+ actual_path +"') center center no-repeat";
                document.getElementsByClassName("magify-image")[0].style.backgroundSize = "contain";
                document.getElementsByClassName("close-icon")[0].onclick = () => {
                    document.getElementsByClassName("magify")[0].style.display = "none";
                }
            }
        }
    }
    
    magnify_image();
});
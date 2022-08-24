const add_image = document.getElementById("add-image");
add_image.onclick = () => {
    let input = document.createElement("INPUT");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
        let file = input.files[0];
        let formData = new FormData();
        formData.append("data",file);
        fetch("pages_backend/upload_image.php",{
            method: "POST",
            body: formData,
        })
        .then((response) => response.text())
        .then((data) => {
            if(data.trim() == "success"){
                memory_status();
                history.go(0);
            }
            else{
                alert(data);
            }
        })
        .catch((error) => {
            alert(error);
        });
    }
}


const memory_status = () => {
    let httpreq = new XMLHttpRequest();
    httpreq.open("GET","pages_backend/update_memory.php",true);
    httpreq.send();
    httpreq.onreadystatechange = () => {
        if(httpreq.readyState == 4 && httpreq.status == 200){
            document.getElementById("storage-left").innerHTML = `${httpreq.responseText} MB / 10 MB`;
            const pctIndicator = document.querySelector('#pct-ind');
            const p = ( 1 - httpreq.responseText / 10 ) * (2 * (22 / 7) * 40);
            if( p > 8 ){
                pctIndicator.style = `stroke: #FF6A4A;`;
            }
            else{
                pctIndicator.style = `stroke: #058EED;`;
                
            }
            pctIndicator.style = `stroke-dashoffset: ${p};`;
            showing_image();
        }
    }
}
memory_status();

const showing_image = () => {
    let httpreq = new XMLHttpRequest();
    httpreq.open("GET","pages_backend/show_image.php",true);
    httpreq.send();
    httpreq.onreadystatechange = () => {
        if(httpreq.readyState == 4 && httpreq.status == 200){
            let showing_div = document.getElementById("parent-starred-container");
            showing_div.innerHTML = "";
            showing_div.innerHTML += httpreq.responseText;
        }
    }
}

const date_month = () => {
    let date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("date_month").innerHTML = `${month[date.getMonth()]}, ${date.getDate()}`;
}

date_month();


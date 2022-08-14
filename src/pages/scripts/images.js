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
            alert(data);
        })
        .catch((error) => {
            alert(error);
        });
    }
}
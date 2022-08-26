const upgrade_package = () => {
    const upgrade_btn = document.getElementById("upgrade-btn");
    upgrade_btn.onclick = () => {
        let plan = upgrade_btn.getAttribute("plan");
        let amount = upgrade_btn.getAttribute("amount");
        window.location = "payment.php?amount="+amount;
    }
}
upgrade_package();
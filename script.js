document.getElementById("aiButton").addEventListener("click", function() {
    let aiTools = document.getElementById("aiTools");

    if (aiTools.style.display === "none" || aiTools.style.display === "") {
        aiTools.style.display = "block";
    } else {
        aiTools.style.display = "none";
    }
});

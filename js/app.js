function openAbout() {
    document.getElementById("aboutMe").style.width = "100%";
}

function closeAbout() {
    document.getElementById("aboutMe").style.width = "0";
}


function moreInfo() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "<i class='fas fa-chevron-down' aria-hidden='true'></i>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "<i class='fas fa-chevron-up' aria-hidden='true' style='color:#30312F;'></i>";
        moreText.style.display = "inline";
    }
}
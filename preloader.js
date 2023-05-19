document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        window.location.href = "maintenance.html";
    }, 2000); // 2000ms = 2s
});
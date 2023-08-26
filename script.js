// Wait for the window to load
window.addEventListener("load", function () {
    // Hide the splash screen after a delay
    setTimeout(function () {
        var splash = document.getElementById("splash");
        var main = document.getElementById("main");

        splash.style.opacity = 0;
        main.style.display = "block";

        // Allow scrolling by removing the no-scroll class from the body
        document.body.classList.remove("no-scroll");

        
        setTimeout(function () {
            splash.remove();
        }, 1000);
    }, 3000); 
});



//Handle Hamburger Manu onClick
function toggleMenu() {

    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon"); 

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Wait for the window to load
window.addEventListener("load", function () {
    // Hide the splash screen after a delay
    setTimeout(function () {
        var splash = document.getElementById("splash");
        var main = document.getElementById("main");

        splash.style.opacity = 0;
        main.style.display = "block";

        
        setTimeout(function () {
            splash.remove();
        }, 1000);
    }, 5000); 
});

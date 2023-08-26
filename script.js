// Wait for the window to load
window.addEventListener("load", function () {
    // Hide the splash screen after a delay
    setTimeout(function () {
        var splash = document.getElementById("splash");
        var main = document.getElementById("main");

        splash.style.opacity = 0;
        main.style.display = "block";

        // Optionally, you can remove the splash screen from the DOM after fading out
        setTimeout(function () {
            splash.remove();
        }, 1000);
    }, 5000); // Show the splash screen for 3 seconds (adjust as needed)
});

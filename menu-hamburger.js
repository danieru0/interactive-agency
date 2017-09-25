(function() {
    var btn = document.querySelector(".nav_hamburger"),
        navbar = document.querySelector(".nav_navbar");
    
    btn.addEventListener("click", function() {
        if (navbar.className === "nav_navbar") {
            navbar.className += " responsive";
        } else {
            navbar.classList += " responsive_hide";
            setTimeout(function() {
                navbar.className = "nav_navbar";
            }, 650);
        }
    });
})();
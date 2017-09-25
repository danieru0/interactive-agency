(function() {
    var nav = document.querySelector(".nav");
    
    window.addEventListener("scroll", function() {
        var currentPosition = pageYOffset;
        if(currentPosition > 50) {
            nav.className += " sticky_nav";
            nav.className += " sticky_nav_bg";
        } else {
            nav.className = "nav";
        }
    });
})();
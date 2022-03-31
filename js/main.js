// Marquee effect
const makeMarquee = function () {
    const title = ` @keeping.up.with.kayleigh ` 
    
    const marqueeText = new Array(200).fill(title).join(' ')
    
    const marquee = document.querySelector(".marquee a")
    
    marquee.innerHTML = marqueeText 
}

makeMarquee()

//////////////////////////////////////////////
// Draggable images
Draggable.create(".drag");


//////////////////////////////////////////////
// Toggle Menu 
// resource: https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"’></i>';
    }
}
 
toggle.addEventListener("click", toggleMenu, false);
myDiv = document.getElementById("welcome");
speed = 0.5;

function parallaxBackground()
{
    console.log("parallaxBackground");
//    image.style.top = 0 - window.scrollY * speed + "px";
    
    
    
    myDiv.style.backgroundPositionY = window.scrollY * speed + "px";
}

window.addEventListener("scroll", parallaxBackground);
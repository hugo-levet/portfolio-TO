myDiv = document.getElementById("welcome");
speed = 0.5;

posDivX = myDiv.style.backgroundPositionX;
posDivY = myDiv.style.backgroundPositionY;

function parallaxBackground()
{
    console.log("parallaxBackground");
//    image.style.top = 0 - window.scrollY * speed + "px";
    
    
    
//    myDiv.style.backgroundPositionY = window.scrollY * speed + "px";
//    myDiv.style.backgroundPositionX = "center";
}

window.addEventListener("scroll", parallaxBackground);
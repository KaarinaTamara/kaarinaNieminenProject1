// HAMBURGER MENU WAS CREATED WITH ASSISTANCE FROM CODING COMMANDERS AT https://www.youtube.com/watch?v=QMuIy72W5qk 


function toggle () {
let menu = document.getElementById("hamburgerMenu");   

if (menu.style.display === "block") {
    menu.style.display = "none"
    }
    
    else {
        menu.style.display = "block"; 
    }
}

// document.getElementById("burgerButton").addEventListener("click",toggle)
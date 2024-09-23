const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", (event)=> {
    event.stopPropagation();
    if (navMenu.style.display == "") {
        navMenu.style.display = "flex"
    }
    else {
        navMenu.style.display = ""
    }
})

document.addEventListener('click', function(event) {
    const isClickInside = navMenu.contains(event.target) || navButton.contains(event.target);
  
    if (!isClickInside) {
      navMenu.style.display = ""
    }
  });


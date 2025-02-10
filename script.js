//show navbar
const navToggler=document.querySelector(".navToggler");
navToggler.addEventListener("click", showNav);
function showNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("show")
}
//close navbar when link is clicked
window.addEventListener("click", (e)=>{
    if (e.target.closest(".list")) {
        showNav();
    }
});

//show header after scroll
window.addEventListener("scroll",(e)=>{
    console.log(this.pageYOffset);
    if (this.pageYOffset>60) {
        document.querySelector(".header").classList.add("reveal");
    }
    else{
        document.querySelector(".header").classList.remove  ("reveal");

    }
});

//Change background
var changers = document.querySelectorAll('.changer span');
var root = document.querySelector(':root');
changers.forEach((changer) => {
    changer.addEventListener("click", (e) => {
        root.style.setProperty('--background-color', e.target.style.backgroundColor);
    })
});

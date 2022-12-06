
const navUl = document.querySelector('nav ul');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () =>{
    const visibility = navUl.getAttribute('visible')
    // console.log(visibility);
    if (visibility == "false") {
        navUl.setAttribute("visible", true)
        navToggle.setAttribute("expanded", true)
    }else {
        navUl.setAttribute("visible", false)
        navToggle.setAttribute("expanded", false)
    }
})
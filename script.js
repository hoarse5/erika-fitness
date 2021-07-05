function pageLoad() {
    const navbar = document.querySelector("nav");
    const navbarHeader = document.getElementById("nav-span");
    window.onscroll = () => {
        if (window.scrollY > 705) {
            navbar.classList.add("colorChange-nav");
            navbarHeader.classList.add("colorChange-nav-span");
        } else {
            navbar.classList.remove("colorChange-nav");
            navbarHeader.classList.remove("colorChange-nav-span");
        }
    };
}

window.addEventListener("load", pageLoad);
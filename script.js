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

    //tab toggle code source: https://www.youtube.com/watch?v=5L6h_MrNvsk&t=53s

    let tabs = document.querySelectorAll("[data-tab-target]");
    let tabContents = document.querySelectorAll("[data-tab-content]");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            let target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
            target.classList.add("active");
        });
    });
}

window.addEventListener("load", pageLoad);
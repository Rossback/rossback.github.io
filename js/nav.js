document.addEventListener('DOMContentLoaded',
    function () {
        const page = window.location.pathname.split("/").pop();
        const navItems = document.querySelectorAll('nav li');
        navItems.forEach(item => {
            if ((item.outerText.includes("Home") && page.includes("index")) || (item.outerText.includes("About") && page.includes("about"))) {
                item.classList.add("active");
            }
        });
    });
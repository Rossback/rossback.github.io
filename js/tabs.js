document.addEventListener('DOMContentLoaded',
    function () {

        const tabsContainer = document.querySelector(".tabs-container");
        const tabsList = tabsContainer.querySelector(".tabs-container-list");
        const tabButtons = tabsList.querySelectorAll("a");
        const tabPanels = tabsContainer.querySelectorAll(".tabs-panels > div");

        tabButtons.forEach((tab, index) => {
            if (index === 0) {
                tab.classList.add("active");
            }
            else {
                tabPanels[index].setAttribute("hidden", "");
            }
        });
        tabsContainer.addEventListener("click", (e) => {
            const clickedTabButton = e.target.closest("a");
            if (!clickedTabButton) {
                return;
            }
            e.preventDefault();
            const desiredElementId = clickedTabButton.getAttribute("href");
            const currentClickedAnchorId = clickedTabButton.getAttribute("id");
            const clickedButtonElement = tabsContainer.querySelector(desiredElementId);
            const clickedAnchorElement = tabsList.querySelector("#" + currentClickedAnchorId);
            tabPanels.forEach((panel) => {
                panel.setAttribute("hidden", true);
            });
            tabButtons.forEach((button) => {
                button.classList.remove("active");
            })
            clickedAnchorElement.classList.add("active");
            clickedButtonElement.removeAttribute("hidden");
        })
    });
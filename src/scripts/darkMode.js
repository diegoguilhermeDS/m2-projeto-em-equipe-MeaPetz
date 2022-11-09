import { iconMoon, iconSun } from "./icons.js";

function darkMode(btn) {
    btn.classList = "btn-icon-darkmode";
    btn.innerHTML = iconMoon;
    const html = document.documentElement;
    let isDarkMode = localStorage.getItem("dark-mode");

    if (isDarkMode) {
        if (!html.classList.contains("dark-mode")) {
        document.documentElement.classList.add("dark-mode");
        btn.innerHTML = iconSun;
        }
    }

    btn.addEventListener("click", () => {
        if (!html.classList.contains("dark-mode")) {
            document.documentElement.classList.add("dark-mode");
            btn.innerHTML = iconSun;
            localStorage.setItem("dark-mode", true);
        } else {
            document.documentElement.classList.remove("dark-mode");
            btn.innerHTML = iconMoon;
            localStorage.removeItem("dark-mode");
        }
    });
}

export { darkMode };

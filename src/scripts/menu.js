import { darkMode } from "./darkMode.js";
import { iconHome, iconUser, iconLogout, iconMoon, iconSun } from "./icons.js";

const itemsMenu = [
    {
        html: iconHome,
        href: "/src/pages/home",
        isDarkMode: false,
    },
    {
        html: iconUser,
        href: "/src/pages/dashboard",
        isDarkMode: false,
    },
    {
        html: iconLogout,
        href: "/src/pages/login",
        isDarkMode: false,
    },
    {
        html: iconMoon,
        href: "",
        isDarkMode: true,
    },
    {
        html: iconSun,
        href: "",
        isDarkMode: true,
    },
];

function menu() {
    const header = document.querySelector(".header-main");

    const nav = document.createElement("nav");
    nav.classList = "nav-menu";

    const ul = document.createElement("ul");
    ul.classList = "menu";

    header.append(nav);
    nav.append(ul);

    itemsMenu.forEach(({ html, href, isDarkMode }) => {
        if (!isDarkMode) {
        ul.insertAdjacentHTML(
            "beforeend",
            `
                <li>
                    <a href="${href}">${html}</a>
                </li>
            `
        );
        }
    });

    const buttonDarkMode = document.createElement("button");
    darkMode(buttonDarkMode)

    const li = document.createElement('li')

    li.append(buttonDarkMode)
    ul.append(li)
}

export { menu };

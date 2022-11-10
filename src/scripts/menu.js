import { darkMode } from "./darkMode.js";
import { iconHome, iconUser, iconLogout } from "./icons.js";
import { logout } from "./logout.js";


const itemsMenu = [
    {
        html: iconHome,
        href: "/src/pages/home",
    },
    {
        html: iconUser,
        href: "/src/pages/dashboard",
    },
    {
        html: iconLogout,
        href: "/src/pages/login",
    }
];

function menu() {
    const header = document.querySelector(".header-main");

    const nav = document.createElement("nav");
    nav.classList = "nav-menu";

    const ul = document.createElement("ul");
    ul.classList = "menu";

    header.append(nav);
    nav.append(ul);

    itemsMenu.forEach(({ html, href }) => {
        ul.insertAdjacentHTML(
            "beforeend",
            `
                <li>
                    <a href="${href}">${html}</a>
                </li>
            `
        );
    });

    const buttonDarkMode = document.createElement("button");
    darkMode(buttonDarkMode)

    const li = document.createElement('li')

    li.append(buttonDarkMode)
    ul.append(li)

    logout()
}


export { menu };

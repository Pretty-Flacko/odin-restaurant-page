import frame9 from "./img/menu-tab/Frame 9.png";
import frame10 from "./img/menu-tab/Frame 10.png";
import frame11 from "./img/menu-tab/Frame 11.png";
import frame12 from "./img/menu-tab/Frame 12.png";
import frame13 from "./img/menu-tab/Frame 13.png";
import frame14 from "./img/menu-tab/Frame 14.png";
import frame15 from "./img/menu-tab/Frame 15.png";
import frame16 from "./img/menu-tab/Frame 16.png";

export default function loadMenu() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-tab");

    const h2 = document.createElement("h2");
    h2.textContent = "MENU";

    const container = document.createElement("div");
    container.classList.add("menu-container");

    const images = [frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16];
    
    images.forEach(src => {
        const btn = document.createElement("button");
        btn.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = src;

        btn.appendChild(img)
        container.appendChild(btn);
    });

    menuDiv.appendChild(h2);
    menuDiv.appendChild(container);

    content.appendChild(menuDiv);
}
import frame5 from "./img/Frame 5.png";
import frame6 from "./img/Frame 6.png";
import frame7 from "./img/Frame 7.png";
import frame8 from "./img/Frame 8.png";
import mainBurger from "./img/Default_burger_cinematic_and_of_different_types_flying_burger_1-removebg-preview 1.png";

export default function loadHome() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const leftSide = document.createElement("div");
    leftSide.classList.add("content-leftside");

    const h2 = document.createElement("h2");
    h2.textContent = "The Ultimate";

    const h1 = document.createElement("h1");
    h1.textContent = "Burger Club";

    const p = document.createElement("p");
    p.textContent = "Savor the Flavor, Join the Club!";

    const featuredDiv = document.createElement("div");
    featuredDiv.classList.add("featured-items");

    const images = [frame5, frame6, frame7, frame8];

    images.forEach(src => {
        const a = document.createElement("a");
        a.href = "#";

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Burger";

        a.appendChild(img);
        featuredDiv.appendChild(a);
    });

    leftSide.appendChild(h2);
    leftSide.appendChild(h1);
    leftSide.appendChild(p);
    leftSide.appendChild(featuredDiv);

    const rightSide = document.createElement("div");
    rightSide.classList.add("content-rightside");

    const mainImg = document.createElement("img");
    mainImg.src = mainBurger;
    mainImg.alt = "Image of a burger";

    rightSide.appendChild(mainImg);

    content.appendChild(leftSide);
    content.appendChild(rightSide);
}
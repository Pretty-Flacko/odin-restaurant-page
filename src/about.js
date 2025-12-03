export default function loadAbout() {
    const content = document.getElementById("content");

    content.innerHTML = "";
    
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-tab");

    const h3 = document.createElement("h3");
    h3.textContent = "ABOUT";

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");

    const aboutUsDiv = document.createElement("div");
    const aboutUsTitle = document.createElement("h3");
    aboutUsTitle.textContent = "ABOUT US";
    const aboutUsText = document.createElement("p");
    aboutUsText.textContent =
        "Burgur Club started with one simple idea — to make the perfect burger. We use fresh ingredients, bold recipes, and a passion for flavor that you can taste in every bite. Whether you're grabbing a quick lunch or settling in for dinner, we want every visit to feel special.";
    aboutUsDiv.append(aboutUsTitle, aboutUsText);

    const whyDiv = document.createElement("div");
    const whyTitle = document.createElement("h3");
    whyTitle.textContent = "WHY PEOPLE LOVE US";
    const whyList = document.createElement("ul");

    const whyItems = [
        "🔥 Fresh Ingredients — we prep everything daily.",
        "🍔 Unique Recipes — flavors you won’t find anywhere else.",
        "⭐ Loved by Many — our club grows every day."
    ];

    whyItems.forEach(itemText => {
        const li = document.createElement("li");
        const [label, description] = itemText.split("—").map(s => s.trim());
        const strong = document.createElement("strong");
        strong.textContent = label;
        li.append(strong, ` — ${description}`);
        whyList.appendChild(li);
    });

    whyDiv.append(whyTitle, whyList);

    const contactDiv = document.createElement("div");
    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "CONTACT & LOCATION";
    const contactList = document.createElement("ul");

    const contactItems = [
        "📍 Address: 12 Main Street, Flavor Town",
        "📞 Phone: (123) 456-7890",
        "📧 Email: contact@burgurclub.com"
    ];

    contactItems.forEach(itemContact => {
        const li = document.createElement("li");
        const [label, value] = itemContact.split(": ");
        const strong = document.createElement("strong");
        strong.textContent = value;
        li.textContent = label + ": ";
        li.appendChild(strong);
        contactList.appendChild(li);
    });

    contactDiv.append(contactTitle, contactList);

    aboutContent.append(aboutUsDiv, whyDiv, contactDiv);

    aboutDiv.append(h3, aboutContent);
    
    content.appendChild(aboutDiv);
}
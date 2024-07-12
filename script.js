const body = document.querySelector("body");
const icons = document.querySelectorAll(".icon");
const form = document.querySelector("#contact form");

for(const icon of icons) {
    icon.addEventListener("click", () => {
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
    
}
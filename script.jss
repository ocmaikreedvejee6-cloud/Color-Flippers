function getRandomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

btn.addEventListener("click", () => {
    const newColor = getRandomColor();
    document.body.style.background = newColor;
    colorCode.textContent = `Background: ${newColor}`;
});

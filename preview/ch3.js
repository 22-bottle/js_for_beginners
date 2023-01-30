const title = document.getElementById("title");

title.innerText = "Got you!";

/*const title = document.querySelector(".hello");
const title = document.getElementsByClassName("hello");

const title = document.querySelector("#hello");
const title = document.getElementById("hello");*/

/*function handleTitleClick() {
    const currentColor = title.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
}*/
/*function handleTitleClick() {
    const clickedClass = "active"
    if (title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
}*/
function handleTitleClick() {
    title.classList.toggle("active"); //있으면 없애고 없으면 추가함
}
function handleMouseEnter() {
    title.innerText = "Mouse is here!"
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone!"
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
/*title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;*/

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier");
}
function handleWindowOffline() {
    alert("SOS no WiFi");
}
function handleWindowOnline() {
    alert("All Good");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
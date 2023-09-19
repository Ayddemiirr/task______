"use strict";

// let rightIcon = document.querySelector(".fa-chevron-right");
// let leftIcon = document.querySelector(".fa-chevron-left");

// function rightSlider() {
//     let active = document.querySelector(".active");
//     if (active.nextElementSibling != null) {
//         active.classList.remove("active");
//         active.nextElementSibling.classList.add("active");
//     } else {
//         active.classList.remove("active");
//         active.parentNode.firstElementChild.classList.add("active");
//     }
// }

// function leftSlider() {
//     let active = document.querySelector(".active");
//     if (active.previousElementSibling != null) {
//         active.classList.remove("active");
//         active.previousElementSibling.classList.add("active");
//     } else {
//         active.classList.remove("active");
//         active.parentNode.lastElementChild.classList.add("active");
//     }
// }

// rightIcon.addEventListener("click", rightSlider);
// leftIcon.addEventListener("click", leftSlider);

// setInterval(() => {
//     rightSlider();
// }, 1000);

// setTimeout(() => {
//     console.log("hello world");
// }, 3000);

// let a = document.querySelector("a");

// let fileInput = document.querySelector("input");

// a.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(e.target.innerText);
// });

// fileInput.addEventListener("change", function () {
//     console.log(e);
// });

// dragElem.ondragstart = () => {
//     console.log("drag start");
// };

// dragElem.ondrag = () => {
//     console.log("dragging");
// };

// dragElem.ondragend = () => {
//     console.log("drag end");
// };

let dragElem = document.querySelectorAll(".element");
let dropElem = document.querySelector("#drop-elem");
// let dropElem2 = document.querySelector("#drop-elem2");

dragElem.forEach(item => {
    item.ondragstart = (e) => {
        let id = e.target.getAttribute("id");
        e.dataTransfer.setData("id", id);
    };
})

dropElem.ondragover = (e) => {
    e.preventDefault();
};

dropElem.ondrop = (e) => {
    e.target.append(document.getElementById(e.dataTransfer.getData("id")));
};

// dropElem2.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem2.ondrop = (e) => {
//     e.target.append(document.getElementById(e.dataTransfer.getData("id")));
// }
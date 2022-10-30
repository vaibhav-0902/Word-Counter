// console.log("bake the cake");
let content = document.querySelector('.content');
let text = document.getElementById('text-box');
let char = document.getElementById('character');
let words = document.getElementById('words');
let lines = document.getElementById('lines');
let symbols = document.getElementById('symbols');


let count = () => {
    if (text.value.length === 0) {
        content.style.display = "none";
    }
    else {
        content.style.display = "flex";
        char.innerHTML = text.value.replace(/ /g, "").length + " characters";
        words.innerHTML = text.value.trim().split(/\s+/).length + " words";
        lines.innerHTML = text.value.split("\n").length + " lines";
        symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length - 1 + " symbols";
    }
}

text.addEventListener("input", count);
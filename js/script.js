"use strict"
const form = document.querySelector(".form");
const submit = document.querySelector(".form__button");
const output = document.querySelector(".info__list");

const listData = [];

submit.addEventListener("click", () => {
    let number = +form.elements["number"].value;
    if (number === "") return;
    if (!number || number < 1) {
        alert("Введены не коректные данные")
        return
    }
    let text = form.elements["text"].value;
    let index = null;
    for (let i = 0; i < listData.length; i++) {
        if (listData[i].number === number) {
            index = String(i);
            break;
        }
    }
    index ? listData[index].text = text : listData.push({number, text});
    listData.sort((a, b) => a.number - b.number);
    addListItems(listData);
})
;

function addListItems(arr) {
    output.innerHTML = arr.map(elem => {
        return `<li>${elem.number}) ${elem.text}</li>`
    }).join("");
}
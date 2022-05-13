"use strict"
const form = document.querySelector(".form");
const output = document.querySelector(".info__list");
const numberFieldError = document.querySelector(".numberFieldError");
const textFieldError = document.querySelector(".textFieldError");
const listData = [];

form.addEventListener("submit", () => {
    let number = form.elements["number"].value;
    console.log(number)
    let text = form.elements["text"].value;
    let index = null;


    if (validateFieldNumber(number, numberFieldError) || validateFieldText(text, textFieldError)) {
        validateFieldNumber(number, numberFieldError);
        validateFieldText(text, textFieldError);
        return;
    }

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


function addListItems(arr) {
    output.innerHTML = arr.map(elem => {
        return `<li>${elem.number}) ${elem.text}</li>`
    }).join("");
}

function validateFieldNumber(field, errorField) {
    if (field === "") {
        errorField.classList.add("errorFiled");
        return errorField.innerText = "Поле обязательно для заполнения";
    } else if (isNaN(field) || field < 1) {
        errorField.classList.add("errorFiled");
        return errorField.innerText = "Введены не корректные значения";
    } else {
        errorField.classList.remove("errorFiled");
        return errorField.innerText = "";
    }
}

function validateFieldText(field, errorField) {
    if (field === "") {
        errorField.classList.add("errorFiled");
        return errorField.innerText = "Поле обязательно для заполнения";
    } else {
        errorField.classList.remove("errorFiled");
        return errorField.innerText = "";
    }
}
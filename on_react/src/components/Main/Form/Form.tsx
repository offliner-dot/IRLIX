import React, {useState} from 'react';


const Form = ({setListData, listData}: any) => {
        const [numberFieldValue, setNumberFieldValue] = useState({name: "number", value: ""})
        const [textFieldValue, setTextFieldValue] = useState({name: "text", value: ""})
        const [isValidNumber, setIsValidNumber] = useState(false)
        const [isValidText, setIsValidText] = useState(false)

        const handleSubmit = () => {
            if (listData.some((item: any) => item.id === numberFieldValue)) {
                const arr = listData.map((item: any) => item.id === numberFieldValue ? {
                    id: item.id,
                    text: textFieldValue
                } : item);
                setListData(arr);
            } else {
                setListData([...listData, {id: numberFieldValue, text: textFieldValue}]);
            }
        }
        const isValidField = (field: any) => {
            switch (field.name) {
                case    "number": {
                    setNumberFieldValue(field.value);
                    if (field.value === "") {
                        setIsValidNumber(true);
                        return "Поле обязательно для заполнения";
                    } else if (isNaN(+field.value) || field.value < 1) {
                        setIsValidNumber(true);
                        return "Введены не корректные значения";
                    } else {
                        setIsValidNumber(false);
                        return "";
                    }
                }
                case "text": {
                    setTextFieldValue(field.value);
                    switch (field.value) {
                        case "": {
                            setIsValidText(true);
                            return "Поле обязательно для заполнения";
                        }
                        default:
                            setIsValidText(false);
                            return "";
                    }
                }
            }
        }
        // let index = null;
        // if (validateFieldNumber(number, numberFieldError) || validateFieldText(text, textFieldError)) {
        //     validateFieldNumber(number, numberFieldError);
        //     validateFieldText(text, textFieldError);
        //     return;
        // }
        // for (let i = 0; i < listData.length; i++) {
        //     if (listData[i].number === number) {
        //         index = String(i);
        //         break;
        //     }
        // }

        // index ? listData[index].text = text : listData.push({number, text});
        // listData.sort((a, b) => a.number - b.number);
        // addListItems(listData);
        return (
            <form className="form" action="#" onSubmit={handleSubmit}>
                <div className="form__number">
                    <label htmlFor="number">Номер записи</label>
                    <input type="text" id="number"
                           placeholder="Введите число"
                           value={numberFieldValue.value}
                           onChange={e => isValidField({name:"number",value:e.target.value})}
                           name="number"
                    />
                    {isValidNumber && <span
                        className="numberFieldError">{isValidField(numberFieldValue)}</span>}
                </div>
                <div className="form__text">
                    <label htmlFor="text">Название записи</label>
                    <input type="text" id="text"
                           placeholder="Введите текст"
                           value={textFieldValue.value}
                           onChange={e => isValidField({name:"text",value:e.target.value})}
                           name="text"
                    />
                    {isValidText && <span className="textFieldError">isValidField(textFieldValue)</span>}
                </div>
                <button className="form__button">
                    Добавить в список
                </button>
            </form>
        );
    }
;

function validateFieldNumber(field: any) {
    if (field === "") {
        // errorField.classList.add("errorFiled");
        return "Поле обязательно для заполнения";
    } else if (isNaN(field) || field < 1) {
        // errorField.classList.add("errorFiled");
        return "Введены не корректные значения";
    } else {
        // errorField.classList.remove("errorFiled");
        return "";
    }
}

// function validateFieldText(field, errorField) {
//     if (field === "") {
//         errorField.classList.add("errorFiled");
//         return errorField.innerText = "Поле обязательно для заполнения";
//     } else {
//         errorField.classList.remove("errorFiled");
//         return errorField.innerText = "";
//     }
// }

export default Form;
import React, {useState} from 'react';


const Form = ({setListData, listData}: any) => {
        const [numberFieldValue, setNumberFieldValue] = useState("")
        const [textFieldValue, setTextFieldValue] = useState("")

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
        const onChangeNumber = (value: string) => {
            setNumberFieldValue(value)

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
        }
        return (
            <form className="form" action="#" onSubmit={handleSubmit}>
                <div className="form__number">
                    <label htmlFor="number">Номер записи</label>
                    <input type="text" id="number"
                           placeholder="Введите число"
                           value={numberFieldValue}
                           onChange={e => onChangeNumber(e.target.value)}
                    />
                    {validateFieldNumber(numberFieldValue) && <span
                        className="numberFieldError">{validateFieldNumber(numberFieldValue)}</span>}
                </div>
                <div className="form__text">
                    <label htmlFor="text">Название записи</label>
                    <input type="text" id="text"
                           placeholder="Введите текст"
                           value={textFieldValue}
                           onChange={e => setTextFieldValue(e.target.value)}
                    />
                    <span className="textFieldError"></span>
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
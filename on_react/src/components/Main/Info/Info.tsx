import React from 'react';
import {ListDataType} from "../../../types/listDataType";


const Info = ({listData}: any) => {
    return (
        <div className="info">
            <p className="info__subtitle">Давай обновим список и начнем обучение</p>
            <div className="info__list-title">
                Список:
            </div>
            <ul className="info__list">
                {listData.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id).map((item: ListDataType) => (
                    <li key={item.id}>{item.id}) {item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Info;
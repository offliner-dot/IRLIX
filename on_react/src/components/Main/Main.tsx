import React, {useState} from 'react';
import Form from "./Form/Form";
import Info from "./Info/Info";

const Main = () => {
    const [listData, setListData] = useState([])
    return (
        <main className="main">
            <div className="container">
                <h1>Приветствую!</h1>
                <div className="main__content">
                    <Info listData={listData}/>
                    <Form setListData={setListData} listData={listData}/>
                </div>
            </div>
        </main>
    );
};

export default Main;
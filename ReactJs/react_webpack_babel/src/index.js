import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Increment from "./Increment";

function App(){
    return (
        <div>
            Xin Chao anh em
            Oi cuoc doi  
            <Header></Header>
            <Increment></Increment>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));
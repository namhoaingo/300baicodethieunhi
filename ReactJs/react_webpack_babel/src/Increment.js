import React  from "react";


function Increment(){
    const [number, setNumber] = React.useState(0);

    const handleIncrease = function(){
        setNumber(number+1);
    }
    const handleDecrease = function(){
        setNumber(number-1);
    }
    return (
        <div>
            <div>{number}</div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Increment;
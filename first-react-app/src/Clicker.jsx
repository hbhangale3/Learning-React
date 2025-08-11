import { useState } from "react"

export default function Clicker(){

    const [num, setNum] = useState(5);

    const changeNum = ()=>{
        setNum(num+1);
    };

    return (
        <div>
           <p>Click the Button to increase Num:{num}</p>
           <button onClick={changeNum}>Click</button> 
        </div>
    )
}
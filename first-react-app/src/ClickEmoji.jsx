import { useState } from 'react';
import './ClickEmoji.css'

export default function ClickEmoji(){
    // const isHappy = true
    const [emoji, setEmoji] = useState(true);

    const changeBehav = ()=>{
        setEmoji(!emoji);
    }

    return (
        <div className="ClickEmoji">
            <p>{emoji?"😁":"😭"}</p>
            <button onClick={changeBehav}>Click to Change</button>
        </div>
    )
}

import { useState } from "react";
import {v4 as uuid} from "uuid"

function createScoreCard(numPlayers){
    return [...Array(numPlayers)].map(() => ({ id: uuid(), score: 0 }));
}


function ScoreKeeper({numPlayers, target}){
    const [counter, setCounter] = useState(() => createScoreCard(numPlayers));

    function countInc(id){
        setCounter(prevScoreCard =>{
            return prevScoreCard.map(p => p.id===id?{...p, score:p.score+1}:p)
        })
    }
    

    return (
        <ul>
            {counter.map((player,i) =>(
                <li key={player.id}>player{i+1}: {player.score}{" "}<button onClick={()=>countInc(player.id)}>+1</button> {target != null && player.score >= target ? " ✅" : null}</li>
            ))}
        </ul>
    )
}

export default ScoreKeeper;
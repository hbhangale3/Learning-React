export default function DoubleDice(){
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const styles = {color: num1===num2 ? "green":"red"};
    return (
        <div className="DoubleDice" style={styles}>
            <h2>{num1===num2 ? "You Win!!": "You Lost!!"}</h2>
            <h3>Num1:{num1}</h3>
            <h3>Num2:{num2}</h3>
        </div>
    );
}
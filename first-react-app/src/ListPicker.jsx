
export default function ListPicker({values}){
const randIdx = Math.floor(Math.random()*values.length);
const randEl = values[randIdx];
    return (
        <>
        <h2>List of values are: {values}</h2>
        <h2>Random element from array is : {randEl}</h2>
        </>
    )
}
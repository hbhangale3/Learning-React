
function Greeter({name="Anonymous", from="Stranger",num=10}){
  // console.log(props);
    return (
    <>
        <h1>Hi,{name} </h1>
        <h2>{from}</h2>
        <h3>{num}</h3>
    </>
    )
}

export default Greeter;
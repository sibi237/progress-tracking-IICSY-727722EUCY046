const Func=()=>{
    return <Greeting name="sabari"/>
}
const Greeting=(props)=>{
    return(
        <h1>
        hello {props.name} nice to meet you!
        </h1>
    );
}
export default Func
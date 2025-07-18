export function AvengerUser(props){
    return <>
        <h1>Welcome to the Shield</h1>
        <button type="button" onClick={props.clickdetail}>Login</button>
        <button type="button">Sign Up</button>
    </>
}
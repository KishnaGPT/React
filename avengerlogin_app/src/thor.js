export function ThorWelcome(props){

    const isadmin = props.admin;

    return <>
        <h1>Hello Thor Eden</h1>
        <button type="button" onClick={props.clickdetail}>Logout</button>
        {isadmin && <button type="button">Delete</button>}
    </>
}
export function IronmanWelcome(props){

    const isadmin = props.admin;

    return<>
        <h1>Hello Tony Stark</h1>
        <button type="button" onClick={props.clickdetail}>Logout</button>
        {isadmin && <button type="button">Delete</button>}
    </>
}
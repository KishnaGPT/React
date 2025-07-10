export function CaptainWelcome(props){

    const isadmin = props.admin;
    return <>
        
    <h1>Hello Steve Roger</h1>
    <button type="button" onClick={props.clickdetail}>Logout</button>
    {isadmin && <button type="button">Delete</button>}

    </>
}
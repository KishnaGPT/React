export function ContactCard({name, email, phone, address}){

    const cardstyle = {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f0f9ff"
    }


    return <>
        <div style={cardstyle}>
            <h2>{name}</h2>
            <p><b>Email: </b>{email}</p>
            <p><b>Phone: </b>{phone}</p>
            <p><b>Address: </b>{address}</p>
        </div>
    </>
}
export function Greeting(){

    const container={

        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '2rem',
        color: '#333'
    }

    const today = new Date();
    const getHour = today.getHours();
    
    let greeting = "";
    if(getHour<12){
        greeting="Good Morning";
    }
    else if(getHour>=12 && getHour<=18){
        greeting="Good Afternoon";
    }
    else{
        greeting="Good Evening"
    }

    return <>
        <div style={container}>
            <h1>{greeting}!</h1>
        </div>
    </>
}
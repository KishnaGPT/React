// import nat from "./gradient.jpg"
import nat from "./nature.jpg"
import "./counter.css"

export function Image(){
    return <>
        {/* <img src={ProcessingInstruction.env.PUBLIC_URL+"/gradient.jpg"} alt=""/> */}
        {/* <img src={nat} alt=""/> */}
        <img className="img" src={nat} alt=""/>
    </>
}
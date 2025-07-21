import { useContext } from "react"
import { PowerContext } from "./PowerContext"


export function Child3(){
    const {powervalue, city} = useContext(PowerContext)
    return <>
        <h1>Child3</h1>
        <h3>Power of Steve Roger is: {powervalue}</h3>
        <h3>City of Steve is: {city}</h3>
    </>
}
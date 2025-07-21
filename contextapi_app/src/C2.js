import { Child3 } from "./C3"
import { PowerContext } from "./PowerContext"
import { useContext } from "react"
export function Child2(){

     const {powervalue1, city1} = useContext(PowerContext)

    return<>
    <h1>Child2</h1>
    <h3>Power of Steve Roger is: {powervalue1}</h3>
    <h3>City of Steve is: {city1}</h3>
    <Child3/>
    </>
}
import { useState } from "react";

export function useAvengerPower(){

    const [power, setPower] = useState(100)

    const increasePower = ()=>{
        setPower(power+100)
    }

    const reducePower = ()=>{
        setPower(power-100)
    }

    return {power, increasePower, reducePower}
}
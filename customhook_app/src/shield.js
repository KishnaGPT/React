import { useAvengerPower } from "./customhook";

export function Avenger(){
    const pow1 = useAvengerPower();
    const pow2 = useAvengerPower();
    const pow3 = useAvengerPower();
    const pow4 = useAvengerPower();


    return <>
        <h1>Captain America: {pow1.power}</h1>
        <button type="button" onClick={pow1.increasePower}>Boost Power</button>
        <button type="button" onClick={pow1.reducePower}>Reduce Power</button>

        <h1>Iron Man: {pow2.power}</h1>
        <button type="button" onClick={pow2.increasePower}>Boost Power</button>
        <button type="button" onClick={pow2.reducePower}>Reduce Power</button>

        <h1>Spider Man: {pow4.power}</h1>
        <button type="button" onClick={pow4.increasePower}>Boost Power</button>
        <button type="button" onClick={pow4.reducePower}>Reduce Power</button>

        <h1>Thanos: {pow3.power}</h1>
        <button type="button" onClick={pow3.increasePower}>Boost Power</button>
        <button type="button" onClick={pow3.reducePower}>Reduce Power</button>
        
    </>
}
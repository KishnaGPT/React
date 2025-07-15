import style from "./External.module.css"
import style2 from "./External1.module.css"

export function AvengerExternal2(){

    return <>
        <h1 className={style.color}>Hello Bruce Banner from external</h1>
        <hr/>
        <h1 className={style2.color}>Hello Bruce Banner from external1</h1>
    </>
}
// import { AvengerState } from "./setState"

// export function Shieldpass(){
//   return <>
//     <AvengerState/>
//   </>
// }

// import { AvengerUSeState } from "./useState";

// export function Shieldpass(){
//   return<>
//     <AvengerUSeState/>  
//   </>
// }

import { Counter } from "./useEffect";
import { AvengerUSeState } from "./useState";
import { AvengerState } from "./setState"

export function Shieldpass(){
  return<>
    <AvengerState/>
    <hr/>
    <AvengerUSeState/>
    <hr/>
    <Counter/>
  </>
}

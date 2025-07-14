import { AvengerBoot } from "./bootstrap";

import { AvengerInline } from "./inline";

import { AvengerExternal } from "./external";
import { AvengerExternal2 } from "./external2";


export function ShieldPass(){
  return <>
    <AvengerInline/>
    <hr/>
    <AvengerBoot/>
    <hr/>
    <AvengerExternal/>
    <hr/>
    <AvengerExternal2/>
  </>
}

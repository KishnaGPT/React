import React, { useState } from "react";
import { AvengerLogin } from "./welcome";
import { ThorWelcome } from "./thor";
import { IronmanWelcome } from "./ironman";
import { CaptainWelcome } from "./captain";




export function ShieldPass(props){
   
  const [register, setRegister] = useState(100);

  const login = ()=>{
    setRegister(true);
  }

  const logout = ()=>{
    setRegister(false);
  }

  if(register){
    return <>
      <IronmanWelcome clickdetail={logout}/>
      <ThorWelcome clickdetail={logout}/>
      <CaptainWelcome clickdetail={logout}/>
    </>
  }
  else{
    return <>
      <AvengerLogin clickdetail={login}/>
    </>
  }
}
// import { Avenger } from "./shield";

// // export function ShieldPass(){

// //   return<>
// //      <Avenger/>
// //     </>
// // }


//User.js


import { useState } from "react";
import { AvengerUser } from "./user";
import { AvengerWelcome } from "./welcome";

export function ShieldPass(props){



  // const register = props.register

  // if(register){
  //   return <AvengerWelcome admin={false}/>
  // }
  // else{
  //   return <AvengerUser/>
  // }

  const [register, setRegister] = useState(100);

  const login = () => {
    setRegister(true)
  }

  const logout = ()=>{
    setRegister(false)
  }

  if(register){
    return <AvengerWelcome clickdetail={logout}/>

  }
  else{
    return <AvengerUser clickdetail={login}/>
  }



} 
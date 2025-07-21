import { Child1 } from "./C1"
import { PowerContext } from "./PowerContext"

export function App(){
  const powervalue = 1000;
  const city = "Mumbai";
  const powervalue1 = 2000;
  const city1 = "NYC";

  return<>
    <PowerContext.Provider value={{powervalue,city,powervalue1,city1}}>
        <Child1/>
    </PowerContext.Provider>
  </>
}

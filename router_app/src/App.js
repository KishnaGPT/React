// import { Navbar } from "./Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./Home"
// import { Contact } from "./Contact";
// import { About } from "./About";

// export function App(){

//   return<>
//   <Router>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>}></Route>
//       <Route path="/about" element={<About/>}></Route>
//       <Route path="/contact" element={<Contact/>}></Route>
//     </Routes>
//   </Router>
//   </>
// }

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import {Contact} from "./Contact";
import { Vision } from "./Vision";
import { Service } from "./Service";

export function App(){

  return <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/vision" element={<Vision/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </Router>
  </>
}















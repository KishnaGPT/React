import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./Home";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import './App.css'


export function App(){

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path="/dashboard" element={<Dashboard  isAuthenticated={isAuthenticated}/>}></Route>
      </Routes>
    </Router>
  </>
}
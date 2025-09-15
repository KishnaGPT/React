import React from "react";
import ReactDOM from 'react-dom/client'
import { Welcome } from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Welcome/>);
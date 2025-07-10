import ReactDOM from 'react-dom/client';
import { ShieldPass } from './App';


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<ShieldPass register={true}/>);
import './App.css';
import { BrowserRouter } from "react-router-dom";

import BodyComponent from './components/BodyComponent';
import NavbarComponent from './components/NavbarComponent';

export default function App() {
  return (
    <div>
      <NavbarComponent/>
      <BrowserRouter>
        <BodyComponent/>
      </BrowserRouter>
    </div>
  );
}
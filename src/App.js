import React from "react";
import CrudApi from "./components/CrudApi";
import logo from "./imgs/agenda.jpg"
import "./App.css"

function App() {
  return (
    <>
    <div
    className="App-title"
    style={{display:"inline-flex"}}
    >
      <h1>Meus contatos</h1>
      <img src={logo} alt=""  width="100px"/>
      
    </div>
      
      <hr />
      <CrudApi />
    </>
  );
}

export default App;

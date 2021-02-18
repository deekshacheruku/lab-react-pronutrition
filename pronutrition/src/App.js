import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import ComboBox from "./components/ComboBox.jsx";

class App extends Component{
  render(){
    return (
    <div className="App">
      <Header></Header>
      <ComboBox></ComboBox>
    </div>
  );
}
}

export default App;
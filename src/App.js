import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import QuoteBox from './QuoteBox';
import { useState } from 'react';

const rainbowColors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

function App() {

  const [color, setColor] = useState(0);

  function changeColor() {
    setColor((color < (rainbowColors.length - 1) ? color + 1 : 0));
  }

  return (
    <div className="App" style={{backgroundColor: rainbowColors[color]}}>
      <h1 className="text-center">Random quotes machine.</h1>
      <QuoteBox setColor={changeColor} />
      <p id="author-page">By Gabit</p>
    </div>
  );
}

export default App;
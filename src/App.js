import './App.css';
import React from "react";
import NavigationBarDisplay from './components/NavigationBarDisplay';
import PngToJpeg from './components/PngToJpeg';
import PngToWebp from './components/PngToWebp';
import JpegToPng from "./components/JpegToPng";
import JpegToWebp from './components/JpegToWebp';
import WebpToJpeg from './components/WebpToJpeg';
import WebpToPng from './components/WebpToPng';


function App() {
  
  return (
    <div className="App">
      <NavigationBarDisplay />
      <PngToJpeg />
      <PngToWebp />
      <JpegToPng />
      <JpegToWebp />
      <WebpToJpeg />
      <WebpToPng />
      
    </div>
  );
}

export default App;

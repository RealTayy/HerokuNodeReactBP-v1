import React from 'react';
import placeholderImage from "./assets/images/placeholder.png";
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="App">      
      <img src={placeholderImage} alt="placeholder" />
      <Timer />
    </div>
  );
}

export default App;

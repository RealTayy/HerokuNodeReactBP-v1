import React from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import placeholderImage from "./assets/images/placeholder.png";
import TestComponent from './components/TestComponent/TestComponent';

class MobXState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
}

const TimerView = observer(({ mobXState }) => (
  <div>
    <button onClick={mobXState.reset}>Seconds passed: {mobXState.timer}</button>
  </div>
));

const App = () => {
  return (
    <div className="App">
      Hello World!
      <TimerView mobXState={new MobXState()} />
      <img src={placeholderImage} alt="placeholder" />
      <TestComponent />
    </div>
  );
}

export default App;

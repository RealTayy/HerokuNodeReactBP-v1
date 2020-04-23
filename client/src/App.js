import React from 'react';
import { observable, computed, action, autorun } from "mobx";
import { observer } from 'mobx-react';
import placeholderImage from "./assets/images/placeholder.png";
import Timer from './components/Timer';

// class TimerStoreTwo {
//   @observable secondsPassed = 0;

//   constructor() {
//     setInterval(() => {
//       this.secondsPassed += 1;
//     }, 1000);
//   }

//   @action.bound
//   reset() {
//     this.secondsPassed = 0;
//   }

// }

// const TimerView = observer(({ store }) => (
//   <div>
//     <button onClick={store.reset}>Seconds passed: {store.secondsPassed}</button>
//   </div>
// ));

const App = () => {
  return (
    <div className="App">
      {/* <TimerView store={new TimerStoreTwo()} /> */}
      {/* <img src={placeholderImage} alt="placeholder" /> */}
      <Timer />
    </div>
  );
}

export default App;

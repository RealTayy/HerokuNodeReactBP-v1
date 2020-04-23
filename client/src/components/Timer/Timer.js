import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TimerStore from '../../stores/TimerStore'

const store = new TimerStore();

@observer
class Timer extends Component {
  render() {
    return (
      <>
        <div>
          I am the timer {store.timerDisplay}
        </div>
        <button onClick={() => store.start()}>
          Start
        </button>
        <button onClick={() => store.pause()}>
          Pause
        </button>
        <button onClick={() => store.reset()}>
          Reset
        </button>
      </>
    )
  }
}

export default Timer

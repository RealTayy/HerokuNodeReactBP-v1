import { observable, computed, action, autorun } from "mobx";

class TimerStore {
  constructor() {
    this.start();
    autorun(() => console.log(this.secondsPassed));
  }
  // Properties
  @observable secondsPassed = 0;
  @observable interval = 0;

  // Methods
  @computed get timerDisplay() {
    return `${this.secondsPassed} seconds`
  }

  // Actions
  @action("Resetting Timer")
  reset = () => {
    this.secondsPassed = 0;
  }

  @action("Pausing Timer")
  pause = () => {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  @action("Starting Timer")
  start = () => {
    if (this.interval) return;
    this.interval = setInterval(() => this.increaseSeconds(1), 1000);
  }

  @action("Increasing Timer")
  increaseSeconds = (seconds) => {
    this.secondsPassed += seconds;
  }
}

export default TimerStore;
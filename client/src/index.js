import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from "mobx";

// MobX Configuration
configure({
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: "observed"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
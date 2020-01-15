import React from 'react';
// import store from './store';
import {connect} from 'react-redux';
 

export default function ReduxTest() {
  return (
    <div>
      <div>{store.getState()}</div>
      <div>
        <button onClick={() => store.dispatch({ type: 'minus'})}>+</button>
        <button onClick={() => store.dispatch({ type: 'add'})}>+</button>
      </div>
    </div>
  );
}
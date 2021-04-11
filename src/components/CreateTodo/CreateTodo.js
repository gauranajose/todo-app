import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

import classes from './CreateTodo.css'

const createTodo = (props) => {
  
  const myClasses = [classes.CreateTodo];
  myClasses[1] = !props.darkMode ? classes.Light : null;

  return (
    <div className={myClasses.join(' ')} >
      <Checkbox disabled/>
      <input type="text" onSubmit={props.create} placeholder="Create a new todo." onKeyDown={props.enter} />
    </div>
  );
} 

export default createTodo;
import React from 'react';
import TodoFilter from '../TodoFilter/TodoFilter';

import classes from './TodoFooter.css';

const todoFooter = (props) => (
  <div className={classes.TodoFooter}>
    <p>{props.items} items left</p>
    <TodoFilter filtered={props.filtered} filter={props.filter} />
    <p onClick={props.clearCompleted}>Clear Completed</p>
  </div>
);

export default todoFooter;

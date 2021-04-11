import React from 'react';

import classes from './TodoFilter.css';

const todoFilter = (props) => (
  <div className={classes.TodoFilter}>
    <p
      onClick={props.filtered.bind(null, 'all')}
      className={props.filter === 'all' ? classes.Selected : null}
    >
      All
    </p>
    <p
      onClick={props.filtered.bind(null, 'active')}
      className={props.filter === 'active' ? classes.Selected : null}
    >
      Active
    </p>
    <p
      onClick={props.filtered.bind(null, 'completed')}
      className={props.filter === 'completed' ? classes.Selected : null}
    >
      Completed
    </p>
  </div>
);

export default todoFilter;

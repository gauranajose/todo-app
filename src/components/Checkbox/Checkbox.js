import React from 'react';
import CompletedContext from '../../context/completed-context';

import classes from './Checkbox.css';
import iconCheck from '../../assets/images/icon-check.svg';

const checkbox = (props) => (
  <CompletedContext.Consumer>
    {(context) => (
      <div className={classes.Checkbox}>
        <input
          id={props.id}
          type='checkbox'
          onChange={context.completedHandler}
          disabled={props.disabled}
          checked={props.completed}
        />
        <div className={classes.CheckboxContainer}>
          <img src={iconCheck} alt='check' />
        </div>
      </div>
    )}
  </CompletedContext.Consumer>
);

export default checkbox;

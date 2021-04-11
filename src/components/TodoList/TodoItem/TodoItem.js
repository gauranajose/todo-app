import React, { Component } from 'react';
import Checkbox from '../../Checkbox/Checkbox';

import classes from './TodoItem.css';
import crossIcon from '../../../assets/images/icon-cross.svg';

class todoItem extends Component {
  todoItemRef = React.createRef();

  componentDidMount = () => {
    this.todoItemRef.current.focus();
  };

  render() {
    const myClasses = [classes.TodoItem];
    myClasses[1] = this.props.completed ? classes.Completed : null ;

    return (
      <div tabIndex='1' className={myClasses.join(' ')} ref={this.todoItemRef}>
        <Checkbox id={this.props.id} completed={this.props.completed} />
        <p>
          {this.props.completed ? (<strike>{this.props.name}</strike>) : this.props.name }
        </p>
        <img src={crossIcon} alt='cross' id={this.props.id} onClick={this.props.removed} />
      </div>
    );
  }
}

export default todoItem;

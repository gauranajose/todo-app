import React, { Component } from 'react';
import CreateTodo from '../../components/CreateTodo/CreateTodo';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import CompletedContext from '../../context/completed-context';

import classes from './Todo.css';
import backgroundDark from '../../assets/images/bg-desktop-dark.jpg';
import backgroundLight from '../../assets/images/bg-desktop-light.jpg';

class Todo extends Component {
  state = {
    todos: [
      {
        id: 0,
        name: 'Complete online JavaScript course',
        completed: false,
        active: true,
      },
      {
        id: 1,
        name: 'Jog around the park 3x',
        completed: false,
        active: true,
      },
      {
        id: 2,
        name: '10 mins meditation',
        completed: false,
        active: true,
      },
      {
        id: 3,
        name: 'Read for 1 hour',
        completed: false,
        active: true,
      },
      {
        id: 4,
        name: 'Pick up groceries',
        completed: false,
        active: true,
      },
      {
        id: 5,
        name: 'Complete Todo App on Frontend Mentor',
        completed: false,
        active: true,
      },
    ],
    currentID: 6,
    filter: 'all',
    darkMode: false,
  };

  createTodoHandler = (event) => {
    if (event.key !== 'Enter') return;

    const name = event.target.value;
    event.target.value = '';

    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: prevState.currentID,
            name: name,
            completed: false,
            active: true,
          },
        ],
        currentID: prevState.currentID + 1,
      };
    });
  };

  completeTodoHandler = (event) => {
    const newTodos = [...this.state.todos];
    const idx = newTodos.findIndex((todo) => +event.target.id === todo.id);
    const newCompleted = { ...newTodos[idx] };
    newCompleted.completed = event.target.checked;
    newTodos.splice(idx, 1, newCompleted);

    this.setState({ todos: newTodos });
  };

  removeTodoHandler = (event) => {
    const newTodos = [...this.state.todos];
    const idx = newTodos.findIndex((todo) => +event.target.id === todo.id);
    newTodos.splice(idx, 1);

    this.setState({ todos: newTodos });

    console.log('removed');
  };

  clearCompletedHandler = () => {
    this.setState((prevState) => {
      return { todos: prevState.todos.filter((todo) => !todo.completed) };
    });
  };

  filterTodoHandler = (value) => {
    this.setState({ filter: value });
  };

  changeDisplayHandler = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  }

  dragEndHandler = (result) => {
    if (!result.destination) return;
    const newTodos = [...this.state.todos];
    const reorederedItemArr = newTodos.splice(result.source.index, 1);
    const reorderedItem = reorederedItemArr[0];
    newTodos.splice(result.destination.index, 0, reorderedItem);

    this.setState({ todos: newTodos });
  }

  render() {
    let result;
    if (this.state.filter === 'all') result = this.state.todos;
    if (this.state.filter === 'active') {
      result = [...this.state.todos].filter((todo) => !todo.completed);
    }
    if (this.state.filter === 'completed') {
      result = [...this.state.todos].filter((todo) => todo.completed);
    }

    const background = this.state.darkMode ? backgroundDark : backgroundLight ;
    const color = this.state.darkMode ? '#161620' : '#F7F7F9' ;

    return (
      <div
        className={classes.Todo}
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: color,
        }}
      >
        <Header darkMode={this.state.darkMode} changeDisplay={this.changeDisplayHandler}/>
        <CreateTodo enter={this.createTodoHandler} darkMode={this.state.darkMode} />
        <CompletedContext.Provider
          value={{ completedHandler: this.completeTodoHandler }}
        >
          <TodoList
            todos={result}
            removed={this.removeTodoHandler}
            clearCompleted={this.clearCompletedHandler}
            filtered={this.filterTodoHandler}
            filter={this.state.filter}
            darkMode={this.state.darkMode}
            handleOnDragEnd={this.dragEndHandler}
          />
        </CompletedContext.Provider>
        <p><strong>Drag and drop to reorder list</strong></p>
      </div>
    );
  }
}

export default Todo;

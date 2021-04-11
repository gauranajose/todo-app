import React  from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem/TodoItem';
import TodoFooter from '../TodoFooter/TodoFooter';

import classes from './TodoList.css';

const todoList = (props) => {
  const list = props.todos.map((todo, index) => {
    return (
      <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TodoItem
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
              removed={props.removed}
              darkMode={props.darkMode}
            />
          </li>
        )}
      </Draggable>
    );
  });

  const myClasses = [classes.TodoList];
  myClasses[1] = !props.darkMode ? classes.Light : null;

  return (
    <div className={myClasses.join(' ')}>
      <DragDropContext onDragEnd={props.handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <TodoFooter
        items={props.todos.length}
        clearCompleted={props.clearCompleted}
        filtered={props.filtered}
        filter={props.filter}
      />
    </div>
  );
};

export default todoList;

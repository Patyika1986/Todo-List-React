import React from 'react';
import Todoitem from './Todoitem';
// Todo List
const Todolist = ({ list, title, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="TodoListContainer">
      <h2>{title}</h2>
      {list.map((t) => (
        <Todoitem
          key={t.id}
          id={t.id}
          done={t.done}
          title={t.title}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;

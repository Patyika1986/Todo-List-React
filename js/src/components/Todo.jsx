import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todolist from './Todolist';

const Todo = ({ searchQuery }) => {
  // state mit der Todos| uuid() ist ein automatisch generierte id für die todos
  const [todos, setTodos] = useState([
    { title: 'test todo', id: uuid(), done: false },
  ]);
  // Todos entfernen
  const handleDeleteTodo = (id) => {
    // alle Todos zurück geben die ungleich sind mit dem was mann anklickt
    setTodos(todos.filter((t) => t.id !== id));
  };
  // Todos hinzufügen nach dem Enter gedrückt worden ist
  const handleAddTodo = (event) => {
    if (event.key === 'Enter') {
      // array sprad und value ausgabe
      setTodos([
        ...todos,
        { id: uuid(), title: event.target.value, done: false },
      ]);
      // input leeren nach der ausgabe
      event.target.value = '';
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((t) => {
        if (t.id == id) {
          return { ...t, done: !t.done }; // wenn true dann false und auch umgekehrt ! um die Todos in erledigten und auch wieder zurück hollen kannst
        }
        return t;
      })
    );
  };
  // erledegte Todos
  const activeTodos = todos.filter(({ done }) => !done);
  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  // localStorage
  function localSpeichern() {
    const localDB = JSON.stringify({ ...todos });
    localStorage.setItem('MyTodos', localDB);
  }
  localSpeichern();

  const doneTodos = todos.filter(({ done }) => done);

  return (
    <>
      <div className="TodoInputContainer">
        {/* Todo hinzufuegen */}
        <input
          onKeyDown={handleAddTodo}
          placeholder="Hier Todo hinzufügen"
          className="InputItem"
        />
      </div>
      {searchQuery ? (
        // Todo suchen
        <Todolist
          title="Suchergebnisse:"
          list={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleAddTodo}
        />
      ) : (
        <>
          {/* Todo zu erledigen  */}
          <Todolist
            title="Zu erledigen 😥"
            list={activeTodos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
          {/* Todo erledigt */}
          <Todolist
            title="Erledigt 😀"
            list={doneTodos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </>
      )}
    </>
  );
};

export default Todo;

import { StrictMode, useState } from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

import '/temp/app.css';

export default function App() {
  // Search Todos
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />

      <div className="MainContainer">
        <Todo searchQuery={searchQuery} />
      </div>
    </div>
  );
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#app')
);

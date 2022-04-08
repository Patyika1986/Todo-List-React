import React from 'react';

const Navbar = ({ onSearchQuery }) => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContent">
        <h1>React Todo-List</h1>
      </div>
      <div className="SearchInputContainer">
        <input
          onChange={onSearchQuery}
          className="InputItem"
          placeholder="Suche"
        />
      </div>
    </div>
  );
};

export default Navbar;

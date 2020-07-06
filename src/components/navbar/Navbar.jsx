import React from 'react';
import { Link } from 'react-router-dom';

import style from './Navbar.module.css';

let random = Math.floor(Math.random() * 100 + 1);

function Navbar() {
  return (
    <div className={style.container}>
      <Link to='/useState'>
        <h1>useState</h1>
      </Link>
      <Link to='/useEffect'>
        <h1>useEffect</h1>
      </Link>
      <Link to='/useEffect/data-fetching'>
        <h1>Data fetching</h1>
      </Link>
      <Link to={`/useParams/${random}`}>
        <h1>useParams</h1>
      </Link>
      <Link to='/custom-hook'>
        <h1>Custom hooks</h1>
      </Link>
      <Link to='/useHistory'>
        <h1>useHistory</h1>
      </Link>
      <Link to='/useRef'>
        <h1>useRef</h1>
      </Link>
      <Link to='/useContext'>
        <h1>useContext</h1>
      </Link>
    </div>
  );
}

export default Navbar;

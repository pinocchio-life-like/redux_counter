import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import {authActions} from '../store/store'

const Header = () => {
  const dispatch = useDispatch()
  const authentication = useSelector(state => state.authentication.isAuthenticated)
  const logoutHandler = () =>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
        {authentication && 
          <>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
           <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          </>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;

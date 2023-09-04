import classes from './Auth.module.css';
import {authActions} from '../store/store'
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch()
  const authentication = useSelector(state => state.authentication.isAuthenticated)
  console.log(authentication)

  const loginHandler = (e)=>{
    e.preventDefault();
    dispatch(authActions.login())
  }
  return (
    authentication === false && <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

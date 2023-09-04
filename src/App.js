import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const authentication = useSelector(state => state.authentication.isAuthenticated)
  return (
    <>
     <Header />
     {authentication ? 
     <>
     <UserProfile />
     <Counter />
     </>
      : <Auth />}
    </>
  );
}

export default App;

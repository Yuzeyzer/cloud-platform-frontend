import Header from './components/header';
import Login from './components/login';
import Registration from './components/registration';
import { AppGlobalStyles } from './app.styles';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div>
      <AppGlobalStyles />
      <Header />
      <Route exact path='/' render={() => <h1>Привет, Зарегайся или Вали</h1>} />
      {!isAuth && (
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Registration} />
        </Switch>
      )}
    </div>
  );
}

export default App;

import Header from './components/header';
import Login from './components/login';
import Registration from './components/registration';
import {AppGlobalStyles} from './app.styles';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <AppGlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <h1>Привет, Зарегайся или Вали</h1>}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Registration}/>
      </Switch>
    </div>
  );
}

export default App;

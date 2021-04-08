import React from 'react';
import Header from './components/header';
import Login from './components/login';
import Registration from './components/registration';
import Disk from './components/disk';
import { AppGlobalStyles } from './app.styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './actions/userAction';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <div className='container'>
      <AppGlobalStyles />
      <Header />
      {!isAuth ? (
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Registration} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path='/' component={Disk} />
          <Redirect to='/' />
        </Switch>
      )}
    </div>
  );
}

export default App;

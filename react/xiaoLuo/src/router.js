import React from 'react';
import {Router, Route, routerRedux, IndexRedirect} from 'dva/router';

import kits from './utils/kits'


export default function ({history, app}) {

  const Login = c => require.ensure([], require => (
    app.model(require('./models/login/loginModel')),
      c(null, require('./routes/login/Login'))
  ));

  const Main = c => require.ensure([], require => (
    app.model(require('./models/main/mainModel')),
      c(null, require('./routes/main/Main'))
  ));

  function interceptPermissions() {
    const token = kits.getCookies('tf-token');
    const uid = kits.getCookies('tf-uid');
    if (!uid || !token) {
      app._store.dispatch(routerRedux.replace('/login'))
    }
  }

  return <Router history={history}>
           <Route name="login" path="/(login)"
                  getComponent={(location, callback) => Login(callback)}/>
           <Route name="main" path="/main"
                  onenter={interceptPermissions()}
                  getComponent={(location, callback) => Main(callback)}>
             <IndexRedirect to="/main/dashboard" />
             <Route path="/main/actives" component={ require('./routes/actives/Actives') } />
             <Route path="*" component={ require('./routes/common/Error') }/>
           </Route>
         </Router>
}
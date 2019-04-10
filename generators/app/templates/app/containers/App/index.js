import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Map from 'containers/MapContainer';
import NotFoundPage from 'containers/NotFoundPage';
import Footer from 'components/Footer';
import MainMenu from 'components/MainMenu';
import HeaderContainer from 'containers/HeaderContainer';
import GlobalError from 'containers/GlobalError';

import reducer from './reducer';
import saga from './saga';

export const App = () => (
  <div className="container app-container">
    <GlobalError />
    <div className="container">
      <HeaderContainer />
    </div>
    <div className="container-fluid">
      <MainMenu />
    </div>
    <div className="content container">
      <Switch>
        <Route exact path="/" component={Map} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
    <div className="container-fluid">
      <Footer />
    </div>
  </div>
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withReducer,
  withSaga,
)(App);

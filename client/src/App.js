import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import auth from './hoc/auth';

import Login from './components/views/LoginPage/Login';
import Navbar from './components/views/NavBar/Navbar';
import DailyStatisticsPage from './components/views/DailyStatisticsPage/DailyStatisticsPage';
import DateSearchPage from './components/views/DateSearchPage/DateSearchPage';
import StatisticsPage from './components/views/StatisticsPage/StatisticsPage';
import SettingPage from './components/views/SettingPage/Setting';
import Footer from './components/views/Footer/Footer';
import TestPage from './components/views/TestPage/TestPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* null => 아무나 진입가능
            true => 로그인한 유저만 가능
            false => 로그인한 유저 출입불가
        */}
        <Switch>
          <Route exact path="/" component={DailyStatisticsPage} />
          <Route exact path="/search" component={auth(DateSearchPage, null)} />
          <Route
            exact
            path="/statistics"
            component={auth(StatisticsPage, null)}
          />
          <Route exact path="/setting" component={auth(SettingPage, true)} />
          <Route exact path="/login" component={auth(Login, false)} />
          <Route exact path="/test" component={auth(TestPage, null)} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

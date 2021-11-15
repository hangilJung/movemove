import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import Login from './components/views/LoginPage/Login';
import Navbar from './components/views/NavBar/Navbar';
import LandingPage from './components/views/LandingPage/LandingPage';
import DateSearchPage from './components/views/DateSearchPage/DateSearchPage';
import StatisticsPage from './components/views/StatisticsPage/StatisticsPage';
import SettingPage from './components/views/SettingPage/SettingPage';
import Footer from './components/views/Footer/Footer';
import KioskPage from './components/views/KioskPage/KioskPage';
import NotFound from './components/views/NotFoundPage';
import TestPage from './components/views/TestPage/Test';
import TestPage2 from './components/views/Test2Page/Test2';
import { Spin } from 'antd';
import SetPage from './components/views/SetPage/SetPage';
import SetRisk from './components/views/SetRiskPage/SetRiskPage';
import SetPassword from './components/views/SetPassword/SetPassword';

function App() {
  return (
    <Suspense
      fallback={
        <Spin>
          <div>...loading</div>
        </Spin>
      }
    >
      <BrowserRouter>
        <Navbar />
        {/* PrivateRoute => 로그인한 유저만 출입가능
           PublicRoute => 아무나 출입 가능
           PublicRoute restricted => 로그인한 유저 출입 불가
       */}
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={LandingPage} />
            <PublicRoute restricted exact path="/login" component={Login} />
            <PrivateRoute exact path="/landing" component={LandingPage} />
            <PublicRoute exact path="/search" component={DateSearchPage} />
            <PrivateRoute exact path="/statistics" component={StatisticsPage} />
            <PrivateRoute exact path="/setting" component={SettingPage} />
            <PublicRoute exact path="/kiosk" component={KioskPage} />
            <PublicRoute exact path="/test" component={TestPage} />
            <PublicRoute exact path="/test2" component={TestPage2} />
            <PublicRoute exact path="/notfound" component={NotFound} />
            <PublicRoute exact path="/set" component={SetPage} />
            <PublicRoute exact path="/setRisk" component={SetRisk} />
            <PublicRoute exact path="/setPassword" component={SetPassword} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

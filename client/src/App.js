import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import Login from './components/views/LoginPage/Login';
import Navbar from './components/views/NavBar/Navbar';
import DailyPage from './components/views/DailyPage/DailyPage';
import DateSearchPage from './components/views/DateSearchPage/DateSearchPage';
import StatisticsPage from './components/views/StatisticsPage/StatisticsPage';
import SettingPage from './components/views/SettingPage/SettingPage';
import Footer from './components/views/Footer/Footer';
import KioskPage from './components/views/KioskPage/KioskPage';
import NotFound from './components/views/NotFoundPage';
import { Spin, Alert } from 'antd';

function App() {
  return (
    <Suspense
      fallback={
        <Spin>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
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
            <PrivateRoute exact path="/" component={DailyPage} />
            <PublicRoute restricted exact path="/login" component={Login} />
            <PrivateRoute exact path="/daily" component={DailyPage} />
            <PublicRoute exact path="/search" component={DateSearchPage} />
            <PrivateRoute exact path="/statistics" component={StatisticsPage} />
            <PrivateRoute exact path="/setting" component={SettingPage} />
            <PublicRoute exact path="/kiosk" component={KioskPage} />
            <PublicRoute exact path="/notfound" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

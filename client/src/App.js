import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import Login from './components/views/LoginPage/Login';
import LandingPage from './components/views/LandingPage/LandingPage';
import DateSearchPage from './components/views/DateSearchPage/DateSearchPage';
import StatisticsPage from './components/views/StatisticsPage/StatisticsPage';
import Nav from './components/views/Nav/Nav';

import HeaderMenu from './components/views/HeaderMenu/HeaderMenu';
import Footer from './components/views/Footer/Footer';
import KioskPage from './components/views/KioskPage/KioskPage';
import Kiosk from './components/views/KioskPage/Kiosk';
import NotFound from './components/views/NotFoundPage';

// =================================
import SettingPage from './components/views/SettingPage/SettingPage';
import AdminSetting from './components/views/SettingPage/Section/AdminSetting';
import WarningSetting from './components/views/SettingPage/Section/WarningSetting';

import SetPage from './components/views/SetPage/SetPage';
import SetRisk from './components/views/SetRiskPage/SetRiskPage';
import SetPassword from './components/views/SetPassword/SetPassword';
import Test from './components/views/TestPage/Test';

// --------------------Monitor------------------
import FirstMonitor from './components/views/Monitor/FirstMonitor';
import SecondMonitor from './components/views/Monitor/SecondMonitor';
import ThirdMonitor from './components/views/Monitor/ThirdMonitor';
import FourthMonitor from './components/views/Monitor/FourthMonitor';

import { Layout, Spin } from 'antd';

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  if (window.location.pathname === '/kiosk')
    return (
      <div>
        <Kiosk />
      </div>
    );

  if (window.location.pathname === '/login')
    return (
      <div>
        <Login />
      </div>
    );

  if (window.location.pathname === '/')
    return (
      <div>
        <Login />
      </div>
    );

  return (
    <Suspense
      fallback={
        <Spin>
          <div>...loading</div>
        </Spin>
      }
    >
      <Layout style={{ backgroundColor: '#F0F2F5', height: '100%' }}>
        <Sider style={{ margin: 10, backgroundColor: '#F1FBFF' }}>
          <Nav className="ant-layout-sider-children" />
        </Sider>
        <Layout>
          <BrowserRouter>
            <Header
              style={{
                backgroundColor: '#F0F2F5',
                width: '100%',
                height: 60,
                padding: '0px 0 10px 0',
                position: 'fixed',
                zIndex: 1000,
              }}
            >
              <HeaderMenu />
            </Header>
            <div style={{ margin: '70px 0 0 90px' }}>
              <Switch>
                <Content>
                  {/* PrivateRoute => 로그인한 유저만 출입가능
           PublicRoute => 아무나 출입 가능
           PublicRoute restricted => 로그인한 유저 출입 불가
       */}
                  {/* -------------landing----- */}
                  <PrivateRoute exact path="/" component={LandingPage} />
                  {/* --------------------monitor---- */}
                  <PrivateRoute exact path="/first" component={FirstMonitor} />
                  <PrivateRoute
                    exact
                    path="/second"
                    component={SecondMonitor}
                  />
                  <PrivateRoute exact path="/third" component={ThirdMonitor} />
                  <PrivateRoute
                    exact
                    path="/fourth"
                    component={FourthMonitor}
                  />

                  <PublicRoute
                    restricted
                    exact
                    path="/login"
                    component={Login}
                  />
                  <PrivateRoute exact path="/landing" component={LandingPage} />
                  <PublicRoute
                    exact
                    path="/search"
                    component={DateSearchPage}
                  />
                  <PrivateRoute
                    exact
                    path="/statistics"
                    component={StatisticsPage}
                  />

                  {/* ---------------------------셋팅페이지----------------------------- */}
                  <PrivateRoute exact path="/setting" component={SettingPage} />
                  <PrivateRoute
                    exact
                    path="/adminsetting"
                    component={AdminSetting}
                  />
                  <PrivateRoute
                    exact
                    path="/warning"
                    component={WarningSetting}
                  />

                  <PublicRoute exact path="/notfound" component={NotFound} />
                  <PublicRoute exact path="/set" component={SetPage} />
                  <PublicRoute exact path="/setRisk" component={SetRisk} />
                  <PublicRoute exact path="/test" component={Test} />
                  <PublicRoute
                    exact
                    path="/setPassword"
                    component={SetPassword}
                  />
                  <PublicRoute exact path="/kiosk" component={Kiosk} />
                </Content>

                {/* <Footer /> */}
              </Switch>
            </div>
          </BrowserRouter>
        </Layout>
      </Layout>
      <BrowserRouter>
        <PublicRoute exact path="/kiosk" component={Kiosk} />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

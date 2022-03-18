import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';
import Login from './components/views/LoginPage/Login';
import LandingPage from './components/views/LandingPage/LandingPage';
import StatisticsPage from './components/views/StatisticsPage/StatisticsPage';
import Nav from './components/views/Nav/Nav';

import HeaderMenu from './components/views/HeaderMenu/HeaderMenu';
import Footer from './components/views/Footer/Footer';
import Kiosk from './components/views/KioskPage/Kiosk';
import Fair from './components/views/Fair/Fair';
import NotFound from './components/views/NotFoundPage';

// --------------------setting-----------------------
import SettingPage from './components/views/SettingPage/SettingPage';
import AdminSetting from './components/views/SettingPage/Section/AdminSetting';
import WarningSetting from './components/views/SettingPage/Section/WarningSetting';

// --------------------Monitor------------------
import FirstMonitor from './components/views/Monitor/FirstMonitor';
import SecondMonitor from './components/views/Monitor/SecondMonitor';
import ThirdMonitor from './components/views/Monitor/ThirdMonitor';
import FourthMonitor from './components/views/Monitor/FourthMonitor';

// ------------------------table-------------------
import FirstMonitorTable from './components/views/TableSections/FirstMonitorTable';
import SecondMonitorTable from './components/views/TableSections/SecondMonitorTable';
import ThirdMonitorTable from './components/views/TableSections/ThirdMonitorTable';
import FourthMonitorTable from './components/views/TableSections/FourthMonitorTable';

import DailyTable from './components/views/TableSections/DailyTable';
import MonthTable from './components/views/TableSections/MonthTable';
import YearTable from './components/views/TableSections/YearTable';

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

  if (window.location.pathname === '/fair')
    return (
      <div>
        <Fair />
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
      <Layout style={{ backgroundColor: '#fff', height: '100%' }}>
        <Sider style={{ margin: 10, backgroundColor: '#F1FBFF' }}>
          <Nav className="ant-layout-sider-children" />
        </Sider>
        <Layout>
          <BrowserRouter>
            <Header
              style={{
                backgroundColor: '#fff',
                width: '100%',
                height: 60,
                padding: '0px 0 10px 0',
                position: 'fixed',
                zIndex: 1000,
              }}
            >
              <HeaderMenu />
            </Header>
            <div style={{ margin: '70px 0 0 90px', backgroundColor: '#fff' }}>
              <Switch>
                <>
                  <Content>
                    {/* PrivateRoute => 로그인한 유저만 출입가능
           PublicRoute => 아무나 출입 가능
           PublicRoute restricted => 로그인한 유저 출입 불가
       */}
                    {/* -------------landing----- */}
                    <PrivateRoute exact path="/" component={LandingPage} />
                    {/* --------------------monitor---- */}
                    <PrivateRoute
                      exact
                      path="/first"
                      component={FirstMonitor}
                    />
                    <PrivateRoute
                      exact
                      path="/second"
                      component={SecondMonitor}
                    />
                    <PrivateRoute
                      exact
                      path="/third"
                      component={ThirdMonitor}
                    />
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
                    <PrivateRoute
                      exact
                      path="/landing"
                      component={LandingPage}
                    />

                    <PrivateRoute
                      exact
                      path="/statistics"
                      component={StatisticsPage}
                    />

                    {/* -------------------Table------------- */}
                    <PrivateRoute
                      exact
                      path="/firsttable"
                      component={FirstMonitorTable}
                    />
                    <PrivateRoute
                      exact
                      path="/secondtable"
                      component={SecondMonitorTable}
                    />
                    <PrivateRoute
                      exact
                      path="/thirdtable"
                      component={ThirdMonitorTable}
                    />
                    <PrivateRoute
                      exact
                      path="/fourthtable"
                      component={FourthMonitorTable}
                    />
                    <PrivateRoute
                      exact
                      path="/dailytable"
                      component={DailyTable}
                    />
                    <PrivateRoute
                      exact
                      path="/monthtable"
                      component={MonthTable}
                    />
                    <PrivateRoute
                      exact
                      path="/yeartable"
                      component={YearTable}
                    />

                    {/* ---------------------------셋팅페이지----------------------------- */}
                    <PrivateRoute
                      exact
                      path="/setting"
                      component={SettingPage}
                    />
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

                    {/* ---------------------kiosk */}
                    <PrivateRoute exact path="/kiosk" component={Kiosk} />
                    <PrivateRoute exact path="/fair" component={Fair} />
                  </Content>

                  {/* <Footer /> */}
                </>
              </Switch>
            </div>
          </BrowserRouter>
        </Layout>
      </Layout>
      <BrowserRouter>
        <PublicRoute exact path="/kiosk" component={Kiosk} />
        <PublicRoute exact path="/fair" component={Fair} />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;


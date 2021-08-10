import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/views/NavBar/Navbar';
import LandingPage from './components/views/LandingPage/LandingPage';
import MeasurementDetailPage from './components/views/MeasurementDetailPage/MeasurementDetailPage';
import AdminPage from './components/views/AdminPage/AdminPage';
import DisasterInfoPage from './components/views/DisasterInfoPage/DisasterInfoPage';
import SafetyMeasuresPage from './components/views/SafetyMeasuresPage/SafetyMeasuresPage';

import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '1rem', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/measurement" component={MeasurementDetailPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/disasterinfo" component={DisasterInfoPage} />
          <Route exact path="/safetymeasures" component={SafetyMeasuresPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

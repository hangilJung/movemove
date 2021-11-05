/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
// import '../../../../Styles/Card.css';
import Daily from './Section/Daily';
import Month from './Section/Month';
import Year from './Section/Year';
import Yearly from './Section/Yearly';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
// import exportingData from 'highcharts/modules/exporting-data';
import { Form, Radio, Button } from 'antd';
exporting(Highcharts);
exportData(Highcharts);

function FirstPoint() {
  return <div></div>;
}
export default FirstPoint;

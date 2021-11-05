/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../../../Styles/Card.css';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
// import exportingData from 'highcharts/modules/exporting-data';
import { Form, Radio, Button } from 'antd';
exporting(Highcharts);
exportData(Highcharts);

function FirstPoint() {
  const [data, setData] = useState([{}]);

  const [StartDate, setStartDate] = useState(moment());
  const [EndDate, setEndDate] = useState(moment());
  const [CreatedAt, setCreatedAt] = useState(moment());

  let waterData = [];
  let preData = [];
  let tempData = [];
  let humData = [];
  let createdAt = [];

  data.map((data) => {
    waterData.push(data.water_level);
  });
  data.map((data) => {
    preData.push(data.precipitation);
  });
  data.map((data) => {
    tempData.push(data.temperature);
  });
  data.map((data) => {
    humData.push(data.humidity);
  });
  data.map((data) => {
    createdAt.push(data.created_at);
  });

  let body = {
    placeId: 1,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  const options = {
    chart: {
      type: 'area', // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    title: {
      text: null,
    },
    tooltip: {
      shared: true,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: createdAt,
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          // format: createdAt,
        },
      },
    },
    series: [
      { name: '수위', data: waterData },
      { name: '강우량', data: preData },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
            'viewFullscreen',
            'separator',
            'downloadPNG',
            'downloadSVG',
            'downloadPDF',
            'separator',
            'downloadXLS',
          ],
        },
      },
      enabled: true,
    },
  };

  console.log(waterData);

  let btn = 'kiosk';

  useEffect(() => {
    axios
      .post(`/api/kiosk/`, { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSelect = (e) => {
    btn = e.target.value;

    axios
      .post(`/api/${btn}`, { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form>
        <Form.Item>
          <Radio.Group onChange={onSelect} defaultValue="1">
            <Radio.Button value="hour">일간</Radio.Button>
            <Radio.Button value="month">월간</Radio.Button>
            <Radio.Button value="year">연간</Radio.Button>
            <Radio.Button value="year">연도별</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <div>
        <Fragment>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Fragment>
      </div>
    </div>
  );
}
export default FirstPoint;

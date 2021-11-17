import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import accessToken from '../../../../../../lib/accessToken';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import { Row, Col, Card, DatePicker, Button, Form } from 'antd';

exporting(Highcharts);

function Daily(props) {
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

  const monthData = createdAt.map((createdAt) => {
    return moment(createdAt).format('YYYY년 MM월 DD일');
  });

  const dateXaxis = createdAt.map((createdAt) => {
    return moment(createdAt).format('DD일');
  });

  let body = {
    placeId: 1,
    startDate: StartDate,
    endDate: EndDate,
    createdAt: CreatedAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/daily/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    axios
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const options = {
    chart: {
      // type: 'area', // bar차트. 아무 설정이 없으면 line chart가 된다.
      // zoomType: 'x',
      width: 600,
      panning: {
        enabled: true,
        type: 'area',
      },
    },
    title: {
      text: null,
    },
    series: [
      { name: '수위', data: waterData },
      { name: '강우량', data: preData },
    ],

    tooltip: {
      shared: true,
    },
    credits: {
      enabled: true,
    },
    xAxis: {
      categories: dateXaxis,
    },
    yAxis: [
      {
        labels: {
          enabled: true,
        },
        title: {
          text: '수위',
        },
        showFirstLabel: false,
      },
      {
        title: {
          text: '강수량',
        },
        labels: {
          enabled: true,
        },
        opposite: true,
      },
    ],

    plotOptions: {
      series: {
        showInNavigator: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    navigator: {
      adaptToUpdatedData: false,
      series: [
        { name: '수위', data: waterData, type: 'areaspline' },
        { name: '강우량', data: preData },
      ],
    },

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

  const secondOptions = {
    chart: {
      // type: 'area', // bar차트. 아무 설정이 없으면 line chart가 된다.
      // zoomType: 'x',
      width: 600,
      panning: {
        enabled: true,
        type: 'area',
      },
    },
    title: {
      text: null,
    },
    series: [
      { name: '온도', data: tempData, type: 'areaspline' },
      { name: '습도', data: humData },
    ],

    tooltip: {
      shared: true,
    },
    credits: {
      enabled: true,
    },
    xAxis: {
      categories: dateXaxis,
    },
    yAxis: [
      {
        labels: {
          enabled: true,
        },
        title: {
          text: '온도',
        },
        showFirstLabel: false,
      },
      {
        title: {
          text: '습도',
        },
        labels: {
          enabled: true,
        },
        opposite: true,
      },
    ],

    plotOptions: {
      series: {
        showInNavigator: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    navigator: {
      adaptToUpdatedData: false,
      series: [
        { name: '온도', data: tempData },
        { name: '습도', data: humData },
      ],
    },

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

  // console.log(waterData);
  // console.log(preData);
  // console.log(tempData);
  // console.log(humData);
  // console.log(dateXaxis);
  // console.log(createdAt);

  return (
    <div>
      <div style={{ marign: '0 auto', textAlign: 'center' }}>
        <h>{monthData[0]}</h>
        <Form.Item>
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년 MM월 DD일')}
            onChange={(date) => setStartDate(date)}
            picker="date"
            style={{ width: 160 }}
          />
          <DatePicker
            locale={locale}
            placeholder={moment().format('YYYY년 MM월 DD일')}
            onChange={(date) => setEndDate(date)}
            picker="date"
            style={{ width: 160 }}
          />

          <Button onClick={onSubmitHandler}>조회</Button>
        </Form.Item>
      </div>
      <div style={{ float: 'left' }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div style={{ float: 'right' }}>
        <HighchartsReact highcharts={Highcharts} options={secondOptions} />
      </div>
    </div>
  );
}

export default Daily;

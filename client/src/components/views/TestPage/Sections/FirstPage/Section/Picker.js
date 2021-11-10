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

function Picker(props) {
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

  const toDay = createdAt.map((createdAt) => {
    return moment(createdAt).format('YYYY년 MM월 DD일');
  });

  const dateXaxis = createdAt.map((createdAt) => {
    return moment(createdAt).format('HH시 mm분');
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
      .post('/api/minute/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (event) => {
    // page refresh를 막아줌
    event.preventDefault();

    axios
      .post('/api/minute', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  // 메인차트
  const WaterChart = (props) => {
    return (
      <div style={{ width: 800 }}>
        <HighchartsReact highcharts={Highcharts} options={props.options} />
        <WaterMasterChart />
      </div>
    );
  };

  // 아래차트
  const WaterMasterChart = (props) => {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            width: 800,
            marginTop: 400,
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={props.options} />
        </div>
      </div>
    );
  };

  const Charts = () => {
    const [WaterChartOptions, setWaterChartOptions] = useState({
      chart: {
        marginBottom: 120,
        reflow: true,
        marginLeft: 50,
        marginRight: 20,
        style: {
          position: 'absolute',
        },
      },
      credits: {
        enabled: false,
      },
      title: { text: '수위 및 강수량' },
      xAxis: {
        categories: dateXaxis,
        tickInterval: 1,
      },
      yAxis: [
        {
          labels: {
            enabled: true,
          },
          plotLines: [
            {
              color: '#FF0000',
              width: 2,
              value: 1,
            },
          ],
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
      tooltip: {
        shared: true,
      },
      legend: {
        enabled: true,
      },
      plotOptions: {
        series: {
          marker: {
            states: {
              hover: {
                enabled: true,
                radius: 3,
              },
            },
          },
        },
      },

      series: [
        { name: '수위', data: waterData, type: 'areaspline', color: '#1E90FF' },
        { name: '강우량', data: preData, color: '#87CEFA' },
      ],
    });

    const [WaterMasterChartOption, setWaterMasterChartOption] = useState({
      chart: {
        height: 100,
        reflow: false,
        borderWidth: 0,
        backgroundColor: null,
        marginLeft: 50,
        marginRight: 20,
        zoomType: 'x',
        events: {
          selection: function (event) {
            var extremesObject = event.xAxis[0],
              min = extremesObject.min,
              max = extremesObject.max,
              detailData = [],
              xAxis = this.xAxis[0];

            this.series[0].data.forEach((data) => {
              if (data.x > min && data.x < max) {
                detailData.push([data.x, data.y]);
              }
            });

            xAxis.removePlotBand('mask-before');
            xAxis.addPlotBand({
              id: 'mask-before',
              from: data[0][0],
              to: min,
              color: 'rgba(0, 0, 0, 0.2)',
            });

            xAxis.removePlotBand('mask-after');
            xAxis.addPlotBand({
              id: 'mask-after',
              from: max,
              to: data[data.length - 1][0],
              color: 'rgba(0, 0, 0, 0.2)',
            });

            setWaterChartOptions({
              series: [{ data: detailData }],
            });
            return false;
          },
        },
      },
      title: {
        text: null,
      },
      accessibility: {
        enabled: false,
      },
      xAxis: {
        showLastTickLabel: true,
        alignTicks: false,
        // plotBands: [
        //   {
        //     id: 'mask-before',
        //     from: data[0][0],
        //     to: data[data.length - 1][0],
        //     color: 'rgba(0, 0, 0, 0.2)',
        //   },
        // ],
        labels: {
          enabled: false,
        },
        tickPixelInterval: false,
        startOnTick: false,
        endOnTick: false,
      },
      yAxis: {
        gridLineWidth: 0,
        // min: 0,
        showFirstLabel: false,
      },
      tooltip: {
        formatter: function () {
          return false;
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          fillColor: {
            linearGradient: [0, 0, 0, 70],
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, 'rgba(255,255,255,0)'],
            ],
          },
          lineWidth: 1,
          marker: {
            enabled: false,
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          enableMouseTracking: false,
        },
      },

      series: [
        { name: '수위', data: waterData, type: 'area' },
        { name: '강우량', data: preData },
      ],

      exporting: {
        enabled: false,
      },
    });

    return (
      <div>
        <WaterChart options={WaterChartOptions} />
        <WaterMasterChart options={WaterMasterChartOption} />
      </div>
    );
  };

  // ---------------------------------------------------온습도차트----------------------------

  // 메인차트
  const TempChart = (props) => {
    return (
      <div style={{ width: 800 }}>
        <HighchartsReact highcharts={Highcharts} options={props.options} />
        <TempMasterChart />
      </div>
    );
  };

  // 아래차트
  const TempMasterChart = (props) => {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            width: 800,
            marginTop: 400,
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={props.options} />
        </div>
      </div>
    );
  };

  const SecondCharts = () => {
    const [TempChartOptions, setTempChartOptions] = useState({
      chart: {
        marginBottom: 120,
        reflow: false,
        marginLeft: 50,
        marginRight: 20,
        style: {
          position: 'absolute',
        },
      },
      credits: {
        enabled: false,
      },

      title: { text: '온도 및 습도' },
      xAxis: {
        categories: dateXaxis,
      },
      yAxis: [
        {
          labels: {
            enabled: false,
          },
          title: {
            text: '온도',
          },
          min: 0.6,
          showFirstLabel: false,
        },
        {
          title: {
            text: '습도',
          },
          labels: {
            enabled: false,
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        enabled: true,
      },
      plotOptions: {
        series: {
          marker: {
            states: {
              hover: {
                enabled: true,
                radius: 3,
              },
            },
          },
        },
      },
      series: [
        { name: '온도', data: tempData, type: 'areaspline' },
        { name: '습도', data: humData },
      ],
    });

    const [TempMasterChartOptions, setTempMasterChartOptions] = useState({
      chart: {
        height: 100,
        reflow: false,
        borderWidth: 0,
        backgroundColor: null,
        marginLeft: 50,
        marginRight: 20,
        zoomType: 'x',
        events: {
          selection: function (event) {
            var extremesObject = event.xAxis[0],
              min = extremesObject.min,
              max = extremesObject.max,
              detailData = [],
              xAxis = this.xAxis[0];

            this.series[0].data.forEach((data) => {
              if (data.x > min && data.x < max) {
                detailData.push([data.x, data.y]);
              }
            });

            xAxis.removePlotBand('mask-before');
            xAxis.addPlotBand({
              id: 'mask-before',
              from: data[0][0],
              to: min,
              color: '##82ca9d',
            });

            xAxis.removePlotBand('mask-after');
            xAxis.addPlotBand({
              id: 'mask-after',
              from: max,
              to: data[data.length - 1][0],
              color: '#FF8C00',
            });

            setTempChartOptions({
              series: [{ data: detailData }],
            });
            return false;
          },
        },
      },
      title: {
        text: null,
      },
      accessibility: {
        enabled: false,
      },
      xAxis: {
        alignTicks: false,
        labels: {
          enabled: false,
        },
        tickPixelInterval: false,
        startOnTick: false,
        endOnTick: false,
      },
      yAxis: {
        gridLineWidth: 0,

        min: 0.6,
        showFirstLabel: false,
      },
      tooltip: {
        formatter: function () {
          return false;
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          fillColor: {
            linearGradient: [0, 0, 0, 70],
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, 'rgba(255,255,255,0)'],
            ],
          },
          lineWidth: 1,
          marker: {
            enabled: false,
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          enableMouseTracking: false,
        },
      },

      series: [
        { name: '온도', data: tempData },
        { name: '습도', data: humData },
      ],

      exporting: {
        enabled: false,
      },
    });

    return (
      <div>
        <TempChart options={TempChartOptions} />
        <TempMasterChart options={TempMasterChartOptions} />
      </div>
    );
  };

  // console.log('수위 : ' + waterData);
  // console.log('강수량 : ' + preData);
  // console.log('온도 : ' + tempData);
  // console.log('습도 : ' + humData);

  // -----------------------------------------------------------------

  return (
    <div style={{ marign: '0 auto', textAlign: 'center' }}>
      <Form.Item>
        <DatePicker
          locale={locale}
          placeholder={moment().format('YYYY년 MM월 DD일')}
          onChange={(date) => setStartDate(date)}
          picker="date"
          style={{ width: 160 }}
        />

        <Button onClick={onSubmitHandler}>조회</Button>
      </Form.Item>
      <div>
        <p style={{ fontSize: 30 }}>{toDay[0]}</p>
      </div>
      <div style={{ float: 'left' }}>
        <Charts />
      </div>
      <div style={{ float: 'right' }}>
        <SecondCharts />
      </div>
    </div>
  );
}

export default Picker;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import accessToken from '../../../lib/accessToken';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import exportingData from 'highcharts/modules/export-data';
import { Row, Col, Card, Button } from 'antd';

exporting(Highcharts);
exportingData(Highcharts);

function FourthMonitor(props) {
  const [data, setData] = useState([{}]);
  const [warningData, setWarningData] = useState([{}]);

  const [placeId, setPlaceId] = useState(props.value);
  const [startDate, setStartDate] = useState(moment().format());
  const [endDate, setEndDate] = useState(moment().format());
  const [createdAt, setCreatedAt] = useState(moment().format());

  let waterData = [];
  let preData = [];
  let tempData = [];
  let humData = [];
  let createdDate = [];

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
    createdDate.push(data.created_at);
  });

  const dateXaxis = createdDate.map((createdAt) => {
    return moment(createdAt).format('HH시 mm분');
  });

  let body = {
    placeId: 4,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/minute/', { body })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(moment().format('HH:mm:ss'), err));
    axios
      .post('/api/warningdata', { body })
      .then((res) => {
        setWarningData(res.data.body);
      })
      .catch(
        axios.post('/api/warningdata', { body }).then((res) => {
          setWarningData(res.data.body);
        })
      );
  }, []);

  // 메인차트
  const WaterChart = (props) => {
    return (
      <div style={{ width: 1100 }}>
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
            width: 1100,
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
        // marginBottom: 120,
        reflow: true,
        marginLeft: 50,
        marginRight: 20,
        style: {
          padding: 10,
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
          title: {
            text: '수위',
            align: 'high',
            offset: 0,
            rotation: 0,
            y: -10,
            x: -10,
          },
          showFirstLabel: true,
        },
        {
          title: {
            text: '강수량',
            align: 'high',
            offset: 0,
            rotation: 0,
            y: -10,
            x: 0,
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
        areaspline: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get('rgba'),
              ],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        { name: '수위', data: waterData, type: 'areaspline', color: '#1E90FF' },
        { name: '강수량', data: preData, color: '#87CEFA', yAxis: 1 },
      ],
    });

    const [WaterMasterChartOption, setWaterMasterChartOption] = useState({
      chart: {
        height: 100,
        reflow: false,
        borderWidth: 0,
        backgroundColor: null,
        marginLeft: 60,
        marginRight: 30,
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
        labels: {
          enabled: false,
        },
        tickPixelInterval: false,
        startOnTick: false,
        endOnTick: false,
      },
      yAxis: {
        gridLineWidth: 0,
        showFirstLabel: false,
        title: {
          text: null,
        },
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
        { name: '강수량', data: preData },
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
      <div style={{ width: 1100 }}>
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
            width: 1100,
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
        reflow: true,
        marginLeft: 50,
        marginRight: 20,
        style: {
          padding: 10,
        },
      },
      credits: {
        enabled: false,
      },

      title: { text: '온도 및 습도' },
      xAxis: {
        categories: dateXaxis,
        tickInterval: 1,
      },
      yAxis: [
        {
          labels: {
            enabled: true,
          },
          title: {
            text: '온도',
            align: 'high',
            offset: 0,
            rotation: 0,
            y: -10,
            x: -10,
          },
          showFirstLabel: true,
        },
        {
          title: {
            text: '습도',
            align: 'high',
            offset: 0,
            rotation: 0,
            y: -10,
            x: 10,
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
        areaspline: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get('rgba'),
              ],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        { name: '온도', data: tempData, type: 'areaspline' },
        { name: '습도', data: humData, color: '#82ca9d', yAxis: 1 },
      ],
    });

    const [TempMasterChartOptions, setTempMasterChartOptions] = useState({
      chart: {
        height: 100,
        reflow: false,
        borderWidth: 0,
        backgroundColor: null,
        marginLeft: 60,
        marginRight: 30,
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
        showFirstLabel: false,
        title: {
          text: null,
        },
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

  // 위험설정값

  let Boundary = {};
  let Danger = {};

  const getWarningData = data.map((item) => {
    if (item.water_level_boundary !== null) {
      Boundary = item.water_level_boundary;
    } else {
      Boundary = 0;
    }
    if (item.water_level_danger !== null) {
      Danger = item.water_level_danger;
    } else {
      Danger = 0;
    }
  });

  // 수위 최근값

  let getWaterLevel = {};

  if (data.length > 0) {
    getWaterLevel = data[data.length - 1].water_level;
  } else {
    getWaterLevel = '-';
  }

  const waterBoxData = getWaterLevel;

  // 강수량 최근값

  let getPreLevel = {};

  if (data.length > 0) {
    getPreLevel = data[data.length - 1].precipitation;
  } else {
    getPreLevel = '-';
  }

  const preBoxData = getPreLevel;

  //온도 최근값

  let getTempData = {};

  if (data.length > 0) {
    getTempData = data[data.length - 1].temperature;
  } else {
    getTempData = '-';
  }

  const tempBoxData = getTempData;

  //습도 최근값

  let getHumData = {};

  if (data.length > 0) {
    getHumData = data[data.length - 1].humidity;
  } else {
    getHumData = '-';
  }

  const humBoxData = getHumData;

  return (
    <div
      style={{
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
        textAlign: 'center',
        height: '100%',
        width: 1400,
      }}
    >
      <div>
        <div
          style={{
            marginTop: 20,
            marginLeft: 450,
            height: 60,
            fontSize: 30,
            padding: '0 0 10px 0',
          }}
        >
          <p>원용당교 실시간 모니터링</p>
        </div>
        <Row gutter={16} style={{ marginTop: 30, fontSize: 17 }}>
          <Col span={4} style={{ marginLeft: 30, width: 300 }}>
            <Card
              style={{
                width: 200,
                height: 150,
                marginLeft: 50,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
              headStyle={{
                height: 50,
                fontSize: 20,
              }}
              title="위험도"
            >
              <p> 경계수위 : {Boundary}</p>
              <p>위험수위 : {Danger}</p>
            </Card>
            <Card
              style={{
                width: 200,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: 20,
                margin: '30px 0 0 50px',
              }}
              headStyle={{
                height: 40,
                fontSize: 20,
              }}
              title="수위"
            >
              {waterBoxData}M
            </Card>
            <Card
              style={{
                width: 200,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: 20,
                margin: '30px 0 0 50px',
              }}
              headStyle={{
                height: 40,
                fontSize: 20,
              }}
              title="강수량"
            >
              {preBoxData}mm
            </Card>
            <Card
              style={{
                width: 200,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: 20,
                margin: '30px 0 0 50px',
              }}
              headStyle={{
                height: 40,
                fontSize: 20,
              }}
              bodyStyle={{ margin: '0 auto' }}
              title="온도"
            >
              {tempBoxData}℃
            </Card>
            <Card
              style={{
                width: 200,
                height: 110,
                backgroundColor: '#fff',
                borderRadius: 20,
                margin: '30px 0 0 50px',
              }}
              headStyle={{
                height: 40,
                fontSize: 20,
              }}
              title="습도"
            >
              {humBoxData}%
            </Card>
          </Col>
          <Col span={18} style={{ marginLeft: 80 }}>
            <Button
              href="/fourthtable"
              style={{
                position: 'absolute',
                zIndex: 999,
                top: 45,
                left: 80,
                border: 'none ',
                boxShadow: 'none',
                width: 60,
              }}
            >
              <img
                src="img/tableicon.png"
                alt="tableicon"
                style={{ width: '100%' }}
              />
            </Button>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                marginBottom: 10,
                paddingTop: 40,
                paddingLeft: 40,
                width: 1180,
              }}
            >
              <Charts />
            </div>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                paddingLeft: 40,
                width: 1180,
              }}
            >
              <SecondCharts />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FourthMonitor;

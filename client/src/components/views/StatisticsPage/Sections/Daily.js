import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import accessToken from '../../../../lib/accessToken';
import locale from 'antd/lib/date-picker/locale/ko_KR';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import exporting from 'highcharts/modules/exporting';
import { DatePicker, Form, Button, Select } from 'antd';

exporting(Highcharts);

function Daily(props) {
  const [data, setData] = useState([{}]);
  const [placeId, setPlaceId] = useState('1');
  const [warningData, setWarningData] = useState([{}]);
  const [setup, setSetup] = useState([
    {
      place_id: 1,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 2,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 3,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
    {
      place_id: 4,
      water_level_attention: '',
      water_level_caution: '',
      water_level_boundary: '',
      water_level_danger: '',
    },
  ]);

  const { Option } = Select;

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

  let body = {
    placeId: placeId,
    startDate: startDate,
    endDate: endDate,
    createdAt: createdAt,
  };

  useEffect(() => {
    accessToken(props);

    axios
      .post('/api/daily', { body })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [placeId]);

  const handleChange = (value) => {
    setPlaceId(value);
  };

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

  let firstDanger = [];

  let secondDanger = [];

  let thirdDanger = [];

  let fourthDanger = [];

  data.map((data) => {
    if (data.place_id === 1) {
      firstDanger.push(data.water_level_danger);
    } else if (data.place_id === 2) {
      secondDanger.push(data.water_level_danger);
    } else if (data.place_id === 3) {
      thirdDanger.push(data.water_level_danger);
    } else if (data.place_id === 4) {
      fourthDanger.push(data.water_level_danger);
    }
  });

  // 메인차트
  const WaterChart = (props) => {
    return (
      <div style={{ width: 1400 }}>
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
            width: 1400,
          }}
        >
          <HighchartsReact highcharts={Highcharts} options={props.options} />
        </div>
      </div>
    );
  };

  const dateXaxis = createdDate.map((createdAt) => {
    return moment(createdAt).format('MM월 DD일 HH시');
  });

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
      <div style={{ width: 1400 }}>
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
            width: 1400,
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

  return (
    <div
      style={{
        fontFamily: 'Noto Sans CJK KR',
        fontStyle: 'normal',
        fontSize: 20,
      }}
    >
      <Select
        defaultValue="순천만습지"
        style={{ width: 160, marginBottom: 30 }}
        onChange={handleChange}
      >
        <Option value="1">순천만습지</Option>
        <Option value="2">조곡교</Option>
        <Option value="3">용당교</Option>
        <Option value="4">원용당교</Option>
      </Select>
      <Form style={{ margin: '-50px 0 0 500px' }}>
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

          <Button onClick={onSubmitHandler}>
            <p>조회</p>
          </Button>
        </Form.Item>
      </Form>
      <div>
        <p>일간 평균 데이터</p>
        <Button
          href="/dailytable"
          style={{
            zIndex: 999,
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
          }}
        >
          <Charts />
        </div>
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
        >
          <SecondCharts />
        </div>
      </div>
    </div>
  );
}

export default Daily;

import React, { useState, Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function TestSearch(props) {
  const [data, setdata] = useState([]);

  const options = {
    chart: {
      type: 'bar', // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    title: {
      text: '수위',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'create_at',
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          format: '<b>{point.y}</b>',
        },
      },
    },
    series: [{ name: 'data', data: props.data }],
  };
  // console.log(props.data[0].water_level);
  return (
    <div>
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Fragment>
    </div>
  );
}

export default TestSearch;

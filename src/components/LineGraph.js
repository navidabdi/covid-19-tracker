import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const config = {
  type: 'line',
  elements: {
    point: {
      radius: 0,
    },
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  },
};
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  // tooltips: {
  //   mode: 'index',
  //   intersect: false,
  //   callbacks: {
  //     label: function (tooltipItem, data) {
  //       return numeral(tooltipItem.value).format('+0,0');
  //     },
  //   },
  // },
  // scales: {
  //   xAxes: [
  //     {
  //       type: 'time',
  //       time: {
  //         format: 'MM/DD/YY',
  //         tooltipFormat: 'll',
  //       },
  //     },
  //   ],
  //   yAxes: [
  //     {
  //       gridLines: {
  //         display: false,
  //       },
  //       ticks: {
  //         // Include a dollar sign in the ticks
  //         callback: function (value, index, values) {
  //           return numeral(value).format('0a');
  //         },
  //       },
  //     },
  //   ],
  // },
};

const buildChartData = (data, casesType = 'cases') => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

const LineGraph = ({ casesType }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
          // console.log(data);
          // buildChart(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: '#e000007f',
                borderColor: '#b70202',
                data: data,
              },
            ],
          }}
          options={config}
        />
      )}
    </div>
  );
};

export default LineGraph;

'use strict';
/* eslint-disable */

// Chartjs lib
const chartRound1 = document.querySelector('.chart-round-1');
const chartRound2 = document.querySelector('.chart-round-2');
const chartLines = document.querySelector('.chart-line');

const myChartRound1 = new Chart(chartRound1, {
  type: 'pie',
  data: {
    datasets: [
      {
        label: '',
        data: [20, 45, 35, 0],
        backgroundColor: [
          '#c77732',
          '#194c61',
          '#2a6f90',
        ],
        borderColor: [
          '#c77732',
          '#194c61',
          '#2a6f90',
        ],
        borderWidth: 0,
      },
    ],
    labels: [
      'Operational Costs: 20',
      'Upfront Costs: 45',
      'Recurring Costs: 35',
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Average Non-Traded REIT Competitor',
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total = 28.77%',
          fontColor: 'rgb(109, 109, 109)',
          fontSize: 14,
          fontStyle: 'bold',
          padding: 20,
        },
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      }],
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 20,
      },
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data.labels[tooltipItem.index];
        },
      },
    },
  },
});

const myChartRound2 = new Chart(chartRound2, {
  type: 'pie',
  data: {
    datasets: [
      {
        label: '',
        data: [25, 53, 7, 15],
        backgroundColor: [
          'transparent',
          'transparent',
          '#194c61',
          '#2a6f90',
        ],
        borderColor: [
          '#c77732',
          'transparent',
          '#194c61',
          '#2a6f90',
        ],
        borderWidth: 1,
      },
    ],
    labels: [
      'Operational Costs: 0',
      '',
      'Recurring Costs: 7',
      'Upfront Costs: 15',
    ],
  },
  options: {
    title: {
      display: true,
      text: 'stREITwise',
    },
    legendCallback: function() {
      return `<ul>
        <li>Operational Costs</li>
        <li>Recurring Costs</li>
        <li>Upfront Costs</li>
      </ul>`;
    },
    legend: {
      display: false,
      position: 'right',
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Total = 13.00%',
          fontColor: 'rgb(109, 109, 109)',
          fontSize: 14,
          fontStyle: 'bold',
          padding: 20,
        },
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      }],
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 20,
      },
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data.labels[tooltipItem.index];
        },
      },
    },
  },
});

document.getElementById('chart-legend').innerHTML = myChartRound2.generateLegend();

const myChartLines = new Chart(chartLines, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Real Estate',
        data: [
          NaN, 0.8, 1.2, 2, 2.2, 2.6,
          2.9, 3.1, 3.5, 3.7, 4, 3.7,
          4, 4.2, 4.6, 4.65, 4.6, 4.8,
        ],
        borderColor: '#ce8039',
        fill: false,
        lineTension: 0,
        pointBorderWidth: 3,
        pointBackgroundColor: '#ce8039',
      },
      {
        label: 'S&P',
        data: [
          NaN, 0.8, 0.9, 1, 0.6, 0.8, 1.2,
          1.5, 1.15, 0.6, 0.9, 1.3, 1.8,
          1.82, 1.6, 1.8, 1.81, 1.79,
        ],
        borderColor: '#309fcc',
        fill: false,
        lineTension: 0,
        pointStyle: 'rect',
        pointBorderWidth: 3,
        pointBackgroundColor: '#309fcc',
        pointRotation: 40,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 10,
        top: 20,
        right: 10,
        bottom: 30,
      },
    },
    title: {
      display: true,
      text: 'Real Estate vs. Stock Market',
      fontSize: 20,
      fontColor: '#fff',
      padding: 25,
    },
    legend: {
      position: 'right',
      padding: 20,
      labels: {
        boxWidth: 3,
        fontSize: 12,
        fontColor: '#fff',
        fontStyle: 'bold',
        usePointStyle: true,
      },
    },
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: [
            '', '00', '01', '02', '03', '04',
            '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '',
          ],
          ticks: {
            fontColor: '#fff',
            padding: -6,
          },
          gridLines: {
            display: false,
            tickMarkLength: 10,
            offsetGridLines: true,
            color: '#fff',
          },
        },
      ],
      yAxes: [{
        ticks: {
          max: 5,
          min: 0,
          stepSize: 1,
          display: false,
        },
        gridLines: {
          color: '#567A89',
          lineWidth: 2,
          drawBorder: false,
          drawTicks: false,
          zeroLineColor: '#5D7F8B',
          zeroLineWidth: 2,
        },
        scaleLabel: {
          display: true,
          labelString: 'Growth (%)',
          fontColor: '#fff',
          fontSize: 16,
          padding: 20,
        },
      }],
    },
  },
});

// Highcharts lib

document.addEventListener('DOMContentLoaded', function() {
  const chart = Highcharts.chart('lineChart', {
    chart: {
      type: 'line',
      spacingLeft: 20,
      spacingTop: 30,
      spacingRight: 20,
      spacingBottom: 40,
      backgroundColor: '#1a4e64',
      height: 500,
    },
    title: {
      text: 'Real Estate vs. Stock Market',
      margin: 30,
      style: {
        color: '#fff',
        fontWeight: 'bold',
      },
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      itemStyle: {
        color: '#fff',
      },
      itemMarginBottom: 10,
      layout: 'vertical',
    },
    xAxis: {
      max: 16.99,
      min: 0,
      lineColor: '#5D7F8B',
      lineWidth: 2,
      tickColor: '#5D7F8B',
      tickInterval: 1,
      labels: {
        formatter: function() {
          return this.value < 10 ? ('0' + this.value) : this.value;
        },
        style: {
          color: '#fff',
        },
        step: 1,
        x: 8,
        align: 'left',
      },
    },
    yAxis: {
      max: 5,
      gridLineColor: '#567A89',
      gridLineWidth: 2,
      title: {
        text: 'Growth (%)',
        margin: 30,
        style: {
          color: '#fff',
          fontSize: 16,
        },
      },
      labels: {
        enabled: false,
      },
    },
    series: [
      {
        type: 'line',
        name: 'Real Estate',
        data: [
          [0.5, 0.8],
          [1.5, 1.2],
          [2.5, 2],
          [3.5, 2.2],
          [4.5, 2.6],
          [5.5, 2.9],
          [6.5, 3.1],
          [7.5, 3.5],
          [8.5, 3.7],
          [9.5, 4],
          [10.5, 3.7],
          [11.5, 4],
          [12.5, 4.2],
          [13.5, 4.6],
          [14.5, 4.65],
          [15.5, 4.6],
          [16.5, 4.8],
        ],
        color: '#ce8039',
      },
      {
        type: 'line',
        name: 'S&P',
        data: [
          [0.5, 0.8],
          [1.5, 0.9],
          [2.5, 1],
          [3.5, 0.6],
          [4.5, 0.8],
          [5.5, 1.2],
          [6.5, 1.5],
          [7.5, 1.15],
          [8.5, 0.6],
          [9.5, 0.9],
          [10.5, 1.3],
          [11.5, 1.8],
          [12.5, 1.82],
          [13.5, 1.6],
          [14.5, 1.8],
          [15.5, 1.81],
          [16.5, 1.79],
        ],
        color: '#309fcc',
      },
    ],
  });
});

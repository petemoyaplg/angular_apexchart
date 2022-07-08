import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { Component } from '@angular/core';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis | undefined;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @ViewChild('chart') chart?: ChartComponent;
  public chartOptions;

  private series: ApexAxisChartSeries = [
    {
      name: 'basic1',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
    {
      name: 'basic2',
      data: [250, 340, 500, 700, 200, 150, 230, 1500, 1105, 1390],
    },
  ];

  private chart: ApexChart = {
    type: 'area',
    height: 350,
  };

  constructor() {
    this.chartOptions = {
      series: this.series,
      chart: this.chart,
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    };
  }
}

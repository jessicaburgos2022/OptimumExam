import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  // for polar
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTheme,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexPlotOptions,
} from "ng-apexcharts";

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  
};

export type PolarChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  @ViewChild("chart") chart: ChartComponent;
  public barChartOptions: Partial<BarChartOptions>;
  public PolarChartOptions: Partial<PolarChartOptions>;

  constructor() {
    this.barChartOptions = {
      
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      
      
      chart: {
        height: 350,
        type: "bar",
        
        
      },
      title: {
        // text: "Bar Chart",
        text: "",
      },

      yaxis: {
        show: true,
        labels: {
          style: {
            colors: '#ffffff',
            fontSize: '12px'
          }
        }
      },
                                    
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",

        ],
        labels: {
          style: {
            colors: '#ffffff',
            fontSize: '12px'
          }
        }
        
      }
    };

    this.PolarChartOptions = {
      series: [42, 39, 35, 29, 26],
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          // enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
      
    };
  }
}

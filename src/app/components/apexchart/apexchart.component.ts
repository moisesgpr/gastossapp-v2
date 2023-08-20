import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-apexchart',
  templateUrl: './apexchart.component.html',
  styleUrls: ['./apexchart.component.css']
})
export class ApexchartComponent {

  daysDropdown:boolean = false;

  constructor(){
        // ApexCharts options and config
        window.addEventListener("load", function() {
          const getChartOptions = () => {
              return {
                series: [35.1, 23.5, 2.4, 5.4],
                colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
                chart: {
                  height: 320,
                  width: "100%",
                  type: "donut",
                },
                stroke: {
                  colors: ["transparent"],
                  lineCap: "",
                },
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        name: {
                          show: true,
                          fontFamily: "Inter, sans-serif",
                          offsetY: 20,
                        },
                        total: {
                          showAlways: true,
                          show: true,
                          label: "Total",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: '',
                          formatter: function (w:any) {
                            const sum = w.globals.seriesTotals.reduce((a:any, b:any) => {
                              return a + b
                            }, 0)
                            return `${sum}k`
                          },
                        },
                        value: {
                          show: true,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 'bold',
                          fontSize: '2rem',
                          offsetY: -20,
                          formatter: function (value:any) {
                            return value + "k"
                          },
                        },
                      },
                      size: "80%",
                    },
                  },
                },
                grid: {
                  padding: {
                    top: -2,
                  },
                },
                labels: ["Entretenimiento", "Servicios", "Comida", "Otros"],
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  position: "bottom",
                  fontFamily: "Inter, sans-serif",
                },
                yaxis: {
                  labels: {
                    formatter: function (value: any) {
                      return value + "k"
                    },
                  },
                },
                xaxis: {
                  labels: {
                    formatter: function (value: any) {
                      return value  + "k"
                    },
                  },
                  axisTicks: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                  },
                },
              }
            }
      
            if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
              const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
              chart.render();
      
              // Get all the checkboxes by their class name
              // const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');
      
              // // Function to handle the checkbox change event
              // function handleCheckboxChange(event: any, chart:any) {
              //     const checkbox = event.target;
              //     if (checkbox.checked) {
              //         switch(checkbox.value) {
              //           case 'desktop':
              //             chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
              //             break;
              //           case 'tablet':
              //             chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
              //             break;
              //           case 'mobile':
              //             chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
              //             break;
              //           default:
              //             chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
              //         }
      
              //     } else {
              //         chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
              //     }
              // }
      
              // // Attach the event listener to each checkbox
              // checkboxes.forEach((checkbox) => {
              //     checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
              // });
            }
        });
  }

  toggleDaysDropdown(){
    this.daysDropdown = !this.daysDropdown
  }
}

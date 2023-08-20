import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  menuExpanded = false;

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }
  // TODO - aggregar en este array categorias de las operaciones cargadas desde el el servicio de operaciones
  public doughnutChartLabels: string[] = [
    'Entretenimiento',
    'Comida',
    'Servicios',
  ];


  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events al clickear el grafico
  public chartHovered({ event, active }: { event: ChartEvent; active: object[]; }): void {
    console.log(event, active);
  }

}

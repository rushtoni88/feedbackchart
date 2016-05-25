import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'chart-component',
  templateUrl: 'app/chart.component/chart.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ChartComponent {
  // Radar
  
    public radarChartLabels:string[] = ['Website Speed', 'Navigation', 'Ease of Use', 'Design', 'Products'];

    public radarChartData:any = [
        {data: [65, 59, 90, 81, 20], label: 'Series A'},
        {data: [28, 48, 40, 19, 96], label: 'Series B'}
    ];
    public radarChartType:string = 'radar';
    
      // lineChart
    public lineChartData:Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    
    public lineChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    public lineChartType:string = 'line';
    public pieChartType:string = 'pie';


    // Pie
    public pieChartLabels:string[] = ['E-Card', 'Gift Card', 'No Card'];
    public pieChartData:number[] = [300, 500, 100];

    public randomizeType():void {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    }

    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

}
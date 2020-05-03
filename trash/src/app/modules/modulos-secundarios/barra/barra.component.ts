import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public barChartOptions={
    scaleShowVerticalLines:false,
    responsive:true
  }

  public barChartLabels=['1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014'];
  public barChartType='bar';
  public barChartLegend=true;

  public barChartData=[
    {data:[5.2,0.2,0.3,1.1,1.7,1.8,1.6,1.7,0.3,0.2,0.3,1.2,1.5,0.4,0.3,1.5], label:'Reciclaje'},
    {data:[3.6,0.1,0.05,0.8,0.7,1.2,0.7,0.9,0.1,0.1,0.05,0.1,0.2,0.2,0,0.5], label:'Tratamiento'}
  ];

}

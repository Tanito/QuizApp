// import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AuthService } from 'src/app/services/auth.service';
import * as Highcharts from 'highcharts';
import { Storage } from '@ionic/storage';

import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit/* , ViewChild  */{

  //@ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  firstName: string;
  lastName: string;
  email: string;
  id: number;
  birthdate: Date;
  cellphone: number;
  photo: string;
  type: string;

  //doughnutChart: any;

  constructor(private tabsPage: TabsPage,
              private authService: AuthService,
              private storage: Storage,) { }

  ngOnInit() {
    this.cargarStorage();
  }

  ngAfterViewInit() {
    //this.doughnutChartMethod();
  }

  cargarStorage(){
    this.storage.get('User').then(val => { 
    this.firstName = val.user.firstName; 
    this.lastName= val.user.lastName;
    this.email= val.user.email;
    this.id= val.user.id;
    this.birthdate= val.user.birthdate;    
    this.cellphone= val.user.cellphone;
    this.photo= val.user.photo;
    this.type= val.user.type;
 })
  }

  openFirst(){
    this.tabsPage.openFirst()
  }
  
  changeAuth(){
    this.authService.changeAuth()
  }

  // GRÁFICO DONA
/*   doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [15, 85],
          backgroundColor: [
            "#e74c3c",
            "#2ecc71"
          ]
        }]
      }
    });
  } */

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title:{
      text: null
  },
  legend:{
  enabled: false
  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
   series: [{
    data: [{
      name: 'Informática',
      y: 61.41
    }, {
      name: 'Matemática',
      y: 11.84
    }, {
      name: 'Geografía',
      y: 10.85
    }, {
      name: 'Historia',
      y: 4.67
    }, {
      name: 'Química',
      y: 4.18
    }, {
      name: 'Other',
      y: 7.05
    }],
    type: 'pie',

  }]
  };
}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as Chart from 'chart.js';
import { draw, generate } from 'patternomaly/';
 
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


   @ViewChild("radarChart", { static: true }) radarChart: ElementRef;

  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  @ViewChild("barCanvas2", { static: true }) barCanvas2: ElementRef;

  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  private barChart: Chart;
  private barChart2: Chart;

  data:any=[this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio()];
  constructor() {
    setTimeout(() => {
      this.barChartUpdate();
      console.log("object");
    }, 5000);
  }
  type: string = "bar";

  aleatorio() {
    return Math.round(Math.random() * (25 - 6) + 6);
  }

  onClick(){
  this.barChartUpdate();

}

  barChartUpdate() {
    console.log("barChartUpdate");
 this.data=[this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio(),this.aleatorio()]

 this.barChart2.data.datasets[0].data=this.data;

 this.barChart2.update();
console.log(this.barChart2.data.datasets[0].data);
 //  this.barChart = new Chart(this.barCanvas.nativeElement, {
//   type: "bar",
//   data: {

//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: this.data,
//         backgroundColor: [
//           draw('square', '#1f77b4'),
//           //draw('line-diagonal-rl', '#e377c2'),
//           //draw('circle', '#ff7f0e'),
//           draw('diamond', '#2ca02c'),
//           draw('triangle-inverted', '#bcbd22'),
//           //draw('line-horizontal', '#d62728'),
//           //draw('zigzag-horizontal', '#17becf'),
//           draw('line-vertical', '#9467bd'),
//           draw('triangle', '#7f7f7f'),
//           //draw('line-diagonal-lr', '#8c564b'),
//           draw('zigzag-vertical', '#3366cc')
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)"
//         ],
//         borderWidth: 1
//       }
//     ]

//   },

//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true
//           }
//         }
//       ]
//     },
//     events: ['click']
//   }
// });
  } 

  ngOnInit() {
     this.barChart = new Chart(this.radarChart.nativeElement, {

      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [20, 10, 4, 2]
        }]
    },
      options : {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }

    })



    this.barChart2 = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {

        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: this.data,
            backgroundColor: [
              draw('square', '#1f77b4'),
              //draw('line-diagonal-rl', '#e377c2'),
              //draw('circle', '#ff7f0e'),
              draw('diamond', '#2ca02c'),
              draw('triangle-inverted', '#bcbd22'),
              //draw('line-horizontal', '#d62728'),
              //draw('zigzag-horizontal', '#17becf'),
              draw('line-vertical', '#9467bd'),
              draw('triangle', '#7f7f7f'),
              //draw('line-diagonal-lr', '#8c564b'),
              draw('zigzag-vertical', '#3366cc')
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]

      },

      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        events: ['click']
      }
    });

    this.barChart = new Chart(this.barCanvas2.nativeElement, {
      type: "bar",
      data: {

        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 13, 15, 12, 13],
            backgroundColor: generate([
              '#1f77b4',
              '#e377c2',
              '#ff7f0e',
              '#2ca02c',
              '#bcbd22',
              '#d62728',
              '#17becf',
              '#9467bd',
              '#7f7f7f',
              '#8c564b',
              '#3366cc',
            ]),
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]

      },

      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        events: ['click']
      }
    });



    var img = new Image();
    img.src = '/assets/no-image.png';
    img.onload = function (e) {
      console.log(e);
    }

    this.barChart = new Chart(this.lineCanvas.nativeElement, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['rgb(255, 99, 132)'],
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      }
    });

  }
}
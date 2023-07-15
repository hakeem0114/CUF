/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
//React Imports
import { useEffect } from "react"
//Page Imports

//Component Imports 

//Style Imports
import Chart, { plugins} from 'chart.js/auto';

//Api Imports


const Analytics = (props) => {
  // Chart.register(...registerables);

  //Add chart to canvas you create in react div that is returned
  useEffect(()=>{

    /*******CHART 1***/
    const canvas = document.getElementById('chart').getContext('2d')
    const canvas2 = document.getElementById('chart2').getContext('2d')

    window.myLine = new Chart(canvas, {
        type: 'bar',
        data: {
          padding:3,
          labels: props.names.map((name)=>name),
          datasets: [{
            label: 'Entrance Grades',
            data: props.grades.map((grade)=>grade),
            borderWidth: 0.2
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive:true,
          scales: {
            y: {
              beginAtZero: true,
            }
          },
          yAxes:{
            gridLines:{
              color: 'rgba(255,255,255,0.3)',
              borderDash: [3],
              borderDashOffset:[10]
            }
          },
          xAxes:[
            {
              ticks:{
                fontColor:'white'
              }
            }
          ],
          plugins:{
            title:{
              display:true,
              text: 'Average Entrance Grades For Each University',
              color:'white',
              font:{
                weight: 'bold',
                size: 18
              }
            }
          },         
        }
    })

    // /*******PIE 2***/
    // window.myLine2 = new Chart(canvas2, {
    //   type: 'polarArea',
    //   data:{
    //     datasets: [{
    //         data: [props.undergradTuition, props.undergradTuitionForeign]
    //     }],
    
    //     // These labels appear in the legend and in the tooltips when hovering different arcs
    //     labels: [
    //         'Red',
    //         'Yellow',
    //     ]
    // },
    //   options: {}
    // })



    window.pie =  new Chart(canvas2, {
      type: 'bar',
      data: {
        padding:3,
        labels: props.names.map((name)=>name),
        datasets: [{
          label: 'Entrance Grades',
          data: props.grades.map((grade)=>grade),
          borderWidth: 0.2
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive:true,
        scales: {
          y: {
            beginAtZero: true,
          }
        },
        yAxes:{
          gridLines:{
            color: 'rgba(255,255,255,0.3)',
            borderDash: [3],
            borderDashOffset:[10]
          }
        },
        xAxes:[
          {
            ticks:{
              fontColor:'white'
            }
          }
        ],
        plugins:{
          title:{
            display:true,
            text: 'Average Entrance Grades For Each University',
            color:'white',
            font:{
              weight: 'bold',
              size: 18
            }
          }
        },         
      }
  })

  },[])


  return (
    <div className=" transition-all ease-in-out duration-300 delay-75 rounded shadow shadow-amber-200  p-[.025rem] hover:shadow-md hover:shadow-orange-400 hover:tracking-wide">
       
      <canvas id="chart" className="h-96 w-full p-3"/>
      <br />
      <canvas id='chart2'className="h-96 w-full p-3"></canvas>
    

    </div>
  )
}

export default Analytics

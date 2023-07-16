/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

//React Imports
import { useEffect } from "react"
//Page Imports

//Component Imports 

//Style Imports
import Chart from 'chart.js/auto';

//Api Imports


const Analytics = (props) => {

  //Add chart to canvas you create in react div that is returned
  useEffect(()=>{

    /*******CHART 1***/
    const canvas = document.getElementById('chart').getContext('2d')

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
              gridLines:{
                color: 'rgba(255,255,255,0.3)',
                borderDash: [3],
                borderDashOffset:[10]
              },
              ticks:{
                color:'white'
              }
            },
            x:{
              ticks:{
                color:'white'
              }
            },
          },

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
    const canvas2 = document.getElementById('chart2').getContext('2d')

    window.myLine = new Chart(canvas2, {
        type: 'doughnut',
        data: {
          fontColor:'white',
          padding:3,
          labels: [
            'CAD Student',
            'Foreign Student',
          ],
          datasets: [{
            label: 'Tuition',
            data: [props.cadTuition, props.foreignTuition],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive:true,
          legend: {
            labels: {
                fontColor: "white",
                  }
          },
          plugins:{
            title:{
              display:true,
              text: 'Tuition Details',
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
    <div className=" transition-all ease-in-out duration-300 delay-75  ">
       
       <div className=" mb-6  rounded shadow shadow-amber-200  p-[.025rem] hover:shadow-md hover:shadow-orange-400 hover:tracking-wide">
        <canvas id="chart2" className="h-96 w-full p-3"/>
      </div>

      <div className=" rounded shadow shadow-amber-200  p-[.025rem] hover:shadow-md hover:shadow-orange-400 hover:tracking-wide">
        <canvas id="chart" className="h-96 w-full p-3"/>
      </div>



    </div>
  )
}

export default Analytics

/* eslint-disable react/prop-types */
//Replaces the findCards after user has finished entering them

// () loading circle to wait for dashboard with graphs to load

//Add a redo/reset search button somewhere to go back university page

// Circles with % and some recommendations like their top reccommended schools
//Graph of something



//React Imports
//import { useLoaderData } from 'react-router-dom'

//Page Imports

//Component Imports 

//Style Imports

//Api Imports


/*********DASHBOARD SETUP*******/
const DashBoard = (props) => {

  

  /****GENERAL DASHBOARD SETUP****/
  const allData = props.generalData
  

  /****DEPENDENT DASHBOARD SETUP****/ //Use a grid  & map answers over them 

  //Create 2 charts based on email notes
  //https://react-chartjs-2.js.org/

  


  return (
    <div>
       Dashboard
      <br />
      <p>{props.selectedUniversity}</p>

    </div>
  )
}

export default DashBoard

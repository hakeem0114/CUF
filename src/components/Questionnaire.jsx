//React Imports
//import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react';

//Page Imports

//Component Imports 
import DashBoard from './DashBoard';

//Style Imports


//Api Imports
import universityData from '../api/getApi'


//Survey.js Imports
import 'survey-core/modern.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import {json} from './questionnaireComponents/questions'

//React Toastify for notifications Imports
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Questionnaire = () => {
  /***********Handle States**********/
   const [surveyData, setSurveyData] = useState(null)

  /***********CARD COMPONENTS**********/


  /******HANDLE SURVEY.JS******/
  const survey = new Model(json);
  
  const handleClick = (e)=>{
    e.preventDefault()

    if(Object.keys(survey.data).length < 5){
      toast.error('Please complete the required questions', {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
       // console.log(survey.data)
        setSurveyData(survey.data)
    }
    
  }

    /******HANDLE API CALL******/
  //console.log(universityData())
  const [eachUiversity, setUniversityData] = useState(null)

  //Render once on page load
  useEffect(()=>{

    universityData()
      .then((data)=>{
          
          if(data.data.universityData){
            setUniversityData(data.data.universityData)
          }
      })
      .catch((error)=>{
        console.log(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className=" overflow-auto w-full h-full text-center  p-4  lg:w-11/12">
      {!surveyData &&(
          <div className=' bg-white '>
              <Survey model={survey} />
    
              <button onClick={handleClick} className=" transition-all ease-in-out duration-300 p-7 mb-3 bg-purple-500 font-extrabold  rounded-2xl hover:scale-[1.02] hover:tracking-wider hover:bg-purple-300 ">
                          SUBMIT
              </button>
          </div>  
      )}
      {surveyData &&(
          <div className=' bg-bodyBlue w-full h-full border-2 rounded-md shadow shadow-bodyGold border-zinc-500 flex justify-center items-center'>
              <DashBoard
                selectedUniversity={surveyData.university}
                generalData = {eachUiversity}
                surveyData = {surveyData}
              />
          </div>
      )}
        <div className='z-50'>

        </div>
    </div>
  )
}

export default Questionnaire

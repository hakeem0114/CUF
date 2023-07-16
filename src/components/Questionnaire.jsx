//React Imports
//import { useLoaderData } from 'react-router-dom'

//Page Imports

//Component Imports 

//Style Imports


//Api Imports


//Survey.js Imports
import 'survey-core/modern.min.css'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import {json} from './questionnaireComponents/questions'

/***********CARD COMPONENTS**********/

const Questionnaire = () => {


  /******HANDLE SURVEY.JS******/
  const survey = new Model(json);
  
  const handleClick = (e)=>{
      e.preventDefault()

      //Memoize the survey data
      survey.onComplete.add((sender, options) => {
        options.showSaveInProgress();
        console.log(JSON.stringify(sender.data, null, 3));
      });
  }



  return (
    <div className=" overflow-auto w-full h-full  bg-white p-4">
      <Survey model={survey} />

        <button onClick={handleClick} className=" ml-12 transition-all ease-in-out duration-300 p-7 mb-5 bg-purple-500 font-extrabold  rounded-2xl hover:scale-[1.02] ">
                    SUBMIT
        </button>
    </div>
  )
}

export default Questionnaire

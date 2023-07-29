//React Imports
import { useContext } from 'react'
import { UniversityContext } from '../App'


//Page Imports

//Component Imports 
import Questionnaire from '../components/Questionnaire'


//Style Imports
import bodyImage from '../assets/bodyAssets/body.jpg'
import { Triangle } from  'react-loader-spinner'

//Api Imports
//import universityData from '../api/getApi'


/************MAIN PAGE WITH UI**********/
const Find = () => {
  const eachUiversity = useContext(UniversityContext);

  return (
    <div className='relative z-0 flex justify-center items-center'>
       <img className=' z-0 w-full h-screen object-cover' src={bodyImage} alt="bodyImage" /> 


        {/****QUESTIONS**/}
        {eachUiversity && 
        (
          <div className='absolute z-20 w-3/5 h-5/6 bg-bodyTurquoise border-2 border-zinc-500 flex justify-center '> 
              <Questionnaire
                  universities = {eachUiversity}
              />
          </div>
        )}
        
        {/***LOADING ITEM**/}
          {!eachUiversity &&
              (
                  <div className='absolute text-bodyGold'>
                      <Triangle
                        height="300"
                        width="300"
                        color="#BFA181"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                  </div>
              )
          }
    </div>
  )
}

export default Find

//React Imports
//import { useLoaderData } from 'react-router-dom'


//Page Imports

//Component Imports 
import Questionnaire from '../components/Questionnaire'


//Style Imports
import bodyImage from '../assets/bodyAssets/body.jpg'

//Api Imports


/************MAIN PAGE WITH UI**********/
const Find = () => {

  //const universityData = useLoaderData()


  /*****QUESTIONNAIRE ****/

  /*****OPTION A: TOP 3 PICKS BY US OR****/

  /*****OPTION B: SELECT YOUR 1ST CHOICE****/



  return (
    <div className='relative z-0 flex justify-center items-center'>
       <img className=' z-0 w-full h-screen object-cover' src={bodyImage} alt="bodyImage" /> 


        {/****QUESTIONS**/}
       <div className='absolute z-20  w-5/6 h-5/6  bg-bodyTurquoise border-2 border-zinc-500 flex justify-center items-center'> 
          <Questionnaire/>
       </div>
    </div>
  )
}

export default Find

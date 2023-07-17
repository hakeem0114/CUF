//React Imports
import { useEffect,useState } from 'react'

//Page Imports

//Component Imports 
import Questionnaire from '../components/Questionnaire'


//Style Imports
import bodyImage from '../assets/bodyAssets/body.jpg'
import { Triangle } from  'react-loader-spinner'

//Api Imports
import universityData from '../api/getApi'


/************MAIN PAGE WITH UI**********/
const Find = () => {

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

  /*****QUESTIONNAIRE ****/

  /*****OPTION A: TOP 3 PICKS BY US OR****/

  /*****OPTION B: SELECT YOUR 1ST CHOICE****/



  return (
    <div className='relative z-0 flex justify-center items-center'>
       <img className=' z-0 w-full h-screen object-cover' src={bodyImage} alt="bodyImage" /> 


        {/****QUESTIONS**/}
        {eachUiversity && 
        (
          <div className='absolute z-20  w-5/6 h-5/6 bg-bodyTurquoise border-2 border-zinc-500 flex justify-center items-center'> 
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

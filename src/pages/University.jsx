//React Imports
import { useEffect,useState } from 'react'
//import { useLoaderData } from 'react-router-dom'

//Page Imports

//Component Imports 
import DashBoard from '../components/DashBoard'

//Style Imports
import bodyImage from '../assets/bodyAssets/body2.jpg'
import { Triangle } from  'react-loader-spinner'

//Api Imports
import universityData from '../api/getApi'



/************3rd Page To give a summary of each university**********/
const University = () => {


  /******HANDLE API CALL******/
  //console.log(universityData())
  const [eachUiversity, setUniversityData] = useState(null)

  //Render once on page load
  useEffect(()=>{

    universityData()
      .then((data)=>{
          
      // console.log(data.data.universityData)
          if(data.data.universityData){
            setUniversityData(data.data.universityData)
          }
      })
      .catch((error)=>{
        console.log(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  /******HANDLE DASHBOARD******/
  const[createDashBoard, setCreateDashBoard] = useState(false)


  /******HANDLE FORM INPUT*******/
  const [formData, setFormData] = useState({
     univDropDown:'Algoma University'
  })
    
  const handleChange=(e)=>{
    e.preventDefault()

    //Get formData from Dropdown
    setFormData((prevFormData)=>{ 
      // const {name, value} = e.target

      return {
          ...prevFormData, 
          [e.target.name]: e.target.value
          // [name]: type === 'checkbox'? checked:value
      }
    })
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    //console.log(formData.univDropDown)

    //Update Dashboard
   setCreateDashBoard(!createDashBoard)
  }

  /******HANDLE PULSE*******/
  const[tap, setTap] = useState(false)
  const handlePulse=()=>{
    setTap(true)
  }

  


  return (
    <div className='relative z-0 flex justify-center items-center'>
       <img className=' z-0 w-full h-screen object-cover' src={bodyImage} alt="bodyImage" /> 

      {/* <div className='w-full h-full flex flex-col'> */}
                    {/****SEARCH BAR TO RENDER DASHBOARD***/}
      {eachUiversity &&
        (
          <>
                                {!createDashBoard &&(
                                     <div className={`absolute flex mb-56 w-2/3 transition-all duration-200 active:animate-none focus:animate-none hover:animate-none after:animate-none ${tap?'animate-none':'animate-pulse'} `}>
                                       
                                            <form  className='w-full' onSubmit={handleSubmit}>
                                                    <select   onClick={handlePulse} 
                                                      className="w-2/3 p-3 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"

                                                      id='univDropDown'
                                                      name='univDropDown'
                                                      value={formData.univDropDown}

                                                      onChange={handleChange}
                                                    >
                                                        
                                                  
                                                      {eachUiversity.map((data,key)=>(
                                                          <option key={key} value={data.name}>{data.name}</option>
                                                      ))} 
                                                      
                                                    </select>

                                                    <button className='border-2 w-2/6 p-2 rounded-br-xl rounded-tr-xl bg-bodyBlue text-lg text-bodyGold hover:bg-slate-300 transition-all delay-75 ease-in-out duration-300'>
                                                        Search
                                                    </button>
                                              </form>
                 

                                    </div>
                    )}
                      {/****UNIVERSITY SEARCH**/}
                      
                    {createDashBoard &&(
                                         <div className='absolute z-20  w-5/6 h-5/6  bg-bodyBlue border-2 rounded-md shadow shadow-bodyGold border-zinc-500 flex justify-center items-center'> 
                                            <DashBoard
                                                selectedUniversity={formData.univDropDown}
                                                generalData = {eachUiversity}
                                            />
                                        </div>
                    )}
          </>
        )
      }

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

      {/* </div> */}

    </div>
  )
}

export default University

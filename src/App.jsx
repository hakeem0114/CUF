//React Imports
import { useEffect, useState } from 'react'

//Page Imports

//Component Imports 

//Style Imports
import './App.css'

//Api Imports
import universityData from './api/getApi'


/************MAIN APP**********/
function App() {

  //console.log(universityData())
  const [university, setUniversityData] = useState()

  //Render once on page load
  useEffect(()=>{

    universityData()
      .then((data)=>{
          setUniversityData(data.data.universityData)

          
      })
      console.log(university) //Get each university object
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

// Try to add queens object &
//Deploy server on render

  
  // console.log(university[0].artGrade)
  
  // const universityCount = universityData.length

  // universityData.map((university)=>{
  //   console.log(university.name)
  // })
  //Carrying api data to /home path on load
  // const cartData = universityData() //Get loader data from route
  
  // //Render data on homes
  // const [products, setProducts] = useState([])

  // useEffect(()=>{
  //   setProducts(cartData)
  // },[cartData]) //Rerender when cardData api is called
  
  // products.map((item)=>{
  //   return(
  //     <div>{products}</div>
  //   )
  // })
  return (
    <>
                
    </>
  )
}

export default App

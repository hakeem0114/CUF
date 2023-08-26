//React Imports
import { createContext, useEffect, useState } from 'react';

//import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,

} from "react-router-dom";

////Outlet renders child routes. ScrollRestoration to use the browser default resto on refresh 
////Loader gives aync data to route element before it renders
///Scroll Restoration restores default browser behaviour. Scroll to component before <Scroll Restorarion/>

//Page Imports
import Home from './pages/Home'
import Find from './pages/Find'
import University from './pages/University'

//Component Imports 
import Nav from './components/Nav'
import Footer from './components/Footer'

//Style Imports
import './App.css'

//Api Imports
import universityData from './api/getApi'
export const UniversityContext = createContext();



/***************************MAIN APP**********************/
function App() {


  

//Inside App Router Component (Nav & Footer)
function PageLayout(){
  return(
    <div>
        <Nav/>

        {/* <ScrollRestoration/> */}
        <Outlet/>

        <Footer/>
    </div>
  )
}

//Route Handling 
const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path="/CUF" element={<Home />}/>

    <Route path="/CUF/Find"  element={<PageLayout />}  >
            <Route path="/CUF/Find" element={<Find/>}  />
            <Route path="/CUF/Find/University" element={<University/>}  />
            
      </Route>
  </>  

  )
)




  /******HANDLE API CALL******/
  const [eachUiversity, setUniversityData] = useState(null)

  //Render once on page load
  useEffect(()=>{
    universityData()
      .then((data)=>{
          if(data.data){
          //console.log(data.data)
            setUniversityData(data.data)
          }
      })
      .catch((error)=>{
        console.log(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='scroll-smooth ' >
        <UniversityContext.Provider value={eachUiversity}>
            <RouterProvider 
                router={router} 
            />  
        </UniversityContext.Provider>
       
    </div>
  )
}

export default App

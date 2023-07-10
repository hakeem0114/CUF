//React Imports
import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  ScrollRestoration,

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




/***************************MAIN APP**********************/
function App() {

  //console.log(universityData())
  const [eachUiversity, setUniversityData] = useState()

  //Render once on page load
  useEffect(()=>{

    universityData()
      .then((data)=>{
          setUniversityData(data.data.universityData)
        
      })
      .catch((error)=>{
        console.log(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


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
           
            {/* <Route path="/CUF/Home/Find" element={<Find/>} loader={eachUiversity} /> */}
            <Route path="/CUF/Find" element={<Find/>}  />
            <Route path="/CUF/Find/University" element={<University/>}  />
            
      </Route>
  </>  

  )
)



  return (
    <div className='scroll-smooth ' >
        <RouterProvider 
            router={router} 
        />         
    </div>
  )
}

export default App

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

import Analytics from "./dashComponents/Analytics"
import DashCard from "./dashComponents/DashCard"

//Style Imports

//Api Imports


/*********DASHBOARD SETUP*******/
const DashBoard = (props) => {

  

  /****GENERAL DASHBOARD SETUP & STRING MANIPULATION****/
  const uniName = props.selectedUniversity
  const allData = props.generalData

//   console.log(uniName)
//   console.log(allData)

  //Selected Uni Data
  const selectedUniversityData = allData.find((data)=>{
      if(data.name.includes(uniName)) return data
  })

  console.log(selectedUniversityData)

  //1st card: Branches
      const branch =  ((selectedUniversityData.universityMainBranch =='')?'TBA':`${selectedUniversityData.universityMainBranch}` ) +
      ((selectedUniversityData.universityAffiliateBranch =='')?'':`, ${selectedUniversityData.universityAffiliateBranch}` )

  //2nd card: Programs
      const program =  ((selectedUniversityData.universityMainBranchPrograms =='')?'TBA':`${selectedUniversityData.universityMainBranchPrograms}` ) +
      ((selectedUniversityData.universityAffiliateBranchPrograms =='')?'':` & adjunct ${selectedUniversityData.universityAffiliateBranchPrograms}` )


  //3rd card: Grades  TRIM THE %, WHITESPACE & CONVERT TO NUMBERS

      //Get the highest grade per main courses
      let avgCount = 0
      let art = 0
      let commerce = 0
      let engineering = 0
      let science = 0
      

      if(selectedUniversityData.artGrade){
            art = Number(selectedUniversityData.artGrade.split('-').pop().replace(/[%]/g, '').trim())
            avgCount++
      } if(selectedUniversityData.commerceGrade){
            commerce = Number(selectedUniversityData.commerceGrade.split('-').pop().replace(/[%]/g, '').trim())
            avgCount++
      }if(selectedUniversityData.engineeringGrade){
            engineering = Number(selectedUniversityData.engineeringGrade.split('-').pop().replace(/[%]/g, '').trim())
            avgCount++
      }if(selectedUniversityData.scienceGrade){
            science = Number(selectedUniversityData.scienceGrade.split('-').pop().replace(/[%]/g, '').trim())
            avgCount++
      }  
      let backUpGrade = (commerce+ art+ engineering+science)/avgCount
      const averageGrade =  ((selectedUniversityData.universityGeneralGrade =='')?`${backUpGrade}%`:`${selectedUniversityData.universityGeneralGrade}%` ) 

      //console.log(backUpGrade)

  //4th card: University Rank
  const rank =  ((selectedUniversityData.universityRank =='')?'TBA':` # ${selectedUniversityData.universityRank}`)


  //Chart: Average enrollment grade vs Other Universities
      const allUniversityNames = []
      const allGeneralGrades = []

      allData.map((data)=>{
            allUniversityNames.push(data.name)
            
            if(data.universityGeneralGrade == ''){
                  let grades = [] 
                  grades.push(Number(data.engineeringGrade.split('-').pop().replace(/[%]/g, '').trim()))
                  grades.push (Number(data.artGrade.split('-').pop().replace(/[%]/g, '').trim()))
                  grades.push(Number(data.commerceGrade.split('-').pop().replace(/[%]/g, '').trim()))
                  grades.push (Number(data.scienceGrade.split('-').pop().replace(/[%]/g, '').trim()))

                 let finalGrade =  (grades.reduce((sum, curr)=> sum+curr, 0))/grades.length

                 allGeneralGrades.push(finalGrade)

            }else{
                  allGeneralGrades.push(data.universityGeneralGrade)
            }
      })

      //console.log(allUniversityNames, allGeneralGrades)

  //Pie: Canadian vs Foreign Student Undergrad tuition
      const cadTuition = selectedUniversityData.undergradTuition.split('-').pop().replace(/[$]/g, '').trim()
      const foreignTuition = selectedUniversityData.undergradTuitionForeign.split('-').pop().replace(/[$]/g, '').trim()
  
    //  console.log(cadTuition, foreignTuition)

  /****DEPENDENT DASHBOARD SETUP****/ //Multiple useStates to render specific divs to the dashboard
      //Get props from find page

  //Create 2 charts based on email notes
  //https://react-chartjs-2.js.org/

  

console.log(uniName)
  return (
    <div 
        className=" w-full h-full text-white flex flex-col justify-center items-center
                    md:
                    lg:
        "
    >
        <div className=" overflow-auto w-full grid grid-cols-1 p-2 justify-items-center justify-self-center ">
            
            <div className=" w-11/12 h-14 mt-4 text-center">
                  <br />
                  <h1 className="h-full font-bold text-3xl">{uniName}</h1>
            </div>
            
                  
            <div className=" transition-all ease-in-out duration-300 delay-75  w-11/12 max-h-full mx-auto my-10 grid gap-5  md:grid-cols-2 "> 
                  

                  <DashCard
                          cardLabel = 'Branches'
                          cardContent={branch}
                          color = 'text-yellow-400'
                    />
                    <DashCard
                          cardLabel = 'Programs'
                          cardContent={program}
                          color = 'text-green-500'
                    />
                    <DashCard
                          cardLabel = 'Minimum Entrance Grade'
                          cardContent={averageGrade}
                          color = 'text-red-400'
                    />
                    <DashCard
                          cardLabel = 'Ontario University Rank'
                          cardContent={rank}
                          color = 'text-[#450a0a]'
                    />
                    
            </div>

              <div className="transition-all ease-in-out duration-300 delay-75  w-11/12 max-h-full mx-auto my-10 grid gap-5 ">
                    <Analytics
                        names={allUniversityNames}
                        grades={allGeneralGrades}
                        {...cadTuition}
                        {...foreignTuition}
                    />
              </div>

        </div>
                
                
      </div>

  )
}

export default DashBoard

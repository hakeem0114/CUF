/* eslint-disable react/prop-types */

//React Imports
// import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//Page Imports

//Component Imports 

// import { useState } from "react"
import Analytics from "./dashComponents/Analytics"
import DashCard from "./dashComponents/DashCard"

//Style Imports
import { Triangle } from  'react-loader-spinner'



//Api Imports


/*********DASHBOARD SETUP*******/
const DashBoard = (props) => {
      // const location  = useLocation()
      // const findPage = location.pathname

/**RANDOM DEPLOYMENT  ERROR FIX FOR GITHUB PAGES***/
      //Refreshing page make github break.
      const navigate = useNavigate()

      const allData = props.generalData
      const allSurveyData = props.surveyData 

/****RENDER TOP PICK OR BEST MATCH****/
const bestMatchCAD = () => {
      //Filter for the lowest tuition & student grade with new array
      const matchingUniversities = allData.filter((uni)=>{
            return uni.undergradTuition.split('-').pop().replace(/[$,]/g, '').trim()<= allSurveyData.tuition && uni.universityGeneralGrade <= allSurveyData.grade
      })
     // console.log(matchingUniversities)

      //Sort based on rank in ascending order
      matchingUniversities.sort((a,b)=>{
            
            //Sort if ranks are not the same
            if (a.universityRank !== b.universityRank) {
                  return a.universityRank - b.universityRank; // Higher rank first
            }
            return 0 //Same position if no change
      })
     // console.log(matchingUniversities)

      //Get the top match
      if (matchingUniversities.length > 0) {
          return (matchingUniversities[0].name).includes('Université de')?(matchingUniversities[1].name) :'Algoma University' 
      }else{
          return 'Université de Hearst'
      }
}
const bestMatchForeign = () => {
      //Filter for the lowest tuition & student grade with new array
      const matchingUniversities = allData.filter((uni)=>{
            return uni.undergradTuitionForeign.split('-').pop().replace(/[$,]/g, '').trim()<= allSurveyData.tuition && uni.universityGeneralGrade <= allSurveyData.grade
      })
     // console.log(matchingUniversities)

      //Sort based on rank in ascending order
      matchingUniversities.sort((a,b)=>{
            
            //Sort if ranks are not the same
            if (a.universityRank !== b.universityRank) {
                  return a.universityRank - b.universityRank; // Higher rank first
            }
            return 0 //Same position if no change
      })
     // console.log(matchingUniversities)

      //Get the top match
      if (matchingUniversities.length > 0) {
          return (matchingUniversities[0].name).includes('Université de')?(matchingUniversities[1].name) :'Algoma University' 
      }else{
          return 'Université de Hearst'
      }
}


  /****GENERAL DASHBOARD SETUP & STRING MANIPULATION (UNIVERSITY PAGE)****/
   let uniName = ''
   if(!allSurveyData){
      uniName = props.selectedUniversity
   }else{
      if(props.surveyData.finalChoice == 'best'){
            if(props.surveyData.cadStatus == 'cad'){
                  uniName = bestMatchCAD()
            }else{
                  uniName = bestMatchForeign()
            }
        }else{
            uniName = props.selectedUniversity
        }
   }
  


  //Selected Uni Data
  const selectedUniversityData = allData.find((data)=>{
      if(data.name.includes(uniName)) return data
  })

 // console.log(selectedUniversityData)

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
      const cadTuition = selectedUniversityData.undergradTuition.split('-').pop().replace(/[$,]/g, '').trim()
      const foreignTuition = selectedUniversityData.undergradTuitionForeign.split('-').pop().replace(/[$,]/g, '').trim()

   //  console.log(cadTuition, foreignTuition)


  /****GENERAL DASHBOARD SETUP & STRING MANIPULATION (FIND PAGE)****/     
      //uniName  & allData are the same props
      
      const lastCards = ()=>{
            const majorGrade = ()=>{
                  if(allSurveyData.major =='science'){
                        return science
                  }
                  if(allSurveyData.major =='art'){
                        return art
                  }
                  if(allSurveyData.major =='commerce'){
                        return commerce
                  }
                  if(allSurveyData.major =='engineering'){
                        return engineering
                  }
            }

            const percentOff = (((majorGrade() - allSurveyData.grade) / majorGrade()) * 100).toFixed(2)
            const majorContent = () =>{

                  if(majorGrade()==0){
                        return `This university has no ${allSurveyData.major} program` 
                  }
                  if(allSurveyData.grade >= majorGrade()){
                  return `You pass the ${allSurveyData.major} average of ${majorGrade()}%` 
                  }
                  if(allSurveyData.grade < majorGrade()){
                  return  `You are ${percentOff}% of the ${allSurveyData.major} average of ${majorGrade()}%`
                  }
                  
            }
            const gradeCard = majorContent()
            // console.log(majorContent())


      //6th Card: Tuition
        //    console.log(allSurveyData)
      //console.log(cadTuition, foreignTuition)
      // const tuitionOff = (original, newGrade)=> ((original- newGrade) / original) * 100
      const studentTuition = ()=>{
                  //CAD
                  if(allSurveyData.cadStatus == 'canadian'){
                        if(cadTuition == 0){
                              return `TBA` 
                        }
                        if(allSurveyData.tuition >= cadTuition){
                              return `You can afford the tuition` 
                        }
                        if(allSurveyData.tuition < cadTuition){
                        return  `You are $${cadTuition - allSurveyData.tuition} off the tuition amount.`
                        }
                  }else{
                        //Foreign
                        if(foreignTuition == 0){
                              return `TBA` 
                        }
                        if(allSurveyData.tuition >= foreignTuition){
                              return `You can afford the tuition` 
                        }
                        if(allSurveyData.tuition < foreignTuition){
                        return  `You are $${foreignTuition - allSurveyData.tuition} off the tuition amount.`
                        }
                  }
            }
            const tuitionCard = studentTuition()

            return(                              
                        (
                              <>
                                    <DashCard
                                          cardLabel = {allSurveyData.major}
                                          cardContent={gradeCard}
                                          color = 'text-yellow-400'
                                    />
                                    <DashCard
                                          cardLabel = {'Tuition'}
                                          cardContent={tuitionCard}
                                          color = 'text-yellow-400'
                                    />
                              </>
                        )
            )
      }

            



      
      
  /****RESET BUTTON****/
  const handleClick= (e)=>{
      e.preventDefault()
      
      navigate(-1)
  }

//console.log(uniName)
  return (
    <div 
        className=" w-full h-full text-white flex flex-col justify-center items-center
                    md:
                    lg:
        "
    >
            {uniName && 
            (
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

                        {allSurveyData &&
                            
                              lastCards()
                        }
                        
      
                          
                  </div>
      
                    <div className="transition-all ease-in-out duration-300 delay-75  w-11/12 max-h-full mx-auto my-10 grid gap-5 ">
                          <Analytics
                              names={allUniversityNames}
                              grades={allGeneralGrades}
                              cadTuition = {cadTuition}
                              foreignTuition = {foreignTuition}
                          />
                          
                    </div>
      
                    <button onClick={handleClick} className="transition-all ease-in-out duration-300 p-7 mb-5 bg-purple-500 font-extrabold  rounded-2xl hover:scale-[1.02] ">
                        GO BACK
                    </button>
      
              </div>
            )}
                
            {/***LOADING ITEM**/}
            {!uniName &&
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

export default DashBoard

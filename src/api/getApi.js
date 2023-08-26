/******API*****/
// import axios from "axios"

// export default async function universityData(){
//    const response = await axios.get('https://cuf-server.onrender.com/universityData')
//   console.log(response)
//    return response
// }


/*******FIREBASE DATABASE*****/
//Refactored for stateless REST API architecture

import firebase from "../firebaseConfig"

export default async function universityData(){
    // Reference to the root of the database
    const dbRef = firebase.database().ref();


    dbRef.once('value')
      try{
         const snapshot = await dbRef.once('value')

         //Parse incoming database JSON to match previous API call
         //Avoid futher refactoring in code
         const res = [...snapshot.val()]

         const data = {
            data: res
         }

         //console.log(data)
         return data
      }
      catch(error){
         console.error('Error fetching data:', error);
      }

   //https://canadian-university-filter-default-rtdb.firebaseio.com/
}




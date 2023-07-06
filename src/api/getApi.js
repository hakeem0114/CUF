import axios from "axios"

export default async function universityData(){
   const response = await axios.get('https://cuf-server.onrender.com/universityData')
   
   return response
}

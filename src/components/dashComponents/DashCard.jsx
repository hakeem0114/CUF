/* eslint-disable react/prop-types */


const DashCard = (props) => {
  return (
    <div className=" transition-all ease-in-out duration-300 delay-75   h-40 w-full bg-purple-500 rounded shadow shadow-amber-200 flex flex-col justify-center items-center  text-center p-5 gap-4 hover:shadow-md hover:shadow-orange-400 hover:tracking-wide">
       
       <div>
          <h3 className="text-white text-sm  ">{props.cardLabel}</h3>
       </div>

       <div className={`flex items-center ${props.color} `}>
          <h1 className="text-2xl font-black">{props.cardContent}</h1>
       </div>

    </div>
  )
}

export default DashCard

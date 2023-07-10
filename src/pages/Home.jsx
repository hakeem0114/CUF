//React Imports
import { Link } from 'react-router-dom';

//Page Imports

//Component Imports 

//Style Imports
import home2 from '../assets/home2.jpg'
import { FiPower} from 'react-icons/fi';

//Api Imports



/************HOME PAGE W/ INTRODUCTION**********/




const Home = () => {


  return (
    <div className='z-0 relative min-h-screen flex flex-col justify-center '>
       <img className='  w-full h-screen object-cover' src={home2} alt="home image" />
      
      <div className='absolute z-20 flex justify-center text-white flex-col gap-20 ml-20 transition-all duration-500 '>
        <div className='text-center '>
            <h1 className='uppercase text-6xl'>Candian Univeristy Filter</h1>
            <p className='text-lg'>A quick way to find out which university is right for you!</p>
          </div>

      <div className='rounded-[2px] rouded-yellow-700   '>
          <div className='flex justify-center '>
              <Link to='/CUF/Find'>
                  <FiPower 
                    className='text-rose-700 transition duration-500 ease-in-out animate-bounce animate-pulse hover:text-green-600 hover:scale-105'
                    size={50}
                  />
              </Link>
          </div>
      </div>
      </div>


    </div>
  )
}

export default Home

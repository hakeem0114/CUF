//React Imports
import { Link } from 'react-router-dom';
//Page Imports

//Component Imports 

//Style Imports
import { BsFillPatchQuestionFill} from 'react-icons/bs';
import { FaUniversity} from 'react-icons/fa';
import { ImHome} from 'react-icons/im';
//Api Imports



/************STICKY NAV*********/
//Only appears on find & uni pages

export default function Nav() {
  return (
    <div className=' w-full h-20 bg-bodyBlue border-b-[2px] border-b-gray-800 opacity-95 flex justify-between  sticky z-50 top-0  text-bodyTurquoise'>
      <div className='w-1/2 border-2-bodyGold  rounded-3xl flex justify-center items-center mx-auto '>
          <ul className="flex flex-row  gap-20">

          <Link to='/CUF'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                ><ImHome size={30}/></li>
            </Link>

            <Link to='/CUF/Find'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                ><BsFillPatchQuestionFill size={30}/></li>
            </Link>

            <Link to='/CUF/Find/University'>
                <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
                ><FaUniversity size={30}/></li>
            </Link>
                

              
          </ul>
      </div>
    </div>
  )
}

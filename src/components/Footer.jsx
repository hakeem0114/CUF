//React Imports

//Page Imports

//Component Imports 

//Style Imports
import { AiOutlineGithub} from 'react-icons/ai';
import { BsLinkedin} from 'react-icons/bs';
//Api Imports



/************Footer*********/
//Only appears on find & uni pages

const footer = () => {
  return (
    <div className="w-full h-40 border-t-[2px]-gray-800  border-b-gray-800 opacity-95 flex flex-col justify-center items-center sticky z-50 top-0 bg-bodyBlue text-bodyTurquoise">
      <div className="w-1/2 rounded-xl flex flex-col justify-center items-center gap-5 mx-auto">
          <ul className=" text-bodyGold text-base flex flex-row gap-10 justify-center items-center">
              <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
              >
                  <a   className='' rel="noopener noreferrer" href="https://github.com/hakeem0114" target="_blank">
                     <AiOutlineGithub size={30}/>
                  </a>            
              </li>
              <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-bodyGold'
              >
                  <a   className='' rel="noopener noreferrer" href="https://www.linkedin.com/in/hakeemabdul-razak/" target="_blank">
                     <BsLinkedin size={30}/>
                  </a>            
              </li>
          </ul>

          <ul className=" text-bodyGold text-base text-center ">
              <li>Copyright @ Hakeem Abdul-Razak 2023</li>
              <li>Not affiliated with OUAC</li>
          </ul>

     </div>
    </div>
  )
}

export default footer

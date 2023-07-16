//React Imports
import ReactDOM from 'react-dom/client'


//Component Imports 
import App from './App.jsx'

//Style Imports
import './index.css'
import { ToastContainer} from 'react-toastify';



{/* <React.StrictMode>
<App />
</React.StrictMode> */}
ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
    <App/>
    <ToastContainer
                       style={{ zIndex: "1000" }}
                      position="top-right"
                      autoClose={500}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
      />
 </div>
  
)

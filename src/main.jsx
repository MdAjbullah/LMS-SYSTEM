// css imports
import './index.css'

// component import
import App from './App.jsx'


// library imports
import ReactDOM from 'react-dom/client'
import{BrowserRouter} from 'react-router-dom'
import{Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <BrowserRouter>
      <App />
      <Toaster/>

  </BrowserRouter>
  </Provider>

)

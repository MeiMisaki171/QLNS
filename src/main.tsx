import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement)

root.render(
  // <Provider store={store}>
  <>
    <App />
    <ToastContainer
      className='toast-container--custom'
      transition={Bounce}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    />
  </>
  // </Provider>
)

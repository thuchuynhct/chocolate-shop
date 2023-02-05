import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import AppProvider from "./context/AppContext"
import AppRoutes from "./routes/AppRoutes"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter basename="chocolate-shop">
      <AppProvider>
        <ToastContainer />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App

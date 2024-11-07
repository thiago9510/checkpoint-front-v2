
//import { Card } from './components/Card/Card'
//import { Header } from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes/AppRoutes'
import "normalize.css";




function App() {

  return (
    <AuthProvider>      
      <BrowserRouter> {/* Subistituindo o Router */}
        <AppRoutes />
      </BrowserRouter>      
    </AuthProvider>
  )
}

export default App


//compotenes de exemplo
//<Header hideMenu={false} name="teste" />
//<Card />
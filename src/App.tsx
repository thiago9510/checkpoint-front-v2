
//import { Card } from './components/Card/Card'
//import { Header } from './components/Header/Header'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes/AppRoutes'


function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App


//compotenes de exemplo
//<Header hideMenu={false} name="teste" />
//<Card />
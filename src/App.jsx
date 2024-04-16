
import './App.css'
import Button from './components/Button.jsx'
// import SideBar from './components/SideBar.jsx'
import TextPrincipal from "./components/TextPrincipal.jsx"
import Productos from './components/Productos.jsx'
import Logo from './components/Logo.jsx'
import TextSecundario from './components/TextSecundario.jsx'
import Navbar from './components/NavBar.jsx'

function App() {


  return (

    <div className='contenedorApp'>

      <Navbar />
      <TextPrincipal />
      <Logo />
      <Button />
      <Productos />
      <TextSecundario />


    </div>

  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './COMPONENTES/navbar'
import Header from './COMPONENTES/header'
import Descripcion from './COMPONENTES/descripcion'
import Articulo1 from './COMPONENTES/articulo1'
import Articulo2 from './COMPONENTES/articulo2'
import Footer from './COMPONENTES/footer'
import './COMPONENTES/navbar.css'
import './COMPONENTES/header.css'
import './COMPONENTES/descripcion.css'
import './COMPONENTES/articulo1.css'
import './COMPONENTES/footer.css'

function App() {
  return (
    <div>
      <Navbar onClick={Navbar}/>
      <Header />
      <div className='container'>
        <Descripcion />
        <Articulo1 />
        <Articulo2 />
      </div>
      <Footer />
    </div>
  )
}
export default App

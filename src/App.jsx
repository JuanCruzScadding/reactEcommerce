import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './componentes/navbar/navbar'
import "./index.css"
import ItemListContainer from './componentes/itemListContainer/itemListContainer'

function App() {
  return <div>
      <NavBarComponent/>
      <ItemListContainer greeting="Bienvenidos a Tienda Apicola!"/>
    </div>
}
export default App
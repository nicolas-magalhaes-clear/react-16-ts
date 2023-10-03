

import './App.css'
import ClassComponent from './components/ClassComponent'
import FatherComponent from './components/FatherComponent'
import FirstComponent from './components/FirstComponent'
import ParameterComponent from './components/ParameterComponent'
import StateClass from './components/StateClass'

function App() {


  return (
   <div className='AppContainer'>
    <h3>React 16 em <span className='yellow'>Typescript</span></h3>
    <div className="exercises-container">
      <FirstComponent/>
      <ParameterComponent title='Componente com parâmetros obrigatórios e não obrigatórios'/>
      <ClassComponent message="Componente de classe"/>
      <StateClass message={'None'}/>
      <FatherComponent/>
    </div>
   </div>
  )
}

export default App

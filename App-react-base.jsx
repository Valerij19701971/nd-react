
import './App.css'
import "./Components/React-base/Task1.css";

import Task1 from './Components/React-base/Task1'
import Task2 from './Components/React-base/Task2'
import Task3 from './Components/React-base/Task3'
import Task4 from './Components/React-base/Task4'
import Task5 from './Components/React-base/Task5'
import TaskBonus from './Components/React-base/TaskBonus';

function App() {
  return (
    <>
      <Task1 message="Labas, zuiki!" className="labas_zuiki" />
      <Task1 message="Kitas tekstas!" className="another_style" />
      <Task2 betKoksTekstas_1='pirmas PROPS tekstas' />
      <Task3 color='1' />
      <Task4 betKoksTekstas_2='PROPS tekstas 1' betKoksTekstas_3='PROPS tekstas 2' />
      <Task5 betKoksTekstas_2='PROPS tekstas 3' betKoksTekstas_3='PROPS tekstas 4' spalva="#06D6A0" />
      <TaskBonus
        text="Bonus task with large font and purple background!"
        fontSize="28px"
        bgColor="#6A0DAD"
      />
      <TaskBonus
        text="Smaller text, soft blue background"
        fontSize="18px"
        bgColor="#8ecae6"
      />
    </>
  )
}

export default App

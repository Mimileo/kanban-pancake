import './App.css'
import TaskCard from './components/TaskCard'
import { tasks, statuses } from './utils/data-tasks'

const name = "John Doe"
const button = <button>Click me</button>

function App() {
  const title = "Do Research"
  const id = "BUS-5"
  const points = 5
  
  const todoTasks = tasks.filter((task) => task.status === "todo")
  const inProgTasks = tasks.filter((task) => task.status === "inprogress")
  const doneTasks = tasks.filter((task) => task.status === "done")

  
  return (
    <div className="flex divide-x">
      <div>
       
        <h1 className='text-3xl p2 capitalize font-bold text-gray-500'>Todo</h1>
        {todoTasks.map((task) => <TaskCard title={task.title} id={task.id} points={task.points} priority={task.priority} />)} 
      </div>
      <div>
       <h1 className='text-3xl p2 capitalize font-bold text-gray-500'>In Progress</h1>
        {inProgTasks.map((task) => <TaskCard title={task.title} id={task.id} points={task.points} priority={task.priority}/>)} 
      </div>
      <div>
        <h1 className='text-3xl p2 capitalize font-bold text-gray-500'>Done</h1>
        {doneTasks.map((task) => <TaskCard title={task.title} id={task.id} points={task.points} priority={task.priority} />)} 
      </div>
    </div>
  )
}

export default App
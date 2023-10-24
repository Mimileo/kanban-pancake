import { priority } from "../utils/data-tasks"
import { useState } from "react"
const TaskCard = ({title, id, points, priority}) => {
    const bigRedCss = "border rounded-lg px-2 m-2 bg-gray-50 w-56"
    const n = 1
    const n2 = 2
    const n3 = n + n2
    const medp = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFBF00" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
  const lowp=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#6495ED" className="w-5 h-5">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>
const highp = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ff0f0f" className="w-5 h-5">
  <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
</svg>


const [points_t, setPoints] = useState(points || 0)
    return <div className={bigRedCss}>
            <div className="text-base font-base py2">{title}!!! </div>
            <div className="flex gap-4 justify-between py-2 text-gray-500 text-sm">
                <div className="flex gap-2">
                    <div>
                    {id}
                    </div>
                     <div>
                     {priority}
                    </div> 
                    {priority === "high"  && <div>
                        {highp}
                    </div> }
                     {priority === "medium"  && <div>
                         {medp}
                    </div> }
                     {priority === "low"  && <div>
                         {lowp}
                    </div> }
                    
                </div>
                <div className="flex gap-2 items-center">
                    <button onClick={() => setPoints(points_t - 1) }>-</button>

                    <div className="font-bold" >{points_t}</div>
                   <button onClick={() => setPoints(points_t + 1) }>+</button>
                   
                    </div>
            </div>
        </div>

}
export default TaskCard
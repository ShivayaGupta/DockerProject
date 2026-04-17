import { useDispatch, useSelector } from "react-redux"
import { getAllStudents } from "../redux/StudentAction"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export function StudentList(){
    const dispatch =useDispatch()
    const student=useSelector((state)=>state.student)
    const loading=useSelector((state)=>state.loading)
    const error =useSelector((state)=>state.error)
    useEffect(()=>{
        dispatch(getAllStudents())
    },[dispatch])

    if(loading){
        return <h3>loading...</h3>}

    if(error){
        return <h3>error</h3>
    }

    return(
        <div>
      <h1>Student</h1>
      {student.length===0?<h3>no student</h3>:
      (<ul>
        {student.map((s)=>(
            <li key={s.id}>
                {s.sname}---{s.course}----<Link to={`/students/${s.id}`}>info</Link>

            </li>
       ) )}
      </ul>)}
      <Link to="/">Home</Link>
        </div>
    )
}
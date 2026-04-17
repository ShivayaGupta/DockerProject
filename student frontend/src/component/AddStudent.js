import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../redux/StudentAction";

export function AddStudent(){
    const dispatch=useDispatch();
     

  const loading = useSelector((state) => state.student.loading);


    const [student,setStudent]=useState({
        sname:"",course:""
    })
    const handleChange=(e)=>{
        setStudent({
            ...student,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addStudent(student))
        setStudent({sname:"",course:""})
    }
    return(
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="sname" value={student.sname}
                    onChange={handleChange}>
                    </input>
                </div>
                   <div>
                    <label>Course:</label>
                    <input type="text" name="course" value={student.course}
                    onChange={handleChange}>
                    </input>
                </div>
                <button onClick={handleSubmit}>Add</button>
            </form>
            {loading && <h3>Loading...</h3>}
        </div>
    )
}

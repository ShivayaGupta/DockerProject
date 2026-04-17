import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddStudent } from "../component/AddStudent";
import { StudentDetails } from "../component/StudentDetails";
import { StudentList } from "../component/StudentList";
import { Home } from "../component/Home";

export function ApiRoutes(){
    return(<div>
        <BrowserRouter>
        <Routes>
        <Route
         path="/" element={<Home/>}></Route>
         <Route path="/students" element={<StudentList/>}></Route>
         <Route path="/students/:id" element={<StudentDetails/>}></Route>
         <Route path="/add" element={<AddStudent/>}></Route>
         </Routes></BrowserRouter></div>
    )
}
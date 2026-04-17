import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentById } from "../redux/StudentAction";
import { useEffect } from "react";

export function StudentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const student = useSelector(state => state.student.student);
  const loading = useSelector(state => state.student.loading);
  const error = useSelector(state => state.student.error);

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [dispatch, id]);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;

  if (!student) return <h3>No student with this id: {id}</h3>;

  return (
    <div>
      <h1>Student Details</h1>
      <p>Id: {student.id}</p>
      <p>Name: {student.sname}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}
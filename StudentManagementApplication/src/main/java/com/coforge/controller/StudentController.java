package com.coforge.controller;
 
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.coforge.model.Student;
import com.coforge.service.StudentService;
 
@RestController
@CrossOrigin("*")
public class StudentController {
 
	@Autowired
	StudentService service;
	
	@GetMapping("/students")
	public List<Student>getAllStudents(){
		return service.getAllStudents();
	}
	@PostMapping("/students/add")
	public Student addStudent(@RequestBody Student student) {
		return service.addStudent(student);
	}
	@GetMapping("/students/{id}")
	public Optional<Student> getStudentById(@PathVariable int id) {
		System.out.println(id);
		return service.getStudentById(id);
	}
 
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        
    	return service.updateStudent(id, student);
    }
 
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
    }
}
 

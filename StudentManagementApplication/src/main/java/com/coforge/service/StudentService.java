package com.coforge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.model.Student;
import com.coforge.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

   
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    
    public Student addStudent(Student student) {
        return repository.save(student);
    }
    
	public Optional<Student> getStudentById(int id) {
		// TODO Auto-generated method stub
		
		return repository.findById(id);
	}
    
    public Student updateStudent(int id, Student student) {
        Student existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

        existing.setSname(student.getSname());
      
        existing.setCourse(student.getCourse());

        return repository.save(existing);
    }

    
    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}
package com.example.CrudOperationsForte.repo;

import com.example.CrudOperationsForte.entities.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoListRepo extends JpaRepository<ToDo, Integer>
{

}

package com.example.CrudOperationsForte.service;

import com.example.CrudOperationsForte.entities.ToDo;
import com.example.CrudOperationsForte.repo.ToDoListRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoListService
{
    @Autowired
    private ToDoListRepo toDoListRepo;

    public void create(ToDo todo)
    {
        toDoListRepo.save(todo);
    }

    public void update(int id, ToDo toDo)
    {
        boolean exist = toDoListRepo.existsById(id);
        if(exist)
        {
            Optional<ToDo> temp = toDoListRepo.findById(id);
            ToDo tempToDo = temp.get();
            tempToDo.setTitle(toDo.getTitle());
            tempToDo.setDescription(toDo.getDescription());
            toDoListRepo.save(tempToDo);
        }
        else
        {
            throw new EntityNotFoundException("ToDo with id " + id + " does not exist");
        }
    }

    public void delete(int id)
    {
        boolean exist = toDoListRepo.existsById(id);
        if(exist)
        {
            toDoListRepo.deleteById(id);
        }
        else
        {
            throw new EntityNotFoundException("ToDo with id " + id + " does not exist");
        }
    }

    public List<ToDo> getTodoS()
    {
        List<ToDo> toDoList = toDoListRepo.findAll();
        return toDoList;
    }

    public void checkToDo(int id)
    {
        boolean exist = toDoListRepo.existsById(id);
        if(exist)
        {
            ToDo toDo = toDoListRepo.findById(id).get();
            if(toDo.isCompleted())
                toDo.setCompleted(false);
            else
                toDo.setCompleted(true);
            toDoListRepo.save(toDo);
            System.out.println("ToDo with id " + id + " is completed");
        }
        else
            throw new EntityNotFoundException("ToDo with id " + id + " does not exist");
    }
}

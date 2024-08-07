package com.example.CrudOperationsForte.controller;


import com.example.CrudOperationsForte.entities.ToDo;
import com.example.CrudOperationsForte.service.ToDoListService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/todo")
public class ToDoListController
{

    private final ToDoListService toDoListService;


    public ToDoListController(ToDoListService toDoListService)
    {
        this.toDoListService = toDoListService;
    }

    @GetMapping
    public List<ToDo> getAll()
    {
        return toDoListService.getTodoS();
    }
    @PostMapping("/create")
    public ResponseEntity<?> createToDo(@RequestBody ToDo toDo)
    {
        try {

            toDoListService.create(toDo);
            return new ResponseEntity<>(toDo, HttpStatus.CREATED);
        } catch (IllegalArgumentException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateToDo(@PathVariable int id, @RequestBody ToDo toDo)
    {
        try {
            toDoListService.update(id, toDo);
            return new ResponseEntity<>(toDo, HttpStatus.OK);
        } catch (EntityNotFoundException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteToDo(@PathVariable int id)
    {
        try {
            toDoListService.delete(id);
            return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
        } catch (EntityNotFoundException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}

package com.example.CrudOperationsForte.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "todoS")
@Getter
@Setter
public class ToDo
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String description;
    private boolean completed;

    public ToDo(String title, String description)
    {
        this.id = 0;
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    public ToDo()
    {

    }
}

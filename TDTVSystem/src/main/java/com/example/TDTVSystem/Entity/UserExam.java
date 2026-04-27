package com.example.TDTVSystem.Entity;


import jakarta.persistence.*;

@Entity(name = "user_exam")
public class UserExam {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_exam_id")
    private Integer userExamId;


    @Column(name = "score")
    private double score;
}

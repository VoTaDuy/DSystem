package com.example.TDTVSystem.Entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "user_exam")
public class UserExam {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_exam_id")
    private Integer userExamId;


    @Column(name = "score")
    private double score;

    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Column(name = "end_time")
    private LocalDateTime endTime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;

    public Integer getUserExamId() {
        return userExamId;
    }

    public void setUserExamId(Integer userExamId) {
        this.userExamId = userExamId;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }
}

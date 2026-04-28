package com.example.TDTVSystem.Entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "exams")
public class Exam {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "exam_id")
    private Integer examId;

    @Column(name = "exam_name")
    private String examName;

    @Column(name = "duration")
    private int duration;

    @Column(name = "total_question")
    private int totalQuestion;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdDate;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lessons lessons;

    @OneToMany(mappedBy = "exams")
    List<Questions> questionsList;

    @OneToMany(mappedBy = "exams")
    List<UserExam> userExamList;

    public Integer getExamId() {
        return examId;
    }

    public void setExamId(Integer examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getTotalQuestion() {
        return totalQuestion;
    }

    public void setTotalQuestion(int totalQuestion) {
        this.totalQuestion = totalQuestion;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public Lessons getLessons() {
        return lessons;
    }

    public void setLessons(Lessons lessons) {
        this.lessons = lessons;
    }

    public List<Questions> getQuestionsList() {
        return questionsList;
    }

    public void setQuestionsList(List<Questions> questionsList) {
        this.questionsList = questionsList;
    }

    public List<UserExam> getUserExamList() {
        return userExamList;
    }

    public void setUserExamList(List<UserExam> userExamList) {
        this.userExamList = userExamList;
    }
}

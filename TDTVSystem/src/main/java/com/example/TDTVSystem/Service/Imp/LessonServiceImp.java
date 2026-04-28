package com.example.TDTVSystem.Service.Imp;

import com.example.TDTVSystem.DTO.Request.AddLessonRequest;
import com.example.TDTVSystem.DTO.Response.LessonResponse;
import com.example.TDTVSystem.Entity.Lessons;

import java.util.List;

public interface LessonServiceImp {
    boolean addLesson(AddLessonRequest addLessonRequest);

    List<LessonResponse> getLessonBySubject(int subjectId);

    Lessons updateLesson(int lessonId, String lessonName);

    void deleteLesson(int lessonId);


}

package com.example.TDTVSystem.Service;


import com.example.TDTVSystem.DTO.Request.AddLessonRequest;
import com.example.TDTVSystem.DTO.Response.LessonResponse;
import com.example.TDTVSystem.Entity.Lessons;
import com.example.TDTVSystem.Entity.Subjects;
import com.example.TDTVSystem.Repository.LessonRepository;
import com.example.TDTVSystem.Repository.SubjectRepository;
import com.example.TDTVSystem.Service.Imp.LessonServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LessonService implements LessonServiceImp {

    @Autowired
    LessonRepository lessonRepository;

    @Autowired
    SubjectRepository subjectRepository;

    @Override
    public boolean addLesson(AddLessonRequest addLessonRequest) {

        try {
            Subjects subjects = subjectRepository.findSubjectBySubjectId(addLessonRequest.getSubjectId());
            if (subjects == null)
            {
                throw new RuntimeException(
                        "Subject not found with id" + addLessonRequest.getSubjectId()
                );
            }
            Lessons lessons = new Lessons();
            lessons.setLessonName(addLessonRequest.getLessonName());
            lessons.setSubjects(subjects);

            lessonRepository.save(lessons);
            return true;
        }catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<LessonResponse> getLessonBySubject(int subjectId) {

        List<Lessons> lessonsList = lessonRepository.findAll();
        List<LessonResponse> lessonResponseList = new ArrayList<>();

        for (Lessons lessons : lessonsList)
        {
            LessonResponse lessonResponse = new LessonResponse();
            lessonResponse.setLessonId(lessons.getLessonId());
            lessonResponse.setLessonName(lessons.getLessonName());
            lessonResponseList.add(lessonResponse);
        }
        return lessonResponseList;
    }

    @Override
    public Lessons updateLesson(int lessonId, String lessonName) {
        Lessons lessons = lessonRepository.findLessonByLessonId(lessonId);
        if (lessons == null)
        {
            throw new RuntimeException(
                    "can't not found " + lessonId
            );
        }

        try {
            lessons.setLessonName(lessonName);
            lessonRepository.save(lessons);
            return  lessons;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteLesson(int lessonId) {
        Lessons lessons = lessonRepository.findLessonByLessonId(lessonId);
        if (lessons == null)
        {
            throw new RuntimeException("Lesson not found with ID" + lessonId);
        }
        lessonRepository.delete(lessons);
    }
}

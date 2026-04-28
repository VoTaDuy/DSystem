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
        
        return List.of();
    }
}

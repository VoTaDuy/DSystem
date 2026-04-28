package com.example.TDTVSystem.Controller;


import com.example.TDTVSystem.DTO.Request.AddLessonRequest;
import com.example.TDTVSystem.DTO.Response.LessonResponse;
import com.example.TDTVSystem.Entity.Lessons;
import com.example.TDTVSystem.Service.Imp.LessonServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lesson")
public class LessonController {

    @Autowired
    LessonServiceImp lessonServiceImp;

    @GetMapping("/getAll")
    public List<LessonResponse> getAllLessonBySubject(int subjectId)
    {
        return lessonServiceImp.getLessonBySubject(subjectId);
    }

    @PostMapping("/addLesson")
    public boolean addLesson( @RequestBody AddLessonRequest addLessonRequest)
    {
            return lessonServiceImp.addLesson(addLessonRequest);
    }

    @PutMapping("/updateLesson")
    public Lessons updateLesson(int lessonId, String lessonName)
    {
        return lessonServiceImp.updateLesson(lessonId, lessonName);
    }


    @DeleteMapping("/deleteLesson")
    public void deleteLesson(int lessonId)
    {
        lessonServiceImp.deleteLesson(lessonId);
    }





}

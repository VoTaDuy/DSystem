package com.example.TDTVSystem.Controller;


import com.example.TDTVSystem.DTO.Request.AddLessonRequest;
import com.example.TDTVSystem.Service.Imp.LessonServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lesson")
public class LessonController {

    @Autowired
    LessonServiceImp lessonServiceImp;


    @PostMapping("/addLesson")
    public boolean addLesson( @RequestBody AddLessonRequest addLessonRequest)
    {
            return lessonServiceImp.addLesson(addLessonRequest);
    }
}

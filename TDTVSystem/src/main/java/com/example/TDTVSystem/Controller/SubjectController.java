package com.example.TDTVSystem.Controller;


import com.example.TDTVSystem.DTO.Response.SubjectResponse;
import com.example.TDTVSystem.Service.Imp.SubjectServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/subject")
public class SubjectController {

    @Autowired
    SubjectServiceImp subjectServiceImp;

    @PostMapping("/addSubject")
    public boolean addSubject( @RequestParam String subjectName)
    {
        return subjectServiceImp.addSubject(subjectName);
    }


    @GetMapping("/getAll")
    public List<SubjectResponse> subjectResponseList()
    {
        return subjectServiceImp.subjectResponseList();
    }
}

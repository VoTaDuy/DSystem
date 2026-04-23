package com.example.TDTVSystem.Controller;


import com.example.TDTVSystem.DTO.Response.ResponseData;
import com.example.TDTVSystem.Repository.ClassRepository;
import com.example.TDTVSystem.Service.Imp.ClassServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/class")
public class ClassController {
    @Autowired
    ClassRepository classRepository;

    @Autowired
    ClassServiceImp classServiceImp;


    @PostMapping("/addClass")
    public boolean addClass ( @RequestParam String description) {
        boolean isSuccess = classServiceImp.addClass(description);
        return isSuccess;
    }
}

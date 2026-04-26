package com.example.TDTVSystem.Service;

import com.example.TDTVSystem.DTO.Response.ClassResponse;
import com.example.TDTVSystem.Entity.Classes;
import com.example.TDTVSystem.Repository.ClassRepository;
import com.example.TDTVSystem.Service.Imp.ClassServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ClassService implements ClassServiceImp {

    @Autowired
    ClassRepository classRepository;


    @Override
    public boolean addClass(String description) {
        if (classRepository.findClassesByDescription(description) != null)
        {
            System.out.println("class exist !!!");
            return false;
        }

        Classes classes = new Classes();
        classes.setDescription(description);
        try {
            System.out.println("inserting classes");
            classRepository.save(classes);
            System.out.println("insert successfully");
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<ClassResponse> classList() {
        List<Classes> classesList = classRepository.findAll();
        List<ClassResponse> classResponseList = new ArrayList<>();

        for (Classes classes : classesList)
        {
            ClassResponse classResponse = new ClassResponse();
            classResponse.setDescription(classes.getDescription());
            classResponseList.add(classResponse);
        }
        return classResponseList;
    }


}

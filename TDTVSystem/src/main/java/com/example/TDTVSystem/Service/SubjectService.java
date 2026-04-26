package com.example.TDTVSystem.Service;


import com.example.TDTVSystem.DTO.Response.SubjectResponse;
import com.example.TDTVSystem.Entity.Subjects;
import com.example.TDTVSystem.Repository.SubjectRepository;
import com.example.TDTVSystem.Service.Imp.SubjectServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectService implements SubjectServiceImp {

    @Autowired
    SubjectRepository subjectRepository;


    @Override
    public boolean addSubject(String subjectName) {
        if (subjectRepository.findSubjectBySubjectName(subjectName) != null) {
            return false;
        }
        Subjects subjects = new Subjects();
        subjects.setSubjectName(subjectName);
        try {
            System.out.println("inserting Subject");
            subjectRepository.save(subjects);
            System.out.println("Insert successfully");
        }catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public List<SubjectResponse> subjectResponseList() {
        List<Subjects> subjectsList = subjectRepository.findAll();
        List<SubjectResponse> subjectResponseList = new ArrayList<>();
        for (Subjects s : subjectsList)
        {
            SubjectResponse subjectResponse = new SubjectResponse();
            subjectResponse.setSubjectName(s.getSubjectName());

            subjectResponseList.add(subjectResponse);
        }
        return subjectResponseList;
    }
}

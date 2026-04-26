package com.example.TDTVSystem.Service.Imp;

import com.example.TDTVSystem.DTO.Response.SubjectResponse;

import java.util.List;

public interface SubjectServiceImp {
    boolean addSubject(String subjectName);

    List<SubjectResponse> subjectResponseList();
}

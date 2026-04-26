package com.example.TDTVSystem.Service.Imp;

import com.example.TDTVSystem.DTO.Response.ClassResponse;

import java.util.List;

public interface ClassServiceImp {
    boolean addClass(String description);

    List<ClassResponse> classList();
}

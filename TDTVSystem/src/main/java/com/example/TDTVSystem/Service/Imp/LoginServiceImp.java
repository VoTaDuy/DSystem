package com.example.TDTVSystem.Service.Imp;

import com.example.TDTVSystem.DTO.Request.RegisterRequest;

import com.example.TDTVSystem.Entity.Users;



public interface LoginServiceImp {
    Users CheckLogin(String username, String password);
    Boolean isRegister(RegisterRequest registerRequest);
}

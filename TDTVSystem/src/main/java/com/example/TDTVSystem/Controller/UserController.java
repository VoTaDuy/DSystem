package com.example.TDTVSystem.Controller;


import com.example.TDTVSystem.DTO.Request.RegisterRequest;
import com.example.TDTVSystem.DTO.Response.ResponseData;
import com.example.TDTVSystem.Entity.Users;
import com.example.TDTVSystem.Security.JwtUtilHelper;
import com.example.TDTVSystem.Service.Imp.LoginServiceImp;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    JwtUtilHelper jwtUtilHelper;

    @Autowired
    LoginServiceImp loginServiceImp;

    @GetMapping("/csrf-token")
    public CsrfToken getCsrfToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }

    @PostMapping("/login")
    public ResponseEntity<?> Signup(@RequestParam String username, @RequestParam String password) {

        System.out.println("username : " + username);
        System.out.println("password : " + password);

        ResponseData responseData = new ResponseData();
        Users users = loginServiceImp.CheckLogin(username, password);
        if (users != null) {
            String token = jwtUtilHelper.generateToken(users.getUsername());
            Map<String, Object> data = new HashMap<>();
            data.put("userId", users.getUserId());
            data.put("username", users.getUsername());
            data.put("token", token);
            responseData.setData(data);
            responseData.setSuccess(true);
        } else {
            responseData.setData("Wrong username or password");
            responseData.setSuccess(false);
        }

        return new ResponseEntity<>(responseData, HttpStatus.OK);

    }


    @PostMapping("/register")
    public ResponseEntity<?> Register(@RequestBody RegisterRequest registerRequest){

        ResponseData responseData = new ResponseData();
        boolean isRegister = loginServiceImp.isRegister(registerRequest);
        if (isRegister){
            responseData.setSuccess(true);
            responseData.setData("Register success ");
        }else {
            responseData.setSuccess(false);
            responseData.setData("Register failed ");
        }

        return new ResponseEntity<>(responseData,HttpStatus.OK);
    }
}
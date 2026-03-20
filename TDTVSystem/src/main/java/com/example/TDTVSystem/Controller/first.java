package com.example.TDTVSystem.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class first {

    @GetMapping("/hello")
    public  String helloSpring()
    {
        return "hello anh duy dep trai";

    }
}

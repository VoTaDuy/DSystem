package com.example.TDTVSystem.Service;

import com.example.TDTVSystem.DTO.Request.RegisterRequest;
import com.example.TDTVSystem.DTO.UserDTO;
import com.example.TDTVSystem.Entity.Roles;
import com.example.TDTVSystem.Entity.Users;
import com.example.TDTVSystem.Repository.UserRepository;
import com.example.TDTVSystem.Security.JwtUtilHelper;
import com.example.TDTVSystem.Service.Imp.LoginServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService implements LoginServiceImp {

    @Autowired
    JwtUtilHelper jwtUtilHelper;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Users CheckLogin(String username, String password) {
        Users users = userRepository.findUserByUsername(username);

        if (users == null){
            System.out.println("User not found");
        }

        System.out.println("Input password " + password);
        System.out.println("Right password " + users.getPassword());

        if (users.getPassword().equals(password)){
            System.out.println("Login successful");
            return users;
        }else {
            System.out.println("Invalid password");
            return null;
        }

    }

    @Override
    public Boolean isRegister(RegisterRequest registerRequest) {
        if(userRepository.findUserByUsername(registerRequest.getUsername()) != null){
            System.out.println("User already exist");
            return false;
        }

        Users users = new Users();

        users.setUsername(registerRequest.getUsername());
        users.setPassword(registerRequest.getPassword());

        Roles roles = new Roles();
        roles.setRoleId(registerRequest.getRoleId());
        users.setRoles(roles);

        try {
            System.out.println("Inserting users");
            userRepository.save(users);
            System.out.println("Inserted Users");

            String Token = jwtUtilHelper.generateToken(users.getUsername());
            System.out.println("Jwt Token " + Token);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;

        }

    }
}

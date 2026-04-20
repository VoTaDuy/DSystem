package com.example.TDTVSystem.Security;

import com.example.TDTVSystem.Entity.Users;
import com.example.TDTVSystem.Repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        Users users = userRepository.findByUsername(username);
        if (users == null )
        {
            throw new UsernameNotFoundException("user not found" + username);
        }
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority("ROLE_" + users.getRoles()));

        return  new org.springframework.security.core.userdetails.User(
                users.getUsername(),
                users.getPassword(),
                authorities
        );
    }
}

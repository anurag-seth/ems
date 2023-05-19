package com.project.ems.services;

import com.project.ems.entity.EmpDetails;
import com.project.ems.repositories.EmployeeRepository;
import com.project.ems.security.UserInfoUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserInfoDetailsService implements UserDetailsService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<EmpDetails> emp = employeeRepository.findByEmail(username);
        return emp.map(UserInfoUserDetails::new)
                .orElseThrow(()->new UsernameNotFoundException("user not found"+username));

    }
}

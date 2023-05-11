package com.project.ems.services;

import com.project.ems.entity.EmpDetails;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface EmployeeService {
    List<EmpDetails> findAll();
    EmpDetails findById(int id);
    EmpDetails save(EmpDetails empDetails);
    void deleteById(int id);

}

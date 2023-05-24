package com.project.ems.services;

import com.project.ems.entity.EmpDetails;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Interface for Employee having different method declaration for CRUD operations.
 */
@Service
public interface EmployeeService {
    /**
     * @return this method return list of all employees.
     */
    List<EmpDetails> findAll();

    /**
     * @param id id of the employee that needs to be searched
     * @return information of that particular id
     */
    EmpDetails findById(int id);

    EmpDetails findByEmail(String email);

    /**
     * @param empDetails body of the employee of that particular entry
     * @return information of that particular employee that is saved
     */
    EmpDetails save(EmpDetails empDetails);

    /**
     * @param id id of the employee that needs to be deleted
     */
    void deleteById(int id);

}

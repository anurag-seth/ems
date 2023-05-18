package com.project.ems.repositories;

import com.project.ems.entity.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Employeerepository extending Jpa repository ot perform crud operations.
 */
public interface EmployeeRepository extends JpaRepository<EmpDetails, Integer> {
    Optional<EmpDetails> findByEmail(String username);
}

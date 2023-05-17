package com.project.ems.repositories;

import com.project.ems.entity.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Employeerepository extending Jpa repository ot perform crud operations.
 */
public interface EmployeeRepository extends JpaRepository<EmpDetails, Integer> {
}

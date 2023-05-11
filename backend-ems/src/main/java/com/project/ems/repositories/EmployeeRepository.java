package com.project.ems.repositories;

import com.project.ems.entity.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmpDetails, Integer> {
}

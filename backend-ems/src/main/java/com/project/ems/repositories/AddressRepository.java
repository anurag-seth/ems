package com.project.ems.repositories;

import com.project.ems.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Address repository extending Jpa repository ot perform crud operations.
 */
public interface AddressRepository extends JpaRepository<Address, Integer> {
}

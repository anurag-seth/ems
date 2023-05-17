package com.project.ems.repositories;

import com.project.ems.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Contactrepository extending Jpa repository ot perform crud operations.
 */
public interface ContactRepository extends JpaRepository<Contact, Integer> {
}

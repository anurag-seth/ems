package com.project.ems.services;

import com.project.ems.entity.Address;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AddressService {
    List<Address> findAll();
    Address findById(int id);
    Address save(Address address);
    void deleteById(int id);
}

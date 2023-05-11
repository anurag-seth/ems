package com.project.ems.controllers;

import com.project.ems.entity.Address;
import com.project.ems.entity.EmpDetails;
import com.project.ems.services.AddressService;
import com.project.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {
    @Autowired
    private AddressService addressService;
    @GetMapping("/findAll")
    public List<Address> findAll(){
        return addressService.findAll();
    }
    @PostMapping("/addAddress")
    public Address addAddress(@RequestBody Address address){
        address.setId(0);
        return addressService.save(address);
    }
    @PutMapping("/updateAddress")
    public Address updateAddress(@RequestBody Address address){
        return addressService.save(address);
    }
    @DeleteMapping("/deleteAddres/{id}")
    public String deleteAddress(@RequestParam int id){
        addressService.deleteById(id);
        return "Deleted Address: " + id;
    }
}

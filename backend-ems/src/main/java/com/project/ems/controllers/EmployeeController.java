package com.project.ems.controllers;

import com.project.ems.entity.Address;
import com.project.ems.entity.EmpDetails;
import com.project.ems.services.AddressService;
import com.project.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private AddressService addressService;
    @GetMapping("/findAllEmployees")
    public List<EmpDetails> findAll(){
        return employeeService.findAll();
    }
    @PostMapping("/addEmployee")
    public EmpDetails addEmployee(@RequestBody EmpDetails empDetails){
        empDetails.setId(0);
        Address address  = new Address();
        address = addressService.findById(empDetails.getAddress().getId());
        empDetails.setAddress(address);
        return employeeService.save(empDetails);
    }
    @PutMapping("/updateEmployee")
    public EmpDetails updateEmployee(@RequestBody EmpDetails empDetails){
        Address address  = new Address();
        address = addressService.findById(empDetails.getAddress().getId());
        empDetails.setAddress(address);
        return employeeService.save(empDetails);
    }
    @DeleteMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@RequestParam int id){
        employeeService.deleteById(id);
        return "Deleted Employee: " + id;
    }
}

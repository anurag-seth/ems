package com.project.ems.controllers;

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
        addressService.findById(empDetails.getId());
        return employeeService.save(empDetails);
    }
    @PutMapping("/updateEmployee")
    public EmpDetails updateEmployee(@RequestBody EmpDetails empDetails){
        return employeeService.save(empDetails);
    }
    @DeleteMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@RequestParam int id){
        employeeService.deleteById(id);
        return "Deleted Employee: " + id;
    }
}

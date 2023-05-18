package com.project.ems.controllers;

import com.project.ems.entity.Address;
import com.project.ems.entity.Contact;
import com.project.ems.entity.EmpDetails;
import com.project.ems.repositories.AddressRepository;
import com.project.ems.services.AddressService;
import com.project.ems.services.ContactService;
import com.project.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

/**
 * Controller for the employee, ("/employees" for mapping)
 */
@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private AddressService addressService;
    @Autowired
    private ContactService contactService;
    @Autowired
    private AddressRepository addressRepository;

    /**
     * @return list of all employees along with their address and contact
     */
    @GetMapping("/findAll")
    @PreAuthorize("hasRole('ADMIN') or hasRole('SUPER-ADMIN')")
    public List<EmpDetails> findAll(){
//        System.out.println("in admin");
//        System.out.println(employeeService.findAll());
        return employeeService.findAll();
    }

    /**
     * @param id id of the employee that needs to be searched
     * @return Complete details of the particular employee
     */
    @GetMapping("/find/{id}")
    public EmpDetails findEmployee(@PathVariable int id){
        return employeeService.findById(id);
    }

    /**
     * @param empDetails Details of the employee
     * @return Details which are added along with respective id
     */
    @PostMapping("/add")
    public EmpDetails addEmployee(@RequestBody EmpDetails empDetails){
        empDetails.setId(0);
        empDetails.setRole(empDetails.getRole().toUpperCase(Locale.ROOT));
        if(empDetails.getAddress()!=null) {
            Address address = addressService.findById(empDetails.getAddress().getId());
            empDetails.setAddress(address);
        }
        if(empDetails.getContact()!=null){
            Contact contact = contactService.findById(empDetails.getContact().getId());
            empDetails.setContact(contact);
        }
        return employeeService.save(empDetails);
    }

    /**
     * @param empDetails updated details of the employee
     * @return Updated details alomg with the id
     */
    @PutMapping("/update")
    public EmpDetails updateEmployee(@RequestBody EmpDetails empDetails){
//        EmpDetails emp = employeeService.findById(empDetails.getId());
//        if(emp.getEmpId()!=empDetails.getEmpId() || emp.getEmail()!=empDetails.getEmail()){
//            throw new RuntimeException("Email and Employee id can't be updated");
//        }
        empDetails.setRole(empDetails.getRole().toUpperCase(Locale.ROOT));
        if(empDetails.getAddress()!=null) {
            Address address = new Address();
            address = addressService.findById(empDetails.getAddress().getId());
            empDetails.setAddress(address);
        }
        if(empDetails.getContact()!=null){
            Contact contact = new Contact();
            contact = contactService.findById(empDetails.getContact().getId());
            empDetails.setContact(contact);
        }
        return employeeService.save(empDetails);
    }

    /**
     * @param id id of the particular employee that need to be deleted
     * @return Show message regarding successful deletion of the particular employee
     */
    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id){
        employeeService.deleteById(id);
        return "Deleted Employee: " + id;
    }
}

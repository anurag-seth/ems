package com.project.ems.controllers;

import com.project.ems.entity.Address;
import com.project.ems.entity.Contact;
import com.project.ems.entity.EmpDetails;
import com.project.ems.repositories.AddressRepository;
import com.project.ems.services.AddressService;
import com.project.ems.services.ContactService;
import com.project.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

/**
 * Controller for the employee, ("/employees" for mapping)
 */
@RestController
@CrossOrigin(origins = "*")
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
//    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasRole('SUPER-ADMIN')")
    public List<EmpDetails> findAll(){
        return employeeService.findAll();
    }

    @ResponseStatus(value= HttpStatus.OK)
    @PostMapping("/updateImage")
    public void updateImage(@RequestParam("profilePic") MultipartFile file, @RequestParam("email") String email) throws IOException{
        employeeService.updateImage(file, email);
    }

    @GetMapping("/viewImage/{email}")
    public ResponseEntity<byte[]> viewImage(@PathVariable String email) {
        byte[] image = employeeService.viewImage(email);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
    }

    /**
     * @param id id of the employee that needs to be searched
     * @return Complete details of the particular employee
     */
    @GetMapping("/find/{id}")
    public EmpDetails findEmployee(@PathVariable int id){
        return employeeService.findById(id);
    }

    @GetMapping("/findByEmail/{email}")
    public EmpDetails findEmployeeEmail(@PathVariable String email){
        return employeeService.findByEmail(email);
    }

    /**
     * @param empDetails Details of the employee
     * @return Details which are added along with respective id
     */
    @PostMapping("/add")
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasRole('SUPER-ADMIN')")
    public EmpDetails addEmployee(@RequestBody EmpDetails empDetails){
        empDetails.setId(0);
        int id = employeeService.findAll().size() + 2;
        empDetails.setEmpId(id);
        empDetails.setRole(empDetails.getRole().toUpperCase(Locale.ROOT));
        return employeeService.save(empDetails);
    }

    /**
     * @param empDetails updated details of the employee
     * @return Updated details alomg with the id
     */
    @PutMapping("/update")
    public EmpDetails updateEmployee(@RequestBody EmpDetails empDetails){
        empDetails.setRole(empDetails.getRole().toUpperCase(Locale.ROOT));
        return employeeService.save(empDetails);
    }

    /**
     * @param id id of the particular employee that need to be deleted
     * @return Show message regarding successful deletion of the particular employee
     */
    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id){
//        We can delete the employee or change its active status to false so that its details are visible to only admin but he/she can't login.
//        employeeService.deleteById(id);
//        EmpDetails emp = employeeService.findById(id);
//        emp.setActive(false);
//        employeeService.save(emp);
        return "Deleted Employee: " + id;
    }
}

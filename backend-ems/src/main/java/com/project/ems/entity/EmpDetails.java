package com.project.ems.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * entity for employee table, used to store employee id, name, email and role for validation of employee and having one-to-one relationship with address and contact table.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="emp_details")
public class EmpDetails {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    /**
     * store id of employee(unique id), can't be null
     */
    @Column(name="emp_id", unique=true, nullable = false, updatable = false)
    private int empId;

    /**
     * store first name of employee, can't be null.
     */
    @Column(name="first_name", nullable = false)
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    /**
     * store email of the employee(unique as well can't be null).
     */
    @Column(name="email", unique=true, nullable = false, updatable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    /**
     * store role of the employee(employee, admin, super-admin) to grant various features according to role
     */
    @Column(name="role", nullable = false)
    private String role;

    /**
     * one-to-one relationship with the address table.
     */
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "empDetails")
    @JsonManagedReference
    private Address address;

    /**
     * one-to-one relationship with the contact table.
     */
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "empDetails")
    @JsonManagedReference
    private Contact contact;

    @Column(name="blood_group")
    private String bloodGroup;

    @Column(name="gender")
    private String gender;

    @Column(name="martial_status")
    private String martialStatus;

    @Column(name="dob", nullable = false)
    private String dob;

    /**
     * store time and date at which the employee is created.
     */
    @CreationTimestamp
    @Column(name="created_on", updatable = false)
    private LocalDateTime createdOn;

    /**
     * store last time when the details of the table are updated.
     */
    @UpdateTimestamp
    @Column(name="updated_on")
    private LocalDateTime updatedOn;

    /**
     * store the id of the employee who ahs created the respective employee.
     */
    @Column(name="created_by")
    private int createdBy;

}

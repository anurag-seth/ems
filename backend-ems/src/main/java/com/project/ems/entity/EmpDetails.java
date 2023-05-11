package com.project.ems.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

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

    @Column(name="emp_id", unique=true, nullable = false)
    private int empId;

    @Column(name="first_name", nullable = false)
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email", unique=true, nullable = false)
    private String email;

    @Column(name="role", nullable = false)
    private String role;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "empDetails")
    @JsonManagedReference
    private Address address;

    @OneToMany(mappedBy = "empDetails", cascade = CascadeType.ALL)
    List<Contact> contacts;

    @Column(name="blood_group")
    private String bloodGroup;

    @Column(name="gender")
    private String gender;

    @Column(name="martial_status")
    private String martialStatus;

    @Column(name="dob", nullable = false)
    private String dob;

    @CreationTimestamp
    @Column(name="created_on")
    private LocalDateTime createdOn;

    @UpdateTimestamp
    @Column(name="updated_on")
    private LocalDateTime updatedOn;

    @Column(name="created_by")
    private int createdBy;

}

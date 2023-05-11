package com.project.ems.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="contact_info")
public class Contact {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="contact_type", nullable = false)
    private String contactType;

    @Column(name="phn_number", nullable = false)
    private String number;

    @Column(name="isActive", nullable = false)
    private boolean active;

    @CreationTimestamp
    @Column(name="created_on")
    private LocalDateTime createdOn;

    @UpdateTimestamp
    @Column(name="updated_on")
    private LocalDateTime updatedOn;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "emp_id", referencedColumnName = "id")
    private EmpDetails empDetails;
}

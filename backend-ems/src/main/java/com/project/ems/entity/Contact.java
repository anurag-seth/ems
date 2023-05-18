package com.project.ems.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

/**
 * entity for contact table used to store contact of the employee, having id as primary key and one-to-one relationship with empDetails table.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="contact_info")
public class Contact {
    /**
     * used to store contact id of the contact.
     */
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    /**
     * used to store the type of the contact.
     */
    @Column(name="contact_type", nullable = false)
    private String contactType;

    /**
     * used to store the phone number.
     */
    @Column(name="phn_number", nullable = false)
    private String number;

    /**
     * to store the active state of the contact
     */
    @Column(name="isActive", nullable = false)
    private boolean active;

    /**
     * to store the time and date when the particular contact was created.
     */
    @CreationTimestamp
    @Column(name="created_on", updatable = false)
    private LocalDateTime createdOn;

    /**
     * used to store last updated time of the contact details
     */
    @UpdateTimestamp
    @Column(name="updated_on")
    private LocalDateTime updatedOn;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    @JsonBackReference
    private EmpDetails empDetails;
}

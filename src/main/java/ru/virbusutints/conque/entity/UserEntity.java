package ru.virbusutints.conque.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "external_id")
    private Long externalId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "second_name")
    private String secondName;
    @Column(name = "middle_name")
    private String middleName;
    private String email;
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private UserRole role;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}

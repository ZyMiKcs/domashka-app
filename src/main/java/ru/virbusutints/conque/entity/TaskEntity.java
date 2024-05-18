package ru.virbusutints.conque.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tasks")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id", referencedColumnName = "external_id")
    private UserEntity teacher;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", referencedColumnName = "id")
    private SubjectEntity subject;
    private String title;
    private String name;
    private String description;
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TaskStatus status;
    @Column(name = "expired_at")
    private LocalDateTime expiredAt;
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "task_files",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "file_id")
    )
    private List<FileEntity> files;
}

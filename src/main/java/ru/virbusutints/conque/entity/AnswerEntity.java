package ru.virbusutints.conque.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "answers")
public class AnswerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    @ManyToMany
    @JoinTable(
            name = "answer_files",
            joinColumns = @JoinColumn(name = "answer_id"),
            inverseJoinColumns = @JoinColumn(name = "file_id")
    )
    private List<FileEntity> files;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    private TaskEntity task;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "external_id")
    private UserEntity user;
}

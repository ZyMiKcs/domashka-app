package ru.virbusutints.conque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.virbusutints.conque.entity.TaskEntity;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    @Query("SELECT t FROM TaskEntity t WHERE t.teacher.externalId = :teacherId")
    List<TaskEntity> findByTeacherId(@Param("teacherId") Long teacherId);
}

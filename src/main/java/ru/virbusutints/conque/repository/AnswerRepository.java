package ru.virbusutints.conque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.virbusutints.conque.entity.AnswerEntity;

import java.util.List;

public interface AnswerRepository extends JpaRepository<AnswerEntity, Long> {

    @Query("SELECT a FROM AnswerEntity a JOIN a.user u WHERE u.externalId = :userId")
    List<AnswerEntity> findAllByUserId(@Param("userId") Long userId);

    @Query("SELECT a FROM AnswerEntity a JOIN a.task t JOIN a.user u WHERE u.externalId = :userId AND t.id = :taskId")
    List<AnswerEntity> findAllByUserIdAndTaskId(@Param("userId") Long userId, @Param("taskId") Long taskId);
}

package ru.virbusutints.conque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.virbusutints.conque.entity.SubjectEntity;

@Repository
public interface SubjectRepository extends JpaRepository<SubjectEntity, Long> {
}

package ru.virbusutints.conque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.virbusutints.conque.entity.FileEntity;

@Repository
public interface FileRepository extends JpaRepository<FileEntity, Long> {
}

package ru.virbusutints.conque.service;

import ru.virbusutints.conque.dto.subject.SubjectDto;
import ru.virbusutints.conque.dto.subject.SubjectNewDto;

import java.util.List;

public interface SubjectService {

    SubjectDto save(SubjectNewDto subjectDto);

    List<SubjectDto> getAll();

    SubjectDto getById(Long id);
}

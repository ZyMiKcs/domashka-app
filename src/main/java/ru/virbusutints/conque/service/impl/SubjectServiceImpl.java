package ru.virbusutints.conque.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ru.virbusutints.conque.dto.subject.SubjectDto;
import ru.virbusutints.conque.dto.subject.SubjectNewDto;
import ru.virbusutints.conque.entity.SubjectEntity;
import ru.virbusutints.conque.mapper.SubjectMapper;
import ru.virbusutints.conque.repository.SubjectRepository;
import ru.virbusutints.conque.service.SubjectService;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final SubjectMapper subjectMapper;

    @Override
    public SubjectDto save(SubjectNewDto subjectDto) {
        SubjectEntity subject = subjectMapper.map(subjectDto);
        log.info("Subject before save: {}", subject);
        SubjectEntity savedSubject = subjectRepository.save(subject);
        log.info("Subject after save: {}", savedSubject);
        return subjectMapper.map(savedSubject);
    }

    @Override
    public List<SubjectDto> getAll() {
        return subjectRepository.findAll().stream()
                .map(subjectMapper::map)
                .collect(Collectors.toList());
    }

    @Override
    public SubjectDto getById(Long id) {
        SubjectEntity foundSubject = subjectRepository.findById(id).orElse(null);
        if (foundSubject == null) {
            throw new RuntimeException("Subject not found");
        }
        return subjectMapper.map(foundSubject);
    }
}

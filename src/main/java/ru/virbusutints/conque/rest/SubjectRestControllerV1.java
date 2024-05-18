package ru.virbusutints.conque.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.virbusutints.conque.dto.subject.SubjectDto;
import ru.virbusutints.conque.dto.subject.SubjectNewDto;
import ru.virbusutints.conque.service.SubjectService;

import java.util.List;

@RestController
@RequestMapping("api/v1/subjects")
@RequiredArgsConstructor
public class SubjectRestControllerV1 {

    private final SubjectService subjectService;

    @PostMapping
    public ResponseEntity<SubjectDto> save(@RequestBody SubjectNewDto subjectNewDto) {
        return ResponseEntity.ok(subjectService.save(subjectNewDto));
    }

    @GetMapping
    public ResponseEntity<List<SubjectDto>> getAll() {
        return ResponseEntity.ok(subjectService.getAll());
    }

    @GetMapping("/{subject_id}")
    public ResponseEntity<SubjectDto> getById(@PathVariable("subject_id") Long id) {
        return ResponseEntity.ok(subjectService.getById(id));
    }
}

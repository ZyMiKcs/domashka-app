package ru.virbusutints.conque.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.dto.task.TaskDto;
import ru.virbusutints.conque.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("api/v1/tasks")
@RequiredArgsConstructor
public class TaskRestControllerV1 {

    private final TaskService taskService;
    private final ObjectMapper objectMapper;

    @GetMapping
    public ResponseEntity<?> getAll(@RequestParam(defaultValue = "false") Boolean isDeadline) {
        if (isDeadline) {
            return ResponseEntity.ok(taskService.getAllWithDeadline());
        }
        return ResponseEntity.ok(taskService.getAll());
    }

    @GetMapping("/{task_id}")
    public ResponseEntity<?> getById(@PathVariable("task_id") Long taskId) {
        return ResponseEntity.ok(taskService.getById(taskId));
    }

    @GetMapping("/users/{user_id}")
    public ResponseEntity<?> getByUserId(@PathVariable("user_id") Long userId,
                                         @RequestParam(defaultValue = "false") Boolean isTeacher) {
        if (isTeacher) {
            return ResponseEntity.ok(taskService.getByUserId(userId));
        }
        return ResponseEntity.ok(taskService.getAll());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestPart("files") List<MultipartFile> multipartFile,
                                    @RequestPart("taskDto") String taskDto) throws JsonProcessingException {
        TaskDto task = objectMapper.readValue(taskDto, TaskDto.class);
        return ResponseEntity.ok(taskService.save(task, multipartFile));
    }

    @PostMapping("/{task_id}/answers")
    public ResponseEntity<?> addAnswer(@PathVariable("task_id") Long taskId,
                                       @RequestPart("files") List<MultipartFile> multipartFile,
                                       @RequestPart("answer") String string) throws JsonProcessingException {
        AnswerDto answer = objectMapper.readValue(string, AnswerDto.class);
        return ResponseEntity.ok(taskService.addAnswer(taskId, answer, multipartFile));
    }
}

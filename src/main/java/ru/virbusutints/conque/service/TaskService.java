package ru.virbusutints.conque.service;

import org.springframework.web.multipart.MultipartFile;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.dto.task.TaskDto;
import ru.virbusutints.conque.dto.task.TaskGetDto;
import ru.virbusutints.conque.entity.TaskEntity;

import java.util.List;

public interface TaskService {

    TaskGetDto save(TaskDto task, List<MultipartFile> multipartFiles);

    List<TaskGetDto> getAll();

    List<TaskGetDto> getByUserId(Long userId);

    List<TaskGetDto> getAllWithDeadline();

    TaskGetDto getById(Long id);

    AnswerDto addAnswer(Long taskId, AnswerDto answerDto, List<MultipartFile> multipartFiles);
}

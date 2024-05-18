package ru.virbusutints.conque.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.dto.task.TaskDto;
import ru.virbusutints.conque.dto.task.TaskGetDto;
import ru.virbusutints.conque.entity.AnswerEntity;
import ru.virbusutints.conque.entity.FileEntity;
import ru.virbusutints.conque.entity.SubjectEntity;
import ru.virbusutints.conque.entity.TaskEntity;
import ru.virbusutints.conque.entity.TaskStatus;
import ru.virbusutints.conque.entity.UserEntity;
import ru.virbusutints.conque.entity.UserRole;
import ru.virbusutints.conque.mapper.AnswerMapper;
import ru.virbusutints.conque.mapper.TaskMapper;
import ru.virbusutints.conque.repository.AnswerRepository;
import ru.virbusutints.conque.repository.SubjectRepository;
import ru.virbusutints.conque.repository.TaskRepository;
import ru.virbusutints.conque.repository.UserRepository;
import ru.virbusutints.conque.service.FileService;
import ru.virbusutints.conque.service.TaskService;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final FileService fileService;

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final SubjectRepository subjectRepository;
    private final AnswerRepository answerRepository;

    private final TaskMapper taskMapper;
    private final AnswerMapper answerMapper;

    @Override
    public TaskGetDto save(TaskDto taskDto, List<MultipartFile> multipartFiles) {
        UserEntity userEntity = userRepository.findByExternalId(taskDto.getTeacherId()).orElse(null);
        if (userEntity == null || !userEntity.getRole().equals(UserRole.TEACHER)) {
            throw new RuntimeException("Teacher not found");
        }
        SubjectEntity subjectEntity = subjectRepository.findById(taskDto.getSubjectId()).orElse(null);
        if (subjectEntity == null) {
            throw new RuntimeException("Subject not found");
        }
        List<FileEntity> files = multipartFiles.stream()
                .map(file -> fileService.upload(file, taskDto.getTeacherId()))
                .toList();
        TaskEntity mappedTask = mapTaskForSave(taskDto).toBuilder()
                .teacher(userEntity)
                .subject(subjectEntity)
                .files(files)
                .build();
        log.info("Task before save: {}", mappedTask);
        TaskEntity savedTask = taskRepository.save(mappedTask);
        log.info("Task after save: {}", savedTask);
        return taskMapper.mapGetShortDto(savedTask);
    }

    private TaskEntity mapTaskForSave(TaskDto taskDto) {
        return taskMapper.map(taskDto).toBuilder()
                .status(TaskStatus.NEW)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }

    @Override
    public List<TaskGetDto> getAll() {
        return taskRepository.findAll().stream()
                .map(task -> {
                    TaskGetDto taskGetShortDto = taskMapper.mapGetShortDto(task);
                    taskGetShortDto.setIsDeadline(isDeadline(task));
                    return taskGetShortDto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<TaskGetDto> getByUserId(Long userId) {
        return taskRepository.findByTeacherId(userId).stream()
                .map(task -> {
                    TaskGetDto taskGetShortDto = taskMapper.mapGetShortDto(task);
                    taskGetShortDto.setIsDeadline(isDeadline(task));
                    return taskGetShortDto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<TaskGetDto> getAllWithDeadline() {
        return taskRepository.findAll().stream()
                .filter(this::isDeadline)
                .map(taskMapper::mapGetShortDto)
                .collect(Collectors.toList());
    }

    @Override
    public TaskGetDto getById(Long id) {
        TaskEntity taskEntity = taskRepository.findById(id).orElse(null);
        if (taskEntity == null) {
            throw new RuntimeException("Task not found");
        }
        TaskGetDto mappedTask = taskMapper.mapGetShortDto(taskEntity);
        mappedTask.setIsDeadline(isDeadline(taskEntity));
        return mappedTask;
    }

    @Override
    public AnswerDto addAnswer(Long taskId,
                               AnswerDto answerDto,
                               List<MultipartFile> multipartFiles) {
        TaskEntity taskEntity = taskRepository.findById(taskId).orElse(null);
        if (taskEntity == null) {
            throw new RuntimeException("Task not found");
        }
        UserEntity userEntity = userRepository.findByExternalId(answerDto.getUserId()).orElse(null);
        if (userEntity == null) {
            throw new RuntimeException("User not found");
        }
        List<FileEntity> files = multipartFiles.stream()
                .map(file -> fileService.upload(file, answerDto.getUserId()))
                .toList();
        AnswerEntity answer = AnswerEntity.builder()
                .message(answerDto.getMessage())
                .task(taskEntity)
                .user(userEntity)
                .files(files)
                .build();
        log.info("Answer before save: {}", answer);
        AnswerEntity savedAnswer = answerRepository.save(answer);
        log.info("Answer after save: {}", savedAnswer);
        return answerMapper.map(savedAnswer);
    }

    private Boolean isDeadline(TaskEntity task) {
        if (task == null) {
            return false;
        }
        if (!task.getStatus().equals(TaskStatus.NEW)) {
            return false;
        }
        LocalDate currentDate = LocalDate.now();
        LocalDate deadline = LocalDate.from(task.getExpiredAt());
        long daysUntilDeadline = ChronoUnit.DAYS.between(currentDate, deadline);
        return daysUntilDeadline < 3;
    }
}

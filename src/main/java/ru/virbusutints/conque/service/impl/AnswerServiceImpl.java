package ru.virbusutints.conque.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.mapper.AnswerMapper;
import ru.virbusutints.conque.repository.AnswerRepository;
import ru.virbusutints.conque.repository.TaskRepository;
import ru.virbusutints.conque.repository.UserRepository;
import ru.virbusutints.conque.service.AnswerService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl implements AnswerService {

    private final UserRepository userRepository;
    private final TaskRepository taskRepository;
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;

    @Override
    public List<AnswerDto> getUserAnswers(Long userId) {
        if (userRepository.findByExternalId(userId).isEmpty()) {
            throw new RuntimeException("User not found");
        }

        return answerRepository.findAllByUserId(userId).stream()
                .map(answerMapper::map)
                .toList();
    }

    @Override
    public List<AnswerDto> getUserAnswersByTask(Long userId, Long taskId) {
        if (userRepository.findByExternalId(userId).isEmpty()) {
            throw new RuntimeException("User not found");
        }
        if (!taskRepository.existsById(taskId)) {
            throw new RuntimeException("Task not found");
        }

        return answerRepository.findAllByUserIdAndTaskId(userId, taskId).stream()
                .map(answerMapper::map)
                .toList();
    }
}

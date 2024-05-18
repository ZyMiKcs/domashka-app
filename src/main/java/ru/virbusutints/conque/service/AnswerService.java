package ru.virbusutints.conque.service;

import ru.virbusutints.conque.dto.answer.AnswerDto;

import java.util.List;

public interface AnswerService {

    List<AnswerDto> getUserAnswers(Long userId);

    List<AnswerDto> getUserAnswersByTask(Long userId, Long taskId);
}

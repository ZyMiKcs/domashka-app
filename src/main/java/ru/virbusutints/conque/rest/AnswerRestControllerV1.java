package ru.virbusutints.conque.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.service.AnswerService;

import java.util.List;

@RestController
@RequestMapping("api/v1/answers")
@RequiredArgsConstructor
public class AnswerRestControllerV1 {

    private final AnswerService answerService;

    @GetMapping("/{user_id}")
    public ResponseEntity<List<AnswerDto>> getUserAnswers(@PathVariable("user_id") Long userId,
                                                          @RequestParam(required = false) Long taskId) {
        if (taskId == null) {
            return ResponseEntity.ok(answerService.getUserAnswers(userId));
        }
        return ResponseEntity.ok(answerService.getUserAnswersByTask(userId, taskId));
    }
}

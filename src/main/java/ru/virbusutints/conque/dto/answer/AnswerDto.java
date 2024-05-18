package ru.virbusutints.conque.dto.answer;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.virbusutints.conque.dto.file.FileDto;

import java.util.List;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class AnswerDto {

    private Long userId;
    private String message;
    private List<FileDto> files;
}

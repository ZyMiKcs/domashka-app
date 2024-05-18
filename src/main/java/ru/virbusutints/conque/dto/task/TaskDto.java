package ru.virbusutints.conque.dto.task;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.virbusutints.conque.dto.file.FileDto;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class TaskDto {

    private Long id;
    private Long teacherId;
    private Long subjectId;
    private String title;
    private String name;
    private String description;
    private LocalDateTime expiredAt;
    private String file;
}

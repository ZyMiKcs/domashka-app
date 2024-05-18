package ru.virbusutints.conque.dto.task;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.virbusutints.conque.dto.file.FileDto;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class TaskGetDto {

    private Long id;
    private String status;
    private String subject;
    private String teacher;
    private String title;
    private String description;
    private LocalDateTime expiredAt;
    private Boolean isDeadline;
    private List<FileDto> files;
}

package ru.virbusutints.conque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import ru.virbusutints.conque.dto.file.FileDto;
import ru.virbusutints.conque.dto.task.TaskDto;
import ru.virbusutints.conque.dto.task.TaskGetDto;
import ru.virbusutints.conque.entity.FileEntity;
import ru.virbusutints.conque.entity.TaskEntity;
import ru.virbusutints.conque.entity.UserEntity;
import ru.virbusutints.conque.utils.FileSizeFormatter;

@Mapper(componentModel = "spring",
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        imports = {FileSizeFormatter.class})
public interface TaskMapper {

    @Mapping(target = "id", source = "id")
    @Mapping(target = "status", source = "status")
    @Mapping(target = "title", source = "title")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "expiredAt", source = "expiredAt")
    @Mapping(target = "teacher", source = "teacher")
    @Mapping(target = "subject", source = "subject.name")
    TaskGetDto mapGetShortDto(TaskEntity task);

    @Mapping(target = "id", source = "id")
    @Mapping(target = "owner", source = "owner.externalId")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "filePath", source = "filePath")
    @Mapping(target = "size", expression = "java(FileSizeFormatter.formatSize(file.getSize()))")
    FileDto map(FileEntity file);

    default String map(UserEntity user) {
        String secondName = user.getSecondName();
        String firstNameInitial = user.getFirstName().charAt(0) + ".";
        String middleNameInitial = user.getMiddleName().charAt(0) + ".";
        return secondName + " " + firstNameInitial + " " + middleNameInitial;
    }

    TaskEntity map(TaskDto taskDto);
}

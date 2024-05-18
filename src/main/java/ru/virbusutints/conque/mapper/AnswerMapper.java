package ru.virbusutints.conque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import ru.virbusutints.conque.dto.answer.AnswerDto;
import ru.virbusutints.conque.dto.file.FileDto;
import ru.virbusutints.conque.entity.AnswerEntity;
import ru.virbusutints.conque.entity.FileEntity;
import ru.virbusutints.conque.utils.FileSizeFormatter;

@Mapper(componentModel = "spring",
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        imports = {FileSizeFormatter.class})
public interface AnswerMapper {

    @Mapping(target = "userId", source = "user.externalId")
    @Mapping(target = "message", source = "message")
    AnswerDto map(AnswerEntity answer);

    @Mapping(target = "id", source = "id")
    @Mapping(target = "owner", source = "owner.externalId")
    @Mapping(target = "name", source = "name")
    @Mapping(target = "filePath", source = "filePath")
    @Mapping(target = "size", expression = "java(FileSizeFormatter.formatSize(file.getSize()))")
    FileDto map(FileEntity file);
}

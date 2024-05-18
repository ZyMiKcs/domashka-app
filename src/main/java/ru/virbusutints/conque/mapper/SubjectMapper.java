package ru.virbusutints.conque.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import ru.virbusutints.conque.dto.subject.SubjectDto;
import ru.virbusutints.conque.dto.subject.SubjectNewDto;
import ru.virbusutints.conque.entity.SubjectEntity;

@Mapper(componentModel = "spring",
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SubjectMapper {

    SubjectDto map(SubjectEntity subject);

    SubjectEntity map(SubjectNewDto subject);
}

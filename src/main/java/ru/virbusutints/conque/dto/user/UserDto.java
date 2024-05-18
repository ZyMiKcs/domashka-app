package ru.virbusutints.conque.dto.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.virbusutints.conque.entity.UserEntity;
import ru.virbusutints.conque.entity.UserRole;

import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long id;
    private Long externalId;
    private String firstName;
    private String secondName;
    private String middleName;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String role;

    public UserEntity toEntity() {
        return UserEntity.builder()
                .id(id)
                .externalId(externalId)
                .firstName(firstName)
                .secondName(secondName)
                .middleName(middleName)
                .email(email)
                .createdAt(createdAt)
                .updatedAt(updatedAt)
                .role(UserRole.of(role))
                .build();

    }

    public static UserDto fromEntity(UserEntity user) {
        return UserDto.builder()
                .id(user.getId())
                .externalId(user.getExternalId())
                .firstName(user.getFirstName())
                .secondName(user.getSecondName())
                .middleName(user.getMiddleName())
                .email(user.getEmail())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .role(user.getRole().name())
                .build();
    }
}

package ru.virbusutints.conque.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.virbusutints.conque.dto.user.UserDto;
import ru.virbusutints.conque.entity.UserEntity;
import ru.virbusutints.conque.entity.UserRole;
import ru.virbusutints.conque.repository.UserRepository;
import ru.virbusutints.conque.service.UserService;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserEntity save(UserDto userDto) {
        if (UserRole.of(userDto.getRole()) == UserRole.UNKNOWN) {
            throw new RuntimeException("Incorrect user's role");
        }
        UserEntity mappedUser = mapUserForSave(userDto);
        log.info("User before save: {}", mappedUser);
        UserEntity savedUser = userRepository.save(mappedUser);
        log.info("User after save: {}", savedUser);
        return savedUser;
    }

    private UserEntity mapUserForSave(UserDto userDto) {
        return userDto.toEntity().toBuilder()
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }
}

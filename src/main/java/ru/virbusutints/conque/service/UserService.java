package ru.virbusutints.conque.service;

import ru.virbusutints.conque.dto.user.UserDto;
import ru.virbusutints.conque.entity.UserEntity;

public interface UserService {

    UserEntity save(UserDto userDto);
}

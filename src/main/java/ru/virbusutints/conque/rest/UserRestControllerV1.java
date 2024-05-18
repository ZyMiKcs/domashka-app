package ru.virbusutints.conque.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.virbusutints.conque.dto.user.UserDto;
import ru.virbusutints.conque.service.UserService;

@RestController
@RequestMapping("api/v1/users")
@RequiredArgsConstructor
public class UserRestControllerV1 {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(userService.save(userDto));
    }
}

package ru.virbusutints.conque;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.virbusutints.conque.repository.UserRepository;

@SpringBootApplication
public class ConqueApplication {

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(ConqueApplication.class, args);
    }
}

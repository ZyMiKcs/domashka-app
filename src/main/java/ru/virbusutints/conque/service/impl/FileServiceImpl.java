package ru.virbusutints.conque.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.virbusutints.conque.entity.FileEntity;
import ru.virbusutints.conque.entity.UserEntity;
import ru.virbusutints.conque.repository.FileRepository;
import ru.virbusutints.conque.repository.UserRepository;
import ru.virbusutints.conque.service.FileService;
import ru.virbusutints.conque.storage.FileStorageManager;
import ru.virbusutints.conque.utils.FileConverter;
import ru.virbusutints.conque.utils.FilePathGenerator;

import java.io.File;
import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {

    private final UserRepository userRepository;
    private final FileRepository fileRepository;
    private final FileStorageManager fileStorageManager;

    @Override
    public FileEntity upload(MultipartFile file, Long userId) {
        UserEntity userEntity = userRepository.findByExternalId(userId).orElse(null);
        if (userEntity == null) {
            throw new RuntimeException("User not found");
        }
        File convertedFile;
        try {
            convertedFile = FileConverter.convert(file);
        } catch (Exception e) {
            throw new RuntimeException("Cannot convert file");
        }
        String path = FilePathGenerator.generate(userId, file.getName());
        String uri = fileStorageManager.upload(path, convertedFile);
        FileEntity fileEntity = FileEntity.builder()
                .filePath(uri)
                .name(file.getOriginalFilename())
                .owner(userEntity)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .size(convertedFile.length())
                .build();
        return fileRepository.save(fileEntity);
    }
}

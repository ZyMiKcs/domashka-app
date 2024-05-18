package ru.virbusutints.conque.service;

import org.springframework.web.multipart.MultipartFile;
import ru.virbusutints.conque.entity.FileEntity;

public interface FileService {

    FileEntity upload(MultipartFile file, Long userId);
}

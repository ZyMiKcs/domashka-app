package ru.virbusutints.conque.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileConverter {

    public static File convert(MultipartFile multipartFile) throws IOException {
        String filename = multipartFile.getOriginalFilename();
        Path path = Paths.get(System.getProperty("java.io.tmpdir"), filename);
        File file = path.toFile();

        multipartFile.transferTo(path);
        return file;
    }
}

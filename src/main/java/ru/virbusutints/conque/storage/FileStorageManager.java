package ru.virbusutints.conque.storage;

import java.io.File;

public interface FileStorageManager {

    String upload(String key, File file);
}

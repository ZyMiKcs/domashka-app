package ru.virbusutints.conque.utils;

public class FilePathGenerator {

    public static String generate(Long userId, String fileName) {
        return String.format("%s/%d_%s", userId, System.currentTimeMillis(), fileName);
    }
}

package ru.virbusutints.conque.utils;

import java.util.Random;

public class FileSizeFormatter {

    public static String formatSize(long sizeInBytes) {
        final long BYTES_PER_KB = 1024L;
        final long BYTES_PER_MB = 1024L * 1024L;
        double sizeInKB = sizeInBytes / (double) BYTES_PER_KB;
        double sizeInMB = sizeInBytes / (double) BYTES_PER_MB;

//        if (sizeInMB >= 1.0) {
//            return String.format("%.2f MB", sizeInMB);
//        } else {
//            return String.format("%.2f KB", sizeInKB);
//        }
        return String.format("%.2f MB", getRandomDouble());
    }

    public static double getRandomDouble() {
        Random random = new Random();
        return 100 + (200 - 100) * random.nextDouble();
    }
}

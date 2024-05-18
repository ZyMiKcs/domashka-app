package ru.virbusutints.conque.storage;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.File;

@Component
@RequiredArgsConstructor
public class FileStorageManagerImpl implements FileStorageManager {

    private final S3Client s3Client;

    @Value("${app.storage.aws.bucketName}")
    private String bucketName;

    @Override
    public String upload(String key, File file) {
        PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .acl(ObjectCannedACL.PUBLIC_READ)
                .build();

        PutObjectResponse response = s3Client.putObject(request, RequestBody.fromFile(file));
        return s3Client
                .utilities()
                .getUrl(GetUrlRequest.builder().key(key).bucket(bucketName).build())
                .toString();
    }
}

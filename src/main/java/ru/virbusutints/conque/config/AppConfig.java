package ru.virbusutints.conque.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ru.virbusutints.conque.property.StorageProperty;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.AwsCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3AsyncClient;
import software.amazon.awssdk.services.s3.S3Client;

import java.net.URI;

@Configuration
public class AppConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }

    @Bean
    public S3Client amazonS3(StorageProperty storageProperty) {
        AwsCredentials credentials = AwsBasicCredentials.create(storageProperty.getAccessKey(), storageProperty.getSecretKey());
        return S3Client.builder()
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .region(Region.of(storageProperty.getRegion()))
                .endpointOverride(URI.create(storageProperty.getEndpoint()))
                .build();
    }
}

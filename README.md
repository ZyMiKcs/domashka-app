# Руководство по установке и запуску CONGUE

CONGUE - это открытый исходный код проекта, предназначенного для обмена заданиями между преподавателем и студентом.

## Установка

Для установки и запуска проекта вам понадобится Docker и docker-compose.

1. Склонируйте репозиторий:

```bash
git clone git@github.com:breannly/congue.git
```
2. Перейдите в директорию проекта:

```bash
cd congue
```
3. Чтобы запустить проект, выполните следующую команду:
```bash
docker-compose up -d
```
После успешного запуска проекта вы сможете получить доступ к CONGUE через ваш веб-браузер.
Просто откройте браузер и введите адрес http://localhost:port, где port - порт, который вы настроили в файле docker-compose.yml.

Документация, после запуска, доступна по следующему адресу: http://localhost:port/docs (OpenAPI)

# Используемый стэк технологий:
1. Backend: Java 21, Spring (Boot, JPA), Mapstruct, Lombok, AWS S3 (Yandex Cloud API)
2. Frontend: React.js, TailwindCSS

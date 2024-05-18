CREATE TABLE IF NOT EXISTS tasks
(
    id          BIGSERIAL PRIMARY KEY,
    teacher_id  BIGSERIAL    NOT NULL REFERENCES users (external_id),
    subject_id  BIGSERIAL    NOT NULL REFERENCES subjects (id),
    title       VARCHAR(128) NOT NULL,
    name        VARCHAR(128),
    status      VARCHAR(32),
    description VARCHAR(1024),
    expired_at  TIMESTAMP,
    updated_at  TIMESTAMP             DEFAULT CURRENT_TIMESTAMP,
    created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
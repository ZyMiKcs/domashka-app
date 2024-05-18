CREATE TABLE IF NOT EXISTS files
(
    id         BIGSERIAL PRIMARY KEY,
    owner_id   BIGSERIAL    NOT NULL REFERENCES users (external_id),
    name       VARCHAR(128) NOT NULL,
    size       BIGSERIAL    NOT NULL,
    file_path  VARCHAR(128),
    updated_at TIMESTAMP             DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
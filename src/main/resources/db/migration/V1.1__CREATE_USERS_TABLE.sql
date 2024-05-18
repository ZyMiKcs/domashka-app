CREATE TABLE IF NOT EXISTS users
(
    id          BIGSERIAL PRIMARY KEY,
    external_id BIGSERIAL   NOT NULL UNIQUE,
    first_name  VARCHAR(32) NOT NULL,
    second_name VARCHAR(32) NOT NULL,
    middle_name VARCHAR(32) NOT NULL,
    email       VARCHAR(32) NOT NULL,
    role        VARCHAR(32) NOT NULL,
    updated_at  TIMESTAMP            DEFAULT CURRENT_TIMESTAMP,
    created_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);
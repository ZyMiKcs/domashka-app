CREATE TABLE IF NOT EXISTS subject_users
(
    id         BIGSERIAL PRIMARY KEY,
    subject_id BIGSERIAL NOT NULL REFERENCES subjects (id),
    teacher_id BIGSERIAL NOT NULL REFERENCES users (id)
);
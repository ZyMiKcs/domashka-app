CREATE TABLE IF NOT EXISTS answers
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL NOT NULL REFERENCES users (external_id),
    task_id BIGSERIAL NOT NULL REFERENCES tasks (id),
    message TEXT
);
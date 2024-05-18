CREATE TABLE IF NOT EXISTS answer_files
(
    id        BIGSERIAL PRIMARY KEY,
    answer_id BIGSERIAL NOT NULL REFERENCES answers (id),
    file_id   BIGSERIAL NOT NULL REFERENCES files (id)
);
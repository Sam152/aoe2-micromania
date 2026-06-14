CREATE TABLE bots (
  id BIGSERIAL PRIMARY KEY
  ,bot_name TEXT NOT NULL UNIQUE
  ,generation INT NOT NULL DEFAULT 0
  ,elo INT NOT NULL DEFAULT 1600
  ,wins INT NOT NULL DEFAULT 0
  ,losses INT NOT NULL DEFAULT 0
  ,draws INT NOT NULL DEFAULT 0
  ,games_since_last_prune INT NOT NULL DEFAULT 0
  ,is_active BOOLEAN NOT NULL DEFAULT TRUE
  ,generation_champion BOOLEAN NOT NULL DEFAULT FALSE
  ,tree JSONB NOT NULL
);

CREATE INDEX bots_elo_idx ON bots (elo);

CREATE TABLE activations (
  id BIGSERIAL PRIMARY KEY
  ,bot_id BIGINT NOT NULL REFERENCES bots(id)
  ,path TEXT NOT NULL
  ,unit_type INT NOT NULL
  ,UNIQUE (bot_id, path, unit_type)
);

CREATE TABLE match_results (
  id BIGSERIAL PRIMARY KEY
  ,bot_id BIGINT NOT NULL REFERENCES bots(id)
  ,opponent_id BIGINT NOT NULL REFERENCES bots(id)
  ,tick_count INT NOT NULL
  ,was_winner BOOLEAN NOT NULL
  ,match_elo INT NOT NULL
  ,elo_delta INT NOT NULL
);

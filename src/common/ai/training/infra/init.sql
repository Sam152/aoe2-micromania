CREATE TABLE bots (
  id BIGSERIAL PRIMARY KEY,
  bot_name TEXT NOT NULL UNIQUE,
  tree JSONB NOT NULL,
  elo INT NOT NULL DEFAULT 1600,
  wins INT NOT NULL DEFAULT 0,
  losses INT NOT NULL DEFAULT 0
);

CREATE INDEX bots_elo_idx ON bots (elo);

CREATE TABLE games (
  id BIGSERIAL PRIMARY KEY,
  player_1 BIGINT NOT NULL,
  player_2 BIGINT NOT NULL,
  actions JSONB NOT NULL,
  final_state JSONB NOT NULL,
  player_1_hp INT NOT NULL,
  player_2_hp INT NOT NULL,
  tick_count INT NOT NULL
);

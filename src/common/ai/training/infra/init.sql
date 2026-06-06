CREATE TABLE bots (
  id BIGSERIAL PRIMARY KEY,
  tree JSONB NOT NULL,
  elo INT NOT NULL DEFAULT 1600,
  total_matches INT NOT NULL DEFAULT 0
);

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

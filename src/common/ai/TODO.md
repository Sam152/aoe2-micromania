## AI Todo

- [x] BB closestInRangeOfType
- [x] BB projectiles
- [x] Actions formations
- [x] Train harness
- [x] Offspring?
- [x] Random mutations
- [x] Randomize mutation count?
- [x] Tune node inserts - insert sequences less than actions and conditions
- [x] Do not allow primitives to fill certain action params (but all them to full the params of BB params)
- [x] Require victory in both positions
- [x] Treat timeouts as draws
- [x] Increase requirement of new bots to beat bots from each generation
- [x] Converted units do not form or join groups
- [x] Check mutation system for stuckness - nodes that cannot be deleted, or replaced. A transition selector =>
      sequence.
- [x] Support retaining bots from prior runs.
- [x] Add upgrades and balistics to bots
- [ ] Fix range
- [x] Make gen size 1 - restart from zero at threshold
- [x] Add probability of mutation based on depth (with 0 at root) - as to not insert conditions or actions at level 0.
- [ ] Tourney does a lot of repeat matches over the course of a long harness run.
- [ ] Tourney size grows too large - pick all 0 games + top N.
- [ ] Look deeper into borrowed traits.
- [x] Trees are unpruned, through training process - prune trees during entry into the pool, based on beating prior gens.
- [ ] Inserted seq or sel, need to be seeded with some nodes, they are just inserted as empty in big trees.
- [ ] More aggressive pruning - walk node removal?
- [ ] Idea for benchmarking mutation harness: take a difficult to beat tree, measure how many iterations required to beat it with different versions.

import { useEffect, useMemo, useState } from "react";
import { useTrpc } from "../../hooks/useTrpc.ts";
import type { Bot } from "../../../common/ai/training/infra/repo/getAllTourneyBots.ts";
import { flattenTree } from "../../../common/ai/mutation/utils/flattenTree.ts";
import { UnitType } from "../../../common/units/UnitType.ts";
import { actionsList } from "../../../common/ai/behaviourTree/action/actionsList.ts";
import { conditionList } from "../../../common/ai/behaviourTree/condition/conditionList.ts";
import { blackboardDefinition } from "../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";

// A single row in a frequency chart: the thing counted (an action type, a
// condition type or a blackboard param), how many times it appears across every
// bot's tree, and in how many distinct bots it turns up. Catalog entries that no
// bot uses still appear, with count 0 / 0 bots.
type Tally = { label: string; count: number; bots: number };

// Which unit's trees to analyse. `null` folds all three units together.
type UnitFilter = UnitType | null;

const UNIT_FILTERS: { label: string; value: UnitFilter }[] = [
  { label: "All units", value: null },
  { label: "Archer", value: UnitType.Archer },
  { label: "Mangonel", value: UnitType.Mangonel },
  { label: "Monk", value: UnitType.Monk },
];

// Walks every bot's behaviour tree (for the selected unit, or all units) and
// tallies the frequency of each action type, condition type and blackboard
// param that appears — showing which building blocks evolution actually favours.
export function BotActionFrequencyPlayground() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [unit, setUnit] = useState<UnitFilter>(null);

  const trpc = useTrpc();
  useEffect(() => {
    trpc.getAllBots.query().then(setBots);
  }, [trpc]);

  const { actions, conditions, params } = useMemo(() => tallyAll(bots, unit), [bots, unit]);

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 52px)",
        overflow: "auto",
        background: "black",
        color: "white",
        fontFamily: "monospace",
        padding: "20px 24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
        <h2 style={{ margin: 0, fontSize: "18px" }}>Bot building-block frequency</h2>
        <span style={{ color: "rgba(200,200,200,0.6)", fontSize: "13px" }}>
          {bots.length} bots analysed
        </span>
        <div style={{ display: "flex", gap: "6px", marginLeft: "auto" }}>
          {UNIT_FILTERS.map((f) => (
            <button
              key={f.label}
              className={`speed-btn${unit === f.value ? " speed-btn--active" : ""}`}
              onClick={() => setUnit(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <FrequencyChart title="Actions" tallies={actions} color="#f56565" botCount={bots.length} />
        <FrequencyChart title="Conditions" tallies={conditions} color="#63b3ed" botCount={bots.length} />
        <FrequencyChart title="Params (blackboard values)" tallies={params} color="#48bb78" botCount={bots.length} />
      </div>
    </div>
  );
}

function FrequencyChart(
  { title, tallies, color, botCount }: { title: string; tallies: Tally[]; color: string; botCount: number },
) {
  // Bars are scaled to the busiest row so the shape of the distribution reads at
  // a glance regardless of the absolute counts in each category.
  const max = tallies.reduce((m, t) => Math.max(m, t.count), 0);
  const totalOccurrences = tallies.reduce((sum, t) => sum + t.count, 0);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "10px" }}>
        <span style={{ color, fontWeight: "bold", fontSize: "14px" }}>{title}</span>
        <span style={{ color: "rgba(200,200,200,0.5)", fontSize: "12px" }}>
          {tallies.length} distinct · {totalOccurrences} total
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        {tallies.length === 0 && <div style={{ color: "rgba(200,200,200,0.4)", fontSize: "13px" }}>none</div>}
        {tallies.map((t) => (
          <div
            key={t.label}
            title={`${t.count} occurrences across ${t.bots} of ${botCount} bots`}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.04)",
              borderLeft: `3px solid ${color}`,
              borderRadius: "3px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 8px",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${max > 0 ? (t.count / max) * 100 : 0}%`,
                background: color,
                opacity: 0.16,
              }}
            />
            <span
              style={{
                position: "relative",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                opacity: t.count === 0 ? 0.4 : 1,
              }}
            >
              {t.label}
            </span>
            <span style={{ position: "relative", color: "rgba(220,220,220,0.9)", paddingLeft: "10px", whiteSpace: "nowrap" }}>
              {t.count}
              <span style={{ color: "rgba(200,200,200,0.45)" }}>
                {" · "}{botCount > 0 ? Math.round((t.bots / botCount) * 100) : 0}% of bots
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Count occurrences (across all bots) and bot coverage (distinct bots) for every
// action type, condition type and blackboard param in the selected trees.
function tallyAll(bots: Bot[], unit: UnitFilter) {
  const actions = new Counter();
  const conditions = new Counter();
  const params = new Counter();

  // Seed every catalog entry so building blocks no bot uses still show up at 0.
  actions.seed(Object.keys(actionsList));
  conditions.seed(Object.keys(conditionList));
  params.seed(Object.keys(blackboardDefinition));

  for (const bot of bots) {
    const units = unit === null ? [UnitType.Archer, UnitType.Mangonel, UnitType.Monk] : [unit];
    // Track what this bot uses so each label counts the bot at most once toward
    // its coverage, however many times it repeats within the bot's trees.
    const seen = { actions: new Set<string>(), conditions: new Set<string>(), params: new Set<string>() };

    for (const u of units) {
      const root = bot.tree[u];
      if (!root) { continue; }
      for (const { node } of flattenTree(root)) {
        if (node.nodeType === "action") {
          actions.hit(node.type, seen.actions);
        } else if (node.nodeType === "condition") {
          conditions.hit(node.type, seen.conditions);
        } else if (node.nodeType === "dataValue" && node.type === "BLACKBOARD") {
          params.hit(node.blackboardKey, seen.params);
        }
      }
    }
  }

  return { actions: actions.sorted(), conditions: conditions.sorted(), params: params.sorted() };
}

// Accumulates total occurrences and distinct-bot coverage per label. `hit` is
// called once per node; the per-bot `seen` set gates the coverage increment.
class Counter {
  private counts = new Map<string, number>();
  private bots = new Map<string, number>();

  // Register labels that should always appear, even at 0 (the full catalog).
  seed(labels: string[]) {
    for (const label of labels) {
      if (!this.counts.has(label)) { this.counts.set(label, 0); }
    }
  }

  hit(label: string, seenThisBot: Set<string>) {
    this.counts.set(label, (this.counts.get(label) ?? 0) + 1);
    if (!seenThisBot.has(label)) {
      seenThisBot.add(label);
      this.bots.set(label, (this.bots.get(label) ?? 0) + 1);
    }
  }

  sorted(): Tally[] {
    return [...this.counts.entries()]
      .map(([label, count]) => ({ label, count, bots: this.bots.get(label) ?? 0 }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }
}

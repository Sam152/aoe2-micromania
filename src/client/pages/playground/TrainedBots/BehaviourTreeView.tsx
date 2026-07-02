import { useState } from "react";
import type { BehaviourTreeNode } from "../../../../common/ai/behaviourTree/BehaviourTree.ts";
import type { DataValue } from "../../../../common/ai/behaviourTree/dataValue/DataValue.ts";

// Renders a behaviour tree as a stack of tiles, one per node, each level of the
// tree indented a little further to the left. Tiles are colour-coded by node
// type: red for actions, blue for conditions, green for data values, and a
// neutral grey for the structural composites (selector / sequence).
//
// When a `base` tree is passed, the view diffs `node` against it and marks each
// tile as added / removed / changed — a type-independent status ring plus a
// +/-/≠ marker (removed tiles are dimmed and struck through) — so mutations to
// a bot's tree are visible on the tree itself.
export function BehaviourTreeView({ node, base }: { node: BehaviourTreeNode; base?: BehaviourTreeNode }) {
  const tile = base ? diff(base, node) : build(node, "same");
  return (
    <div className="bt-view">
      <TreeTile tile={tile} />
    </div>
  );
}

type NodeOrValue = BehaviourTreeNode | DataValue;
type DiffStatus = "same" | "added" | "removed" | "changed";

// A flattened, render-ready node: a single tile plus its indented children.
// Children are either a composite's child nodes or a node's param data values
// (the latter carry `paramName`). Everything the view needs is precomputed here
// so rendering is a plain recursive walk.
type DiffTile = {
  kind: "composite" | "condition" | "action" | "value";
  status: DiffStatus;
  label: string;
  meta?: string; // dataType, shown faintly on value tiles
  paramName?: string; // the param a value was bound to
  badge?: string; // "NOT" on inverted conditions
  was?: string; // previous value on a changed literal
  list?: "or" | "and"; // a composite's logic: selector = OR, sequence = AND
  children: DiffTile[];
};

function TreeTile({ tile }: { tile: DiffTile }) {
  const hasChildren = tile.children.length > 0;
  // Composites hold structural children in a list rendered below the tile with
  // connector lines; every other node's children are green data values, which
  // render nested inside the tile itself.
  const isList = tile.list !== undefined;
  // Every node starts expanded so the full tree is visible by default.
  const [collapsed, setCollapsed] = useState(false);

  const classes = [
    "bt-tile",
    `bt-tile--${tile.kind}`,
    tile.status !== "same" && `bt-tile--${tile.status}`,
    hasChildren && "bt-tile--collapsible",
  ].filter(Boolean).join(" ");

  return (
    <div className="bt-node">
      <div className={classes}>
        <div className="bt-tile__header" onClick={hasChildren ? () => setCollapsed((c) => !c) : undefined}>
          {hasChildren && <span className="bt-tile__toggle">{collapsed ? "▸" : "▾"}</span>}
          {tile.status !== "same" && <span className="bt-tile__status">{marker(tile.status)}</span>}
          {tile.paramName && <span className="bt-tile__param">{tile.paramName}</span>}
          {tile.badge && <span className="bt-tile__badge">{tile.badge}</span>}
          <span className="bt-tile__label">{tile.label}</span>
          {tile.was !== undefined && <span className="bt-tile__was">was {tile.was}</span>}
          {tile.meta && <span className="bt-tile__meta">{tile.meta}</span>}
        </div>
        {!isList && hasChildren && !collapsed && (
          <div className="bt-tile__values">
            {tile.children.map((child, i) => <TreeTile key={i} tile={child} />)}
          </div>
        )}
      </div>
      {isList && !collapsed && (
        <div className={`bt-children bt-children--${tile.list}`}>
          {tile.children.map((child, i) => <TreeTile key={i} tile={child} />)}
        </div>
      )}
    </div>
  );
}

function marker(status: DiffStatus): string {
  return status === "added" ? "+" : status === "removed" ? "−" : "≠";
}

// Build a tile for a node (and all its descendants) with a fixed status. Used
// for the no-diff view ("same") and for whole added / removed subtrees.
function build(node: NodeOrValue, status: DiffStatus, paramName?: string): DiffTile {
  if (node.nodeType === "selector" || node.nodeType === "sequence") {
    return {
      kind: "composite",
      status,
      label: node.nodeType,
      list: node.nodeType === "selector" ? "or" : "and",
      children: node.nodes.map((c) => build(c, status)),
    };
  }
  if (node.nodeType === "condition") {
    return {
      kind: "condition",
      status,
      label: node.type,
      badge: node.invert ? "NOT" : undefined,
      children: paramTiles(node.params, status),
    };
  }
  if (node.nodeType === "action") {
    return { kind: "action", status, label: node.type, children: paramTiles(node.params, status) };
  }
  if (node.type === "LITERAL") {
    return { kind: "value", status, label: String(node.value), meta: node.dataType, paramName, children: [] };
  }
  return {
    kind: "value",
    status,
    label: node.blackboardKey,
    meta: node.dataType,
    paramName,
    children: paramTiles(node.params, status),
  };
}

function paramTiles(params: Record<string, DataValue>, status: DiffStatus): DiffTile[] {
  return Object.entries(params).map(([name, value]) => build(value, status, name));
}

// Diff a base node against the next node, both occupying the same slot. Returns
// the next node's tile, annotated: identity-preserving changes (params, invert,
// literal values) are marked in place; structural changes come through as
// added / removed child tiles from diffChildren / diffParams.
function diff(base: NodeOrValue, next: NodeOrValue, paramName?: string): DiffTile {
  const tile = build(next, "same", paramName);
  if (equal(base, next)) { return tile; }
  if (base.nodeType !== next.nodeType) { tile.status = "changed"; return tile; }

  if (next.nodeType === "selector" || next.nodeType === "sequence") {
    tile.children = diffChildren((base as typeof next).nodes, next.nodes);
    return tile;
  }
  if (next.nodeType === "condition") {
    const b = base as typeof next;
    tile.children = diffParams(b.params, next.params);
    if (b.type !== next.type || b.invert !== next.invert) { tile.status = "changed"; }
    return tile;
  }
  if (next.nodeType === "action") {
    const b = base as typeof next;
    tile.children = diffParams(b.params, next.params);
    if (b.type !== next.type) { tile.status = "changed"; }
    return tile;
  }
  // Data value.
  if (next.type === "LITERAL") {
    if (base.nodeType === "dataValue" && base.type === "LITERAL" && base.dataType === next.dataType) {
      tile.status = "changed";
      tile.was = String(base.value);
    } else {
      tile.status = "changed";
    }
    return tile;
  }
  if (base.nodeType === "dataValue" && base.type === "BLACKBOARD" && base.blackboardKey === next.blackboardKey) {
    tile.children = diffParams(base.params, next.params);
  } else {
    tile.status = "changed";
  }
  return tile;
}

function diffParams(base: Record<string, DataValue>, next: Record<string, DataValue>): DiffTile[] {
  const out: DiffTile[] = [];
  for (const [name, value] of Object.entries(next)) {
    out.push(name in base ? diff(base[name], value, name) : build(value, "added", name));
  }
  for (const [name, value] of Object.entries(base)) {
    if (!(name in next)) { out.push(build(value, "removed", name)); }
  }
  return out;
}

// Diff two child-node lists. An LCS over deep equality anchors the unchanged
// children; each run of unmatched children between anchors is paired by node
// identity (so a child with a tweaked param reads as one "changed" tile rather
// than a remove + add pair), and whatever is left over is added or removed.
function diffChildren(base: BehaviourTreeNode[], next: BehaviourTreeNode[]): DiffTile[] {
  const a = base.map((n) => JSON.stringify(n));
  const b = next.map((n) => JSON.stringify(n));
  const n = a.length;
  const m = b.length;

  const lcs: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }

  type Op = { type: "same" | "del" | "ins"; base?: BehaviourTreeNode; next?: BehaviourTreeNode };
  const ops: Op[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { ops.push({ type: "same", next: next[j] }); i++; j++; }
    else if (lcs[i + 1][j] >= lcs[i][j + 1]) { ops.push({ type: "del", base: base[i] }); i++; }
    else { ops.push({ type: "ins", next: next[j] }); j++; }
  }
  while (i < n) { ops.push({ type: "del", base: base[i++] }); }
  while (j < m) { ops.push({ type: "ins", next: next[j++] }); }

  const out: DiffTile[] = [];
  let k = 0;
  while (k < ops.length) {
    if (ops[k].type === "same") { out.push(build(ops[k].next!, "same")); k++; continue; }
    const dels: BehaviourTreeNode[] = [];
    const inss: BehaviourTreeNode[] = [];
    while (k < ops.length && ops[k].type !== "same") {
      if (ops[k].type === "del") { dels.push(ops[k].base!); }
      else { inss.push(ops[k].next!); }
      k++;
    }
    const used = new Set<number>();
    for (const del of dels) {
      const idx = inss.findIndex((ins, ix) => !used.has(ix) && identity(ins) === identity(del));
      if (idx >= 0) { used.add(idx); out.push(diff(del, inss[idx])); }
      else { out.push(build(del, "removed")); }
    }
    inss.forEach((ins, ix) => { if (!used.has(ix)) { out.push(build(ins, "added")); } });
  }
  return out;
}

// The identity used to pair a removed child with an added one: same node type,
// and for actions / conditions the same action / condition type.
function identity(node: BehaviourTreeNode): string {
  if (node.nodeType === "condition" || node.nodeType === "action") { return `${node.nodeType}:${node.type}`; }
  return node.nodeType;
}

function equal(a: NodeOrValue, b: NodeOrValue): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

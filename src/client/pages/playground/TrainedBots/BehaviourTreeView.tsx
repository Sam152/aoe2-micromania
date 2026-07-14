import { useEffect, useMemo, useState } from "react";
import type { BehaviourTreeNode } from "../../../../common/ai/behaviourTree/BehaviourTree.ts";
import type { DataValue } from "../../../../common/ai/behaviourTree/dataValue/DataValue.ts";
import { flattenTree } from "../../../../common/ai/mutation/utils/flattenTree.ts";
import {
  buildMutationCandidates,
  MutationCandidate,
} from "../../../../common/ai/mutation/utils/buildMutationCandidates.ts";

// A mutation candidate as rendered in the side panel: a human-readable label,
// its raw probability weight, and the tree-wide total those weights sum to (the
// denominator withProbability rolls against), shown as e.g. "2/30".
export type CandidateInfo = { label: string; probability: number; total: number };

// A node's mutation candidates surfaced to the side panel, with a title.
export type NodeSelection = { title: string; candidates: CandidateInfo[] };

// Renders a behaviour tree as a stack of tiles, one per node, each level of the
// tree indented a little further to the left. Tiles are colour-coded by node
// type: red for actions, blue for conditions, green for data values, and a
// neutral grey for the structural composites (selector / sequence).
//
// The ⚙ icon on each node drives the candidates panel: hovering it previews
// that node's candidates (`onHover`), clicking it pins them (`onPin`). On mount
// / whenever the tree changes, the root node is reported as the default
// (`onDefault`).
export function BehaviourTreeView(
  { node, withBorrowedGeneticTraits, onHover, onPin, onDefault, highlightedNodes }: {
    node: BehaviourTreeNode;
    withBorrowedGeneticTraits: boolean;
    onHover: (selection: NodeSelection | null) => void;
    onPin: (selection: NodeSelection) => void;
    onDefault: (selection: NodeSelection) => void;
    // Tree nodes to highlight, matched by identity (from expanded log entries).
    highlightedNodes: Set<object>;
  },
) {
  const candidatesByNode = useMemo(
    () => buildCandidatesByNode(node, withBorrowedGeneticTraits),
    [node, withBorrowedGeneticTraits],
  );
  // Report the root node as the panel's default whenever the tree changes.
  useEffect(() => {
    onDefault({ title: node.nodeType, candidates: candidatesByNode.get(node) ?? [] });
  }, [node, candidatesByNode]);
  return (
    <div className="bt-view">
      <TreeTile tile={build(node, candidatesByNode, highlightedNodes)} onHover={onHover} onPin={onPin} />
    </div>
  );
}

type NodeOrValue = BehaviourTreeNode | DataValue;

// A flattened, render-ready node: a single tile plus its indented children.
// Children are either a composite's child nodes or a node's param data values
// (the latter carry `paramName`). Everything the view needs is precomputed here
// so rendering is a plain recursive walk.
type Tile = {
  kind: "composite" | "condition" | "action" | "value";
  label: string;
  meta?: string; // dataType, shown faintly on value tiles
  paramName?: string; // the param a value was bound to
  badge?: string; // "NOT" on inverted conditions
  list?: "or" | "and"; // a composite's logic: selector = OR, sequence = AND
  candidates: CandidateInfo[]; // mutation candidates owned by this node
  highlighted: boolean; // this node is the target of an expanded log mutation
  children: Tile[];
};

function TreeTile(
  { tile, onHover, onPin }: {
    tile: Tile;
    onHover: (selection: NodeSelection | null) => void;
    onPin: (selection: NodeSelection) => void;
  },
) {
  const hasChildren = tile.children.length > 0;
  const title = tile.paramName ? `${tile.paramName}: ${tile.label}` : tile.label;
  // Composites hold structural children in a list rendered below the tile with
  // connector lines; every other node's children are green data values, which
  // render nested inside the tile itself.
  const isList = tile.list !== undefined;
  // Only composites start expanded, so the tree structure is visible; actions,
  // conditions and blackboard values start collapsed, hiding their data values.
  const [collapsed, setCollapsed] = useState(tile.kind !== "composite");

  const classes = [
    "bt-tile",
    `bt-tile--${tile.kind}`,
    hasChildren && "bt-tile--collapsible",
    tile.highlighted && "bt-tile--highlighted",
  ].filter(Boolean).join(" ");

  return (
    <div className="bt-node">
      <div className={classes}>
        <div className="bt-tile__header" onClick={hasChildren ? () => setCollapsed((c) => !c) : undefined}>
          {hasChildren && <span className="bt-tile__toggle">{collapsed ? "▸" : "▾"}</span>}
          {tile.paramName && <span className="bt-tile__param">{tile.paramName}</span>}
          {tile.badge && <span className="bt-tile__badge">{tile.badge}</span>}
          <span className="bt-tile__label">{tile.label}</span>
          {tile.meta && <span className="bt-tile__meta">{tile.meta}</span>}
          {tile.candidates.length > 0 && (
            <button
              className="bt-tile__muts"
              title="Hover to preview mutation candidates, click to pin"
              onMouseEnter={() => onHover({ title, candidates: tile.candidates })}
              onMouseLeave={() => onHover(null)}
              onClick={(e) => {
                e.stopPropagation();
                onPin({ title, candidates: tile.candidates });
              }}
            >
              ⚙ {tile.candidates.length}
            </button>
          )}
        </div>
        {!isList && hasChildren && !collapsed && (
          <div className="bt-tile__values">
            {tile.children.map((child, i) => <TreeTile key={i} tile={child} onHover={onHover} onPin={onPin} />)}
          </div>
        )}
      </div>
      {isList && !collapsed && (
        <div className={`bt-children bt-children--${tile.list}`}>
          {tile.children.map((child, i) => <TreeTile key={i} tile={child} onHover={onHover} onPin={onPin} />)}
        </div>
      )}
    </div>
  );
}

// Flatten the tree, build its weighted mutation candidates, and group them by
// the node they act on so each tile can list its own candidates.
function buildCandidatesByNode(
  root: BehaviourTreeNode,
  withBorrowedGeneticTraits: boolean,
): Map<object, CandidateInfo[]> {
  const candidates = buildMutationCandidates(flattenTree(root), withBorrowedGeneticTraits);
  const total = candidates.reduce((sum, { probability }) => sum + probability, 0);
  const map = new Map<object, CandidateInfo[]>();
  for (const { probability, effect } of candidates) {
    const owner = candidateOwner(effect);
    const info: CandidateInfo = { label: candidateLabel(effect), probability, total };
    const list = map.get(owner);
    if (list) { list.push(info); }
    else { map.set(owner, [info]); }
  }
  return map;
}

// The node a candidate mutates — where its button should appear in the tree.
// Returned as a plain object since it's only ever used as a map key by identity.
function candidateOwner(effect: MutationCandidate): object {
  switch (effect.type) {
    case "INVERT_CONDITION":
      return effect.condition;
    case "REPLACE_PARAM_DATA_VALUE":
      return effect.node;
    case "CHANGE_LITERAL_DATA_VALUE":
      return effect.parentNode;
    default:
      return effect.listNode;
  }
}

// A human-readable one-liner describing what a candidate mutation would do.
function candidateLabel(effect: MutationCandidate): string {
  switch (effect.type) {
    case "INVERT_CONDITION":
      return "Invert condition";
    case "REPLACE_PARAM_DATA_VALUE":
      return `Replace param "${effect.paramName}" with a new data value`;
    case "CHANGE_LITERAL_DATA_VALUE":
      return `Change literal "${effect.paramName}"`;
    case "ADD_ACTION_TO_LIST":
      return "Add a random action child";
    case "ADD_CONDITION_TO_LIST":
      return "Add a random condition child";
    case "ADD_SEQ_OR_SEL_NODE_TO_LIST":
      return "Add a random sequence/selector child";
    case "BORROW_GENETIC_NODE_INTO_LIST":
      return "Borrow an action/condition from another bot";
    case "BORROW_GENETIC_SEQ_OR_SEL_INTO_LIST":
      return "Borrow a sequence/selector from another bot";
    case "REMOVE_NODE_FROM_LIST":
      return "Remove a random child";
  }
}

// Build a tile for a node and all its descendants.
function build(
  node: NodeOrValue,
  candidatesByNode: Map<object, CandidateInfo[]>,
  highlightedNodes: Set<object>,
  paramName?: string,
): Tile {
  const candidates = candidatesByNode.get(node) ?? [];
  const highlighted = highlightedNodes.has(node);
  if (node.nodeType === "selector" || node.nodeType === "sequence") {
    return {
      kind: "composite",
      label: node.nodeType,
      list: node.nodeType === "selector" ? "or" : "and",
      candidates,
      highlighted,
      children: node.nodes.map((c) => build(c, candidatesByNode, highlightedNodes)),
    };
  }
  if (node.nodeType === "condition") {
    return {
      kind: "condition",
      label: node.type,
      badge: node.invert ? "NOT" : undefined,
      candidates,
      highlighted,
      children: paramTiles(node.params, candidatesByNode, highlightedNodes),
    };
  }
  if (node.nodeType === "action") {
    return {
      kind: "action",
      label: node.type,
      candidates,
      highlighted,
      children: paramTiles(node.params, candidatesByNode, highlightedNodes),
    };
  }
  if (node.type === "LITERAL") {
    return {
      kind: "value",
      label: String(node.value),
      meta: node.dataType,
      paramName,
      candidates,
      highlighted,
      children: [],
    };
  }
  return {
    kind: "value",
    label: node.blackboardKey,
    meta: node.dataType,
    paramName,
    candidates,
    highlighted,
    children: paramTiles(node.params, candidatesByNode, highlightedNodes),
  };
}

function paramTiles(
  params: Record<string, DataValue>,
  candidatesByNode: Map<object, CandidateInfo[]>,
  highlightedNodes: Set<object>,
): Tile[] {
  return Object.entries(params).map(([name, value]) => build(value, candidatesByNode, highlightedNodes, name));
}

import type { BehaviourTreeNode } from "../../../../common/ai/behaviourTree/BehaviourTree.ts";
import type { DataValue } from "../../../../common/ai/behaviourTree/dataValue/DataValue.ts";

// Renders a behaviour tree as a stack of tiles, one per node, each level of the
// tree indented a little further to the left. Tiles are colour-coded by node
// type: red for actions, blue for conditions, green for data values, and a
// neutral grey for the structural composites (selector / sequence).
export function BehaviourTreeView({ node }: { node: BehaviourTreeNode }) {
  return (
    <div className="bt-view">
      <TreeNode node={node} />
    </div>
  );
}

// A behaviour node or one of its param data values, plus the param name the
// value was bound to (only present for the labelled children of a node).
function TreeNode({ node, paramName }: { node: BehaviourTreeNode | DataValue; paramName?: string }) {
  if (node.nodeType === "selector" || node.nodeType === "sequence") {
    return (
      <div className="bt-node">
        <Tile kind="composite" label={node.nodeType} />
        <div className="bt-children">
          {node.nodes.map((child, i) => <TreeNode key={i} node={child} />)}
        </div>
      </div>
    );
  }

  if (node.nodeType === "condition") {
    return (
      <div className="bt-node">
        <Tile kind="condition" label={node.type} badge={node.invert ? "NOT" : undefined} />
        <Params params={node.params} />
      </div>
    );
  }

  if (node.nodeType === "action") {
    return (
      <div className="bt-node">
        <Tile kind="action" label={node.type} />
        <Params params={node.params} />
      </div>
    );
  }

  // A data value: either an inline literal or a blackboard lookup that can
  // itself carry further data-value params.
  if (node.type === "LITERAL") {
    return (
      <div className="bt-node">
        <Tile kind="value" paramName={paramName} label={String(node.value)} meta={node.dataType} />
      </div>
    );
  }

  return (
    <div className="bt-node">
      <Tile kind="value" paramName={paramName} label={node.blackboardKey} meta={node.dataType} />
      <Params params={node.params} />
    </div>
  );
}

// Renders a node's params (a name-keyed map of data values) as indented
// children, one tile each, labelled with the param name.
function Params({ params }: { params: Record<string, DataValue> }) {
  const entries = Object.entries(params);
  if (entries.length === 0) { return null; }
  return (
    <div className="bt-children">
      {entries.map(([name, value]) => <TreeNode key={name} node={value} paramName={name} />)}
    </div>
  );
}

function Tile({
  kind,
  label,
  paramName,
  badge,
  meta,
}: {
  kind: "composite" | "condition" | "action" | "value";
  label: string;
  paramName?: string;
  badge?: string;
  meta?: string;
}) {
  return (
    <div className={`bt-tile bt-tile--${kind}`}>
      {paramName && <span className="bt-tile__param">{paramName}</span>}
      {badge && <span className="bt-tile__badge">{badge}</span>}
      <span className="bt-tile__label">{label}</span>
      {meta && <span className="bt-tile__meta">{meta}</span>}
    </div>
  );
}

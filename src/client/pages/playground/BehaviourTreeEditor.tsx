import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import type { BehaviourTreeNode, UnitAwareBehaviourTree } from "../../../common/ai/behaviourTree/BehaviourTree.ts";
import type { ConditionNode } from "../../../common/ai/behaviourTree/condition/Condition.ts";
import type { ActionNode } from "../../../common/ai/behaviourTree/action/ActionDefinition.ts";
import type { DataValue } from "../../../common/ai/behaviourTree/dataValue/DataValue.ts";
import type { DataType } from "../../../common/ai/behaviourTree/dataType/dataTypes.ts";
import type { BlackboardKey } from "../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import type { ConditionType } from "../../../common/ai/behaviourTree/condition/conditionList.ts";
import { conditionList } from "../../../common/ai/behaviourTree/condition/conditionList.ts";
import { actionsList } from "../../../common/ai/behaviourTree/action/actionsList.ts";
import { blackboardDefinition } from "../../../common/ai/behaviourTree/blackboard/blackboardDefinition.ts";
import { dataTypes } from "../../../common/ai/behaviourTree/dataType/dataTypes.ts";
import { UnitType } from "../../../common/units/UnitType.ts";
import { sampleTree } from "../../../common/ai/behaviourTree/__fixtures__/sampleTree.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

type NodePath = number[];
type ActionType = keyof typeof actionsList;

// ─── Tree Utilities ───────────────────────────────────────────────────────────

function getNodeAtPath(root: BehaviourTreeNode, path: NodePath): BehaviourTreeNode | null {
  if (path.length === 0) { return root; }
  if (root.nodeType !== "selector" && root.nodeType !== "sequence") { return null; }
  const [head, ...rest] = path;
  return head < root.nodes.length ? getNodeAtPath(root.nodes[head], rest) : null;
}

function updateAtPath(root: BehaviourTreeNode, path: NodePath, replacement: BehaviourTreeNode): BehaviourTreeNode {
  if (path.length === 0) { return replacement; }
  if (root.nodeType !== "selector" && root.nodeType !== "sequence") { return root; }
  const [head, ...rest] = path;
  return { ...root, nodes: root.nodes.map((n, i) => i === head ? updateAtPath(n, rest, replacement) : n) };
}

function deleteAtPath(root: BehaviourTreeNode, path: NodePath): BehaviourTreeNode {
  if (path.length === 0) { return root; }
  const parentPath = path.slice(0, -1);
  const idx = path[path.length - 1];
  const parent = getNodeAtPath(root, parentPath);
  if (!parent || (parent.nodeType !== "selector" && parent.nodeType !== "sequence")) { return root; }
  return updateAtPath(root, parentPath, { ...parent, nodes: parent.nodes.filter((_, i) => i !== idx) });
}

function insertChild(root: BehaviourTreeNode, parentPath: NodePath, child: BehaviourTreeNode): BehaviourTreeNode {
  const parent = getNodeAtPath(root, parentPath);
  if (!parent || (parent.nodeType !== "selector" && parent.nodeType !== "sequence")) { return root; }
  return updateAtPath(root, parentPath, { ...parent, nodes: [...parent.nodes, child] });
}

function pathsEqual(a: NodePath | null, b: NodePath): boolean {
  if (a === null) { return false; }
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

// ─── Factories (self-describing — reads from system registries) ───────────────

function makeDefaultDataValue(dataType: DataType): DataValue {
  const dt = dataTypes[dataType];
  if ((dt.allowedValueTypes as readonly string[]).includes("LITERAL")) {
    return { nodeType: "dataValue", type: "LITERAL", dataType, value: dt.defaultValue } as DataValue;
  }
  const key = (Object.keys(blackboardDefinition) as BlackboardKey[]).find((k) =>
    blackboardDefinition[k].dataType === dataType
  );
  if (key) {
    const bbDef = blackboardDefinition[key];
    const bbParams: Record<string, DataValue> = {};
    for (const [pk, pv] of Object.entries(bbDef.params)) {
      bbParams[pk] = makeDefaultDataValue((pv as { dataType: DataType }).dataType);
    }
    return { nodeType: "dataValue", type: "BLACKBOARD", dataType, blackboardKey: key, params: bbParams } as DataValue;
  }
  return { nodeType: "dataValue", type: "LITERAL", dataType, value: dt.defaultValue } as DataValue;
}

function makeDefaultConditionNode(type: ConditionType): ConditionNode {
  const def = conditionList[type];
  const params: Record<string, DataValue> = {};
  for (const [k, v] of Object.entries(def.params)) {
    params[k] = makeDefaultDataValue((v as { dataType: DataType }).dataType);
  }
  return { nodeType: "condition", type, invert: false, params } as unknown as ConditionNode;
}

function makeDefaultActionNode(type: ActionType): ActionNode {
  const def = actionsList[type];
  const params: Record<string, DataValue> = {};
  for (const [k, v] of Object.entries(def.params)) {
    params[k] = makeDefaultDataValue((v as { dataType: DataType }).dataType);
  }
  return { nodeType: "action", type, params } as unknown as ActionNode;
}

function makeDefaultNode(kind: string): BehaviourTreeNode {
  if (kind === "selector") { return { nodeType: "selector", nodes: [] }; }
  if (kind === "sequence") { return { nodeType: "sequence", nodes: [] }; }
  if (conditionList[kind as ConditionType]) { return makeDefaultConditionNode(kind as ConditionType); }
  if (actionsList[kind as ActionType]) { return makeDefaultActionNode(kind as ActionType); }
  return { nodeType: "sequence", nodes: [] };
}

// ─── Derived constants from the system ───────────────────────────────────────

const CONDITION_TYPES = Object.keys(conditionList) as ConditionType[];
const ACTION_TYPES = Object.keys(actionsList) as ActionType[];
const BB_KEYS = Object.keys(blackboardDefinition) as BlackboardKey[];
const UNIT_TYPES = Object.values(UnitType).filter((v) => typeof v === "number") as UnitType[];

function unitTypeLabel(ut: UnitType): string {
  return UnitType[ut];
}

function bbKeysForDataType(dataType: DataType): BlackboardKey[] {
  return BB_KEYS.filter((k) => blackboardDefinition[k].dataType === dataType);
}

// ─── Visual constants ─────────────────────────────────────────────────────────

const C = {
  bg: "#0d0d12",
  surface: "#15151e",
  surfaceHover: "#1e1e2a",
  border: "#2a2a3a",
  text: "#ddddf0",
  textMuted: "#60607a",
  selector: "#4488ff",
  sequence: "#ff8844",
  condition: "#33cc88",
  action: "#bb55ff",
  line: "#303040",
  selected: "#ffffff",
  warning: "#ffaa44",
};

function nodeColor(nodeType: string): string {
  if (nodeType === "selector") { return C.selector; }
  if (nodeType === "sequence") { return C.sequence; }
  if (nodeType === "condition") { return C.condition; }
  if (nodeType === "action") { return C.action; }
  return C.text;
}

function nodeSymbol(nodeType: string): string {
  if (nodeType === "selector") { return "?"; }
  if (nodeType === "sequence") { return "→"; }
  if (nodeType === "condition") { return "◆"; }
  if (nodeType === "action") { return "●"; }
  return "·";
}

function nodeLabel(node: BehaviourTreeNode): string {
  if (node.nodeType === "selector") { return "Selector"; }
  if (node.nodeType === "sequence") { return "Sequence"; }
  if (node.nodeType === "condition") { return node.type + (node.invert ? " (NOT)" : ""); }
  if (node.nodeType === "action") { return node.type; }
  return "";
}

// ─── Shared style helpers ─────────────────────────────────────────────────────

const inputStyle = {
  background: "#0a0a12",
  border: `1px solid #2a2a3a`,
  borderRadius: 4,
  color: C.text,
  padding: "3px 8px",
  fontSize: 13,
  fontFamily: "monospace",
  width: 110,
} as const;

const selectStyle = {
  background: "#0a0a12",
  border: `1px solid #2a2a3a`,
  borderRadius: 4,
  color: C.text,
  padding: "4px 8px",
  fontSize: 13,
  fontFamily: "monospace",
  width: "100%",
} as const;

function pillBtn(active: boolean, color: string) {
  return {
    padding: "2px 10px",
    fontSize: 11,
    fontFamily: "monospace",
    borderRadius: 3,
    border: `1px solid ${active ? color + "88" : "#2a2a3a"}`,
    background: active ? color + "22" : "transparent",
    color: active ? color : C.textMuted,
    cursor: "pointer",
  } as const;
}

// ─── LiteralEditor ────────────────────────────────────────────────────────────

function LiteralEditor(
  { dataType, value, onChange }: { dataType: DataType; value: unknown; onChange: (v: unknown) => void },
) {
  if (dataType === "boolean") {
    return (
      <input
        type="checkbox"
        checked={value as boolean}
        onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: C.condition, cursor: "pointer" }}
      />
    );
  }
  if (dataType === "number" || dataType === "count" || dataType === "vectorMagnitude") {
    return (
      <input
        type="number"
        value={value as number}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        style={inputStyle}
      />
    );
  }
  if (dataType === "vector") {
    const vec = value as { x: number; y: number };
    return (
      <div style={{ display: "flex", gap: 6 }}>
        {(["x", "y"] as const).map((axis) => (
          <label key={axis} style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, color: C.textMuted }}>
            {axis}
            <input
              type="number"
              value={vec[axis]}
              onChange={(e) =>
                onChange({ ...vec, [axis]: parseFloat(e.target.value) || 0 })}
              style={{ ...inputStyle, width: 70 }}
            />
          </label>
        ))}
      </div>
    );
  }
  if (dataType === "unitType") {
    const options = ["ARCHER", "MANGO", "MONK"];
    return (
      <select value={value as string} onChange={(e) => onChange(e.target.value)} style={selectStyle}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }
  if (dataType === "unitId") {
    return <span style={{ color: C.textMuted, fontSize: 11 }}>unitId — blackboard only</span>;
  }
  return <span style={{ color: C.textMuted, fontSize: 11 }}>{String(value)}</span>;
}

// ─── DataValueEditor ──────────────────────────────────────────────────────────

function DataValueEditor({
  label,
  requiredDataType,
  value,
  onChange,
}: {
  label: string;
  requiredDataType: DataType;
  value: DataValue;
  onChange: (v: DataValue) => void;
}) {
  const dt = dataTypes[requiredDataType];
  const allowLiteral = (dt.allowedValueTypes as readonly string[]).includes("LITERAL");
  const matchingBbKeys = bbKeysForDataType(requiredDataType);
  const isBlackboard = value.type === "BLACKBOARD";

  const switchToLiteral = () => {
    onChange(
      { nodeType: "dataValue", type: "LITERAL", dataType: requiredDataType, value: dt.defaultValue } as DataValue,
    );
  };

  const switchToBlackboard = (key: BlackboardKey = matchingBbKeys[0]) => {
    const bbDef = blackboardDefinition[key];
    const bbParams: Record<string, DataValue> = {};
    for (const [pk, pv] of Object.entries(bbDef.params)) {
      bbParams[pk] = makeDefaultDataValue((pv as { dataType: DataType }).dataType);
    }
    onChange(
      {
        nodeType: "dataValue",
        type: "BLACKBOARD",
        dataType: requiredDataType,
        blackboardKey: key,
        params: bbParams,
      } as DataValue,
    );
  };

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 5, letterSpacing: 0.5 }}>{label}</div>
      <div style={{ display: "flex", gap: 5, marginBottom: 7 }}>
        {allowLiteral && <button onClick={switchToLiteral} style={pillBtn(!isBlackboard, C.selector)}>LITERAL</button>}
        {matchingBbKeys.length > 0 && (
          <button onClick={() => switchToBlackboard()} style={pillBtn(isBlackboard, C.action)}>BLACKBOARD</button>
        )}
      </div>

      {!isBlackboard && (
        <LiteralEditor
          dataType={requiredDataType}
          value={(value as { value: unknown }).value}
          onChange={(v) => onChange({ ...value, value: v } as DataValue)}
        />
      )}

      {isBlackboard && value.type === "BLACKBOARD" && (
        <div>
          <select
            value={value.blackboardKey}
            onChange={(e) => switchToBlackboard(e.target.value as BlackboardKey)}
            style={selectStyle}
          >
            {matchingBbKeys.map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
          {Object.entries(blackboardDefinition[value.blackboardKey].params).map(([pk, pDef]) => {
            const paramDataType = (pDef as { dataType: DataType }).dataType;
            const paramVal = (value.params as Record<string, DataValue>)[pk] ?? makeDefaultDataValue(paramDataType);
            return (
              <div key={pk} style={{ marginLeft: 12, marginTop: 8 }}>
                <DataValueEditor
                  label={pk}
                  requiredDataType={paramDataType}
                  value={paramVal}
                  onChange={(newVal) => {
                    onChange(
                      {
                        ...value,
                        params: { ...(value.params as Record<string, DataValue>), [pk]: newVal },
                      } as DataValue,
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── ConditionEditor ──────────────────────────────────────────────────────────

function ConditionEditor({ node, onUpdate }: { node: ConditionNode; onUpdate: (n: ConditionNode) => void }) {
  const def = conditionList[node.type];
  return (
    <div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 6 }}>CONDITION TYPE</div>
        <select
          value={node.type}
          onChange={(e) => onUpdate(makeDefaultConditionNode(e.target.value as ConditionType))}
          style={selectStyle}
        >
          {CONDITION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", marginBottom: 14 }}>
        <input
          type="checkbox"
          checked={node.invert}
          onChange={(e) => onUpdate({ ...node, invert: e.target.checked })}
          style={{ accentColor: C.condition, cursor: "pointer" }}
        />
        <span style={{ fontSize: 13, color: C.text }}>
          Invert result <span style={{ color: C.textMuted }}>(NOT)</span>
        </span>
      </label>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 12, letterSpacing: 0.5 }}>PARAMETERS</div>
        {Object.entries(def.params).map(([key, paramDef]) => (
          <DataValueEditor
            key={key}
            label={key}
            requiredDataType={(paramDef as { dataType: DataType }).dataType}
            value={(node.params as Record<string, DataValue>)[key]}
            onChange={(newVal) =>
              onUpdate(
                {
                  ...node,
                  params: { ...(node.params as Record<string, DataValue>), [key]: newVal },
                } as unknown as ConditionNode,
              )}
          />
        ))}
        {Object.keys(def.params).length === 0 && <div style={{ fontSize: 12, color: C.textMuted }}>No parameters</div>}
      </div>
    </div>
  );
}

// ─── ActionEditor ─────────────────────────────────────────────────────────────

function ActionEditor(
  { node, onUpdate, activeUnitType }: { node: ActionNode; onUpdate: (n: ActionNode) => void; activeUnitType: UnitType },
) {
  const type = node.type as ActionType;
  const def = actionsList[type];
  const isCompatible = def.applicableForUnitType.includes(activeUnitType);

  return (
    <div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 6 }}>ACTION TYPE</div>
        <select
          value={node.type}
          onChange={(e) => onUpdate(makeDefaultActionNode(e.target.value as ActionType))}
          style={selectStyle}
        >
          {ACTION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      {!isCompatible && (
        <div
          style={{
            padding: "8px 10px",
            background: "#2a1800",
            border: `1px solid #884422`,
            borderRadius: 4,
            fontSize: 12,
            color: C.warning,
            marginBottom: 14,
          }}
        >
          ⚠ Not applicable for {unitTypeLabel(activeUnitType)}. Works with:{" "}
          {def.applicableForUnitType.map((ut) => unitTypeLabel(ut)).join(", ")}
        </div>
      )}
      {isCompatible && (
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 14 }}>
          Applicable for: {def.applicableForUnitType.map((ut) => unitTypeLabel(ut)).join(", ")}
        </div>
      )}
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 12, letterSpacing: 0.5 }}>PARAMETERS</div>
        {Object.entries(def.params).map(([key, paramDef]) => (
          <DataValueEditor
            key={key}
            label={key}
            requiredDataType={(paramDef as { dataType: DataType }).dataType}
            value={(node.params as Record<string, DataValue>)[key]}
            onChange={(newVal) =>
              onUpdate(
                {
                  ...node,
                  params: { ...(node.params as Record<string, DataValue>), [key]: newVal },
                } as unknown as ActionNode,
              )}
          />
        ))}
        {Object.keys(def.params).length === 0 && <div style={{ fontSize: 12, color: C.textMuted }}>No parameters</div>}
      </div>
    </div>
  );
}

// ─── CompositeEditor ──────────────────────────────────────────────────────────

function CompositeEditor({
  node,
  onUpdate,
}: {
  node: { nodeType: "selector" | "sequence"; nodes: BehaviourTreeNode[] };
  onUpdate: (n: BehaviourTreeNode) => void;
}) {
  return (
    <div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 8 }}>NODE TYPE</div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["selector", "sequence"] as const).map((t) => (
            <button
              key={t}
              onClick={() => onUpdate({ nodeType: t, nodes: node.nodes })}
              style={{
                padding: "6px 14px",
                borderRadius: 4,
                border: `1px solid ${node.nodeType === t ? nodeColor(t) : C.border}`,
                background: node.nodeType === t ? nodeColor(t) + "22" : "transparent",
                color: node.nodeType === t ? nodeColor(t) : C.textMuted,
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "monospace",
              }}
            >
              {nodeSymbol(t)} {t}
            </button>
          ))}
        </div>
      </div>
      <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>
        {node.nodeType === "selector"
          ? "Tries children left-to-right. Returns success on the first child that succeeds."
          : "Runs all children left-to-right. Returns failure if any child fails."}
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: C.textMuted }}>
        {node.nodes.length} child node{node.nodes.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}

// ─── EditorPanel ──────────────────────────────────────────────────────────────

function EditorPanel({ node, path, onUpdate, onClose, activeUnitType }: {
  node: BehaviourTreeNode;
  path: NodePath;
  onUpdate: (n: BehaviourTreeNode) => void;
  onClose: () => void;
  activeUnitType: UnitType;
}) {
  const color = nodeColor(node.nodeType);
  return (
    <div
      style={{
        width: 300,
        flexShrink: 0,
        background: C.surface,
        borderLeft: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
        fontFamily: "monospace",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "14px 16px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <span style={{ color, fontSize: 16 }}>{nodeSymbol(node.nodeType)}</span>
        <span style={{ color: C.text, fontSize: 13, fontWeight: "bold", flex: 1 }}>{nodeLabel(node)}</span>
        <span style={{ color: C.textMuted, fontSize: 11 }}>[{path.join(".")}]</span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: C.textMuted,
            cursor: "pointer",
            fontSize: 16,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {(node.nodeType === "selector" || node.nodeType === "sequence") && (
          <CompositeEditor node={node} onUpdate={onUpdate} />
        )}
        {node.nodeType === "condition" && (
          <ConditionEditor
            node={node}
            onUpdate={(n) => onUpdate(n as unknown as BehaviourTreeNode)}
          />
        )}
        {node.nodeType === "action" && (
          <ActionEditor
            node={node}
            onUpdate={(n) => onUpdate(n as unknown as BehaviourTreeNode)}
            activeUnitType={activeUnitType}
          />
        )}
      </div>
    </div>
  );
}

// ─── AddNodeMenu ──────────────────────────────────────────────────────────────

function MenuGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}
      >
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{children}</div>
    </div>
  );
}

function NodeOption(
  { kind, color, symbol, onAdd }: { kind: string; color: string; symbol: string; onAdd: (k: string) => void },
) {
  return (
    <button
      onClick={() => onAdd(kind)}
      style={{
        padding: "5px 12px",
        border: `1px solid ${color}44`,
        borderRadius: 4,
        background: color + "11",
        color,
        fontSize: 12,
        fontFamily: "monospace",
        cursor: "pointer",
      }}
    >
      {symbol} {kind}
    </button>
  );
}

function AddNodeMenu({ onAdd, onClose }: { onAdd: (kind: string) => void; onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 8,
          padding: 24,
          minWidth: 320,
          fontFamily: "monospace",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ color: C.text, fontSize: 14, fontWeight: "bold", marginBottom: 18 }}>Add Node</div>
        <MenuGroup label="Composites">
          <NodeOption kind="selector" color={C.selector} symbol="?" onAdd={onAdd} />
          <NodeOption kind="sequence" color={C.sequence} symbol="→" onAdd={onAdd} />
        </MenuGroup>
        <MenuGroup label="Conditions">
          {CONDITION_TYPES.map((t) => <NodeOption key={t} kind={t} color={C.condition} symbol="◆" onAdd={onAdd} />)}
        </MenuGroup>
        <MenuGroup label="Actions">
          {ACTION_TYPES.map((t) => <NodeOption key={t} kind={t} color={C.action} symbol="●" onAdd={onAdd} />)}
        </MenuGroup>
        <button
          onClick={onClose}
          style={{
            marginTop: 4,
            padding: "5px 16px",
            background: "transparent",
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            color: C.textMuted,
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: 12,
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── NodeBox ──────────────────────────────────────────────────────────────────

function NodeBox({ node, path, isSelected, onSelect, onDelete, onAddChild }: {
  node: BehaviourTreeNode;
  path: NodePath;
  isSelected: boolean;
  onSelect: (p: NodePath) => void;
  onDelete: (p: NodePath) => void;
  onAddChild: (p: NodePath) => void;
}) {
  const color = nodeColor(node.nodeType);
  const isComposite = node.nodeType === "selector" || node.nodeType === "sequence";
  const isRoot = path.length === 0;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect(path);
      }}
      style={{
        padding: "8px 12px",
        border: `2px solid ${isSelected ? C.selected : color}`,
        borderRadius: 6,
        background: isSelected ? color + "22" : color + "0e",
        cursor: "pointer",
        minWidth: 110,
        userSelect: "none",
        boxShadow: isSelected ? `0 0 0 3px ${color}33` : "none",
        transition: "border-color 0.1s, box-shadow 0.1s",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <span style={{ color: isSelected ? C.selected : color, fontSize: 14, fontWeight: "bold", flexShrink: 0 }}>
          {nodeSymbol(node.nodeType)}
        </span>
        <span
          style={{
            color: isSelected ? C.selected : color,
            fontSize: 12,
            fontFamily: "monospace",
            flex: 1,
            whiteSpace: "nowrap",
          }}
        >
          {nodeLabel(node)}
        </span>
        {isComposite && (
          <button
            title="Add child"
            onClick={(e) => {
              e.stopPropagation();
              onAddChild(path);
            }}
            style={{
              padding: "0 4px",
              background: "none",
              border: `1px solid ${color}55`,
              borderRadius: 3,
              color,
              fontSize: 13,
              cursor: "pointer",
              lineHeight: 1.4,
              flexShrink: 0,
            }}
          >
            +
          </button>
        )}
        {!isRoot && (
          <button
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(path);
            }}
            style={{
              padding: "0 4px",
              background: "none",
              border: "none",
              color: "#ff555588",
              fontSize: 14,
              cursor: "pointer",
              lineHeight: 1.4,
              flexShrink: 0,
            }}
          >
            ×
          </button>
        )}
      </div>
      {isComposite && (
        <div style={{ fontSize: 10, color: isSelected ? color + "bb" : C.textMuted, marginTop: 3, paddingLeft: 21 }}>
          {node.nodes.length} child{node.nodes.length !== 1 ? "ren" : ""}
        </div>
      )}
    </div>
  );
}

// ─── NodeGroup ────────────────────────────────────────────────────────────────

function NodeGroup({ node, path, selectedPath, onSelect, onDelete, onAddChild }: {
  node: BehaviourTreeNode;
  path: NodePath;
  selectedPath: NodePath | null;
  onSelect: (p: NodePath) => void;
  onDelete: (p: NodePath) => void;
  onAddChild: (p: NodePath) => void;
}) {
  const isSelected = pathsEqual(selectedPath, path);
  const isComposite = node.nodeType === "selector" || node.nodeType === "sequence";
  const children = isComposite ? node.nodes : [];
  const hasChildren = children.length > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <NodeBox
        node={node}
        path={path}
        isSelected={isSelected}
        onSelect={onSelect}
        onDelete={onDelete}
        onAddChild={onAddChild}
      />
      {hasChildren && (
        <>
          {/* Vertical line from node down to horizontal bar */}
          <div style={{ width: 2, height: 22, background: C.line, flexShrink: 0 }} />
          {/* Horizontal bar + children */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: children.length > 1 ? `2px solid ${C.line}` : "none",
            }}
          >
            {children.map((child, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 22,
                  paddingLeft: 14,
                  paddingRight: 14,
                  position: "relative",
                }}
              >
                {/* Vertical connector from bar to child */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 2,
                    height: 22,
                    background: C.line,
                  }}
                />
                <NodeGroup
                  node={child}
                  path={[...path, i]}
                  selectedPath={selectedPath}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onAddChild={onAddChild}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── JSON Preview ─────────────────────────────────────────────────────────────

function JsonPreview({ tree, activeUnitType }: { tree: UnitAwareBehaviourTree; activeUnitType: UnitType }) {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(tree[activeUnitType], null, 2);

  const copy = () => {
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        width: 300,
        flexShrink: 0,
        background: C.surface,
        borderLeft: `1px solid ${C.border}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "14px 16px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: C.textMuted, fontSize: 12, fontFamily: "monospace" }}>JSON</span>
        <button
          onClick={copy}
          style={{
            padding: "3px 10px",
            background: copied ? C.condition + "22" : "transparent",
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            color: copied ? C.condition : C.textMuted,
            cursor: "pointer",
            fontSize: 11,
            fontFamily: "monospace",
          }}
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      <pre
        style={{
          flex: 1,
          overflowY: "auto",
          margin: 0,
          padding: "12px 14px",
          fontSize: 10,
          color: C.textMuted,
          fontFamily: "monospace",
          lineHeight: 1.5,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {json}
      </pre>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function BehaviourTreeEditor() {
  const [tree, setTree] = useState<UnitAwareBehaviourTree>(() => structuredClone(sampleTree));
  const [activeUnitType, setActiveUnitType] = useState<UnitType>(UnitType.Archer);
  const [selectedPath, setSelectedPath] = useState<NodePath | null>(null);
  const [addingTo, setAddingTo] = useState<NodePath | null>(null);
  const [showJson, setShowJson] = useState(false);

  const currentRoot = tree[activeUnitType];
  const selectedNode = selectedPath !== null ? getNodeAtPath(currentRoot, selectedPath) : null;

  const handleUpdate = useCallback((newNode: BehaviourTreeNode) => {
    if (selectedPath === null) { return; }
    setTree((prev) => ({ ...prev, [activeUnitType]: updateAtPath(prev[activeUnitType], selectedPath, newNode) }));
  }, [selectedPath, activeUnitType]);

  const handleDelete = useCallback((path: NodePath) => {
    if (path.length === 0) { return; }
    setTree((prev) => ({ ...prev, [activeUnitType]: deleteAtPath(prev[activeUnitType], path) }));
    if (selectedPath && pathsEqual(selectedPath, path)) { setSelectedPath(null); }
  }, [activeUnitType, selectedPath]);

  const handleAddChild = useCallback((parentPath: NodePath) => {
    setAddingTo(parentPath);
  }, []);

  const handleAddNode = useCallback((kind: string) => {
    if (addingTo === null) { return; }
    const newNode = makeDefaultNode(kind);
    setTree((prev) => ({ ...prev, [activeUnitType]: insertChild(prev[activeUnitType], addingTo, newNode) }));
    setAddingTo(null);
  }, [addingTo, activeUnitType]);

  const handleUnitTypeChange = (ut: UnitType) => {
    setActiveUnitType(ut);
    setSelectedPath(null);
  };

  const handleReset = () => {
    setTree(structuredClone(sampleTree));
    setSelectedPath(null);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 53px)",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        color: C.text,
        fontFamily: "monospace",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 20px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexShrink: 0,
          background: C.surface,
        }}
      >
        <span style={{ fontSize: 12, color: C.textMuted, letterSpacing: 1.5, fontWeight: "bold" }}>BEHAVIOUR TREE</span>
        <div style={{ width: 1, height: 20, background: C.border }} />
        {/* Unit type tabs */}
        <div style={{ display: "flex", gap: 4 }}>
          {UNIT_TYPES.map((ut) => (
            <button
              key={ut}
              onClick={() => handleUnitTypeChange(ut)}
              style={{
                padding: "4px 14px",
                borderRadius: 4,
                border: `1px solid ${ut === activeUnitType ? C.selector : C.border}`,
                background: ut === activeUnitType ? C.selector + "22" : "transparent",
                color: ut === activeUnitType ? C.selector : C.textMuted,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "monospace",
              }}
            >
              {unitTypeLabel(ut)}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          {/* Legend */}
          {(["selector", "sequence", "condition", "action"] as const).map((t) => (
            <span key={t} style={{ fontSize: 11, color: nodeColor(t), opacity: 0.8 }}>
              {nodeSymbol(t)} {t}
            </span>
          ))}
          <div style={{ width: 1, height: 16, background: C.border }} />
          <button
            onClick={() => setShowJson((v) => !v)}
            style={{
              padding: "3px 10px",
              background: showJson ? C.action + "22" : "transparent",
              border: `1px solid ${showJson ? C.action : C.border}`,
              borderRadius: 4,
              color: showJson ? C.action : C.textMuted,
              cursor: "pointer",
              fontSize: 11,
              fontFamily: "monospace",
            }}
          >
            JSON
          </button>
          <button
            onClick={handleReset}
            style={{
              padding: "3px 10px",
              background: "transparent",
              border: `1px solid ${C.border}`,
              borderRadius: 4,
              color: C.textMuted,
              cursor: "pointer",
              fontSize: 11,
              fontFamily: "monospace",
            }}
          >
            reset
          </button>
        </div>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Tree canvas */}
        <div
          style={{ flex: 1, overflow: "auto", padding: 48 }}
          onClick={() => setSelectedPath(null)}
        >
          <NodeGroup
            node={currentRoot}
            path={[]}
            selectedPath={selectedPath}
            onSelect={setSelectedPath}
            onDelete={handleDelete}
            onAddChild={handleAddChild}
          />
        </div>

        {/* Editor panel (selected node) */}
        {selectedNode && selectedPath !== null && !showJson && (
          <EditorPanel
            node={selectedNode}
            path={selectedPath}
            onUpdate={handleUpdate}
            onClose={() => setSelectedPath(null)}
            activeUnitType={activeUnitType}
          />
        )}

        {/* Empty state hint */}
        {!selectedNode && !showJson && (
          <div
            style={{
              width: 220,
              flexShrink: 0,
              borderLeft: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", color: C.textMuted, fontSize: 12, lineHeight: 2, padding: 20 }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>◆</div>
              Click any node<br />to edit it.<br />
              <span style={{ fontSize: 11 }}>
                Use + to add children.<br />× to delete.
              </span>
            </div>
          </div>
        )}

        {/* JSON panel */}
        {showJson && <JsonPreview tree={tree} activeUnitType={activeUnitType} />}
      </div>

      {/* Add node modal */}
      {addingTo !== null && <AddNodeMenu onAdd={handleAddNode} onClose={() => setAddingTo(null)} />}
    </div>
  );
}

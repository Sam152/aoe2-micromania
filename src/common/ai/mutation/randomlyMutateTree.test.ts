import { describe, it } from "@std/testing/bdd";
import { sampleTree } from "../behaviourTree/__fixtures__/sampleTree.ts";
import { UnitType } from "../../units/UnitType.ts";
import { BehaviourTreeNode, UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "./randomlyMutateUnitAwareBehaviourTree.ts";

describe("randomlyMutateTree", () => {
  it("randomlyMutatedTree", () => {
    dumpTree("randomlyMutatedTree", randomlyMutateUnitAwareBehaviourTree({ count: 20, tree: sampleTree }));
  });

  it("randomlyGeneratedTree", () => {
    const emptyTree: BehaviourTreeNode = { nodeType: "selector", nodes: [] };
    dumpTree(
      "randomlyGeneratedTree",
      randomlyMutateUnitAwareBehaviourTree({
        count: 5000,
        tree: { [UnitType.Archer]: emptyTree, [UnitType.Mangonel]: emptyTree, [UnitType.Monk]: emptyTree },
      }),
    );
  });
});

function dumpTree(name: string, trees: UnitAwareBehaviourTree) {
  const indent = (json: string) => json.replace(/\n/g, "\n  ");

  Deno.writeTextFileSync(
    new URL(`../behaviourTree/__fixtures__/${name}.ts`, import.meta.url),
    [
      `import { UnitAwareBehaviourTree } from "../BehaviourTree.ts";`,
      `import { UnitType } from "../../../units/UnitType.ts";`,
      ``,
      `export const ${name}: UnitAwareBehaviourTree = {`,
      `  [UnitType.Archer]: ${indent(JSON.stringify(trees[UnitType.Archer], null, 2))},`,
      `  [UnitType.Mangonel]: ${indent(JSON.stringify(trees[UnitType.Mangonel], null, 2))},`,
      `  [UnitType.Monk]: ${indent(JSON.stringify(trees[UnitType.Monk], null, 2))},`,
      `};`,
      ``,
    ].join("\n"),
  );
}

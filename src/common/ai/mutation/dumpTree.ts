import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../units/UnitType.ts";

export function dumpTree(name: string, trees: UnitAwareBehaviourTree) {
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

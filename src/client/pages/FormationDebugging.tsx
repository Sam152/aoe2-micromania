import { createRef, useEffect } from "react";
import { circle } from "../../common/drawing/shapes";
import screenManager from "../../common/drawing/screenManager";
import LineFormation from "../../common/units/formations/types/LineFormation";
import { UnitInstance } from "../../types";
import { Vector2 } from "three/src/math/Vector2";
import Unit from "../../common/units/Unit";
import averageVector from "../../common/util/averageVector";
import arrayOfSize from "../../common/util/arrayOfSize";

export default function FormationDebugging() {
  const ref = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * screenManager.getCanvasScale();
    canvas.height = (window.innerHeight - screenManager.getTopOffset()) * screenManager.getCanvasScale();

    drawFormation(
      [
        ...arrayOfSize(10).map(createMonk({ x: 1104, y: 912 })),
        ...arrayOfSize(5).map(createMango({ x: 1104, y: 912 })),
        ...arrayOfSize(30).map(createArcher({ x: 1104, y: 912 })),
      ],
      ctx,
      new Vector2(700, 700),
    );

    drawFormation(
      [
        ...arrayOfSize(10).map(createMonk({ x: 100, y: 100 })),
        ...arrayOfSize(5).map(createMango({ x: 100, y: 100 })),
        ...arrayOfSize(30).map(createArcher({ x: 100, y: 100 })),
      ],
      ctx,
      new Vector2(300, 300),
    );
  }, []);

  return (
    <canvas
      style={{ width: "100vw", height: "calc(100vh - 53px)", display: "block", backgroundColor: "black" }}
      ref={ref}
    />
  );
}

function drawFormation(units: UnitInstance[], ctx: CanvasRenderingContext2D, destination: Vector2) {
  const line = new LineFormation();
  const positions = line.form(units, destination);

  const start = averageVector(units.map((unit) => unit.position));
  circle(ctx, start, 5, "orange");

  positions.map((position, i) => {
    const unit = units[i];
    if (unit.unitType == Unit.Archer) {
      circle(ctx, position, 5, "green");
    }
    if (unit.unitType == Unit.Mangonel) {
      circle(ctx, position, 5, "red");
    }
    if (unit.unitType == Unit.Monk) {
      circle(ctx, position, 5, "blue");
    }
  });
}

const defaultUnit: Omit<UnitInstance, "unitType" | "id"> = {
  position: { x: 1104, y: 912 } as Vector2,
  waypoints: [],
  formation: 0,
  clickedWaypoints: [],
  movingDirection: null,
  reloadsAt: 0,
  ownedByPlayer: 1,
  unitState: 0,
  unitStateStartedAt: 60,
  direction: 4,
  hitPoints: 50,
};

function createArcher(position: { x: number; y: number }): () => UnitInstance {
  return () => ({
    ...defaultUnit,
    position: position as Vector2,
    id: Math.floor(Math.random() * 1000000000),
    unitType: Unit.Archer,
  });
}

function createMango(position: { x: number; y: number }): () => UnitInstance {
  return () => ({
    ...defaultUnit,
    position: position as Vector2,
    id: Math.floor(Math.random() * 1000000000),
    unitType: Unit.Mangonel,
  });
}

function createMonk(position: { x: number; y: number }): () => UnitInstance {
  return () => ({
    ...defaultUnit,
    position: position as Vector2,
    id: Math.floor(Math.random() * 1000000000),
    unitType: Unit.Monk,
  });
}

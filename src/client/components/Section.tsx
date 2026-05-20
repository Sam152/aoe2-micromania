import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <div className="section">{children}</div>;
}

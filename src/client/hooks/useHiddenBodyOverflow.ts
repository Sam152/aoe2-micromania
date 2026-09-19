import { useEffect } from "react";

/**
 * Hides the body's scrollbars while the calling component is mounted. Gameplay
 * screens size their canvas to the viewport, so any overflow is a sliver that
 * only ever shows up as an unwanted scrollbar.
 */
export function useHiddenBodyOverflow(): void {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);
}

import { useEffect, useState } from "react";

export function BindSelection({ onChange }: { onChange: (keycode: number) => void }) {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      return;
    }
    globalThis.addEventListener("keydown", function listener(e) {
      e.preventDefault();
      onChange(e.keyCode);
      setListening(false);
      globalThis.removeEventListener("keydown", listener);
    });
  }, [listening]);

  return (
    <button type="button" className="btn" onClick={() => setListening(true)}>
      {listening ? "Listening..." : "Rebind"}
    </button>
  );
}

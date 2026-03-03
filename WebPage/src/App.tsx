import { useEffect, useState } from "react";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <HomePage theme={theme} onToggleTheme={() => setTheme(t => (t === "light" ? "dark" : "light"))} />;
}


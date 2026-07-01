"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AppState = {
  ready: boolean;
  instructor: boolean;
  checks: Record<string, boolean>;
  winW: number;
  setInstructor: (v: boolean) => void;
  toggleCheck: (id: string) => void;
};

const AppCtx = createContext<AppState | null>(null);

const CHECKS_KEY = "by_design_checks";
const INSTR_KEY = "by_design_instructor";

export function AppProvider({
  children,
  defaultView = "student",
}: {
  children: ReactNode;
  defaultView?: "student" | "instructor";
}) {
  const [ready, setReady] = useState(false);
  const [instructor, setInstructorState] = useState(defaultView === "instructor");
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [winW, setWinW] = useState(1200);

  useEffect(() => {
    let loadedChecks: Record<string, boolean> = {};
    let loadedInstr = defaultView === "instructor";
    try {
      loadedChecks = JSON.parse(localStorage.getItem(CHECKS_KEY) || "{}") || {};
    } catch {}
    try {
      const v = localStorage.getItem(INSTR_KEY);
      if (v !== null) loadedInstr = v === "1";
    } catch {}
    setChecks(loadedChecks);
    setInstructorState(loadedInstr);
    setWinW(window.innerWidth);
    setReady(true);

    const onResize = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [defaultView]);

  const setInstructor = useCallback((v: boolean) => {
    setInstructorState(v);
    try {
      localStorage.setItem(INSTR_KEY, v ? "1" : "0");
    } catch {}
  }, []);

  const toggleCheck = useCallback((id: string) => {
    setChecks((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(CHECKS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  return (
    <AppCtx.Provider
      value={{ ready, instructor, checks, winW, setInstructor, toggleCheck }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export function useApp(): AppState {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

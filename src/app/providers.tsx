"use client";

import { useInputArray } from "@/hooks/useInputArray";
import { useCounter } from "@/hooks/useCounter";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";
import { createContext, useContext, type ReactNode } from "react";

// 各カスタムフックの返り値の型を定義します
type CounterContextType = ReturnType<typeof useCounter>;
type InputArrayContextType = ReturnType<typeof useInputArray>;

// Contextを作成します。初期値はundefinedにしておき、Providerの外で使われた場合にエラーを投げます
const CounterContext = createContext<CounterContextType | undefined>(undefined);
const InputArrayContext = createContext<InputArrayContextType | undefined>(
  undefined,
);

// すべてのフックを呼び出し、それぞれのContext Providerでchildrenをラップするコンポーネント
export function AppProviders({ children }: { children: ReactNode }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue(); // このフックは値を返さないので、ここで呼び出すだけでOKです

  return (
    <CounterContext.Provider value={counter}>
      <InputArrayContext.Provider value={inputArray}>
        {children}
      </InputArrayContext.Provider>
    </CounterContext.Provider>
  );
}

// 各Contextを簡単に利用するためのカスタムフック
export function useSharedCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useSharedCounter must be used within a AppProviders");
  }
  return context;
}

export function useSharedInputArray() {
  const context = useContext(InputArrayContext);
  if (context === undefined) {
    throw new Error("useSharedInputArray must be used within a AppProviders");
  }
  return context;
}
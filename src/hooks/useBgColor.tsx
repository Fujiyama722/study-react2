"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const pathname = usePathname();

  const bgColor = useMemo(() => {
    // return pathname === "/" ? "skyblue" : "green"; // 三項演算子
    switch (pathname) {
      case "/": {
        return "skyblue";
      }
      case "/about": {
        return "green";
      }
      default: {
        return "";
      }
    } //switch構文
  }, [pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    // ↑マウント時の処理
    // ↓アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
  // []に変数を入れると、変更されたタイミングでuseEffectの処理が走る
  // 配列なのでいくつでも変数を入れられる、どれかしらに変更があった時点で処理が走る、これで制御可能
};

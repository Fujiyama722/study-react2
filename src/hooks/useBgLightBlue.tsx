"use client";
import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "skyblue";
    // ↑マウント時の処理
    // ↓アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  // []に変数を入れると、変更されたタイミングでuseEffectの処理が走る
  // 配列なのでいくつでも変数を入れられる、どれかしらに変更があった時点で処理が走る、これで制御可能
};
"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  // 講座12回目参照
  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1) // {count + 1}これだめ  {(count) => count + 1}これ正解
    }
  }, [count]);

  // 
  useEffect(() => {
    console.log("foo");
    document.body.style.backgroundColor = "skyblue";
    // ↑マウント時の処理
    // ↓アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);
  // []に変数を入れると、変更されたタイミングでuseEffectの処理が走る
  // 配列なのでいくつでも変数を入れられる、どれかしらに変更があった時点で処理が走る、これで制御可能
  return (
    <div className="font-sans flex flex-col justify-around items-center justify-items-center min-h-screen p-4 pb-20 gap-1 sm:p-10">
      {/* スタイルが面倒ならこの<div>すらもコンポーネント化してしまおう */}
      <Header />
      <Main title="index" />
      <h1>{count}</h1>
      <button className=" text-white bg-blue-700 " onClick={handleClick}>
        ボタン
      </button>
      <Footer />
    </div>
  );
}

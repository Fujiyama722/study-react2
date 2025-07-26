"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFoo(foo => foo + 1)
  };

  useEffect(() => {
    document.body.style.backgroundColor = "skyblue";
    // ↑マウント時の処理
    // ↓アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="font-sans flex flex-col justify-around items-center justify-items-center min-h-screen p-4 pb-20 gap-1 sm:p-10">
      {/* スタイルが面倒ならこの<div>すらもコンポーネント化してしまおう */}
      <Header />
      <Main title="index" />
      <h1>{foo}</h1>
      <button className=" text-white bg-blue-700 " onClick={handleClick}>
        ボタン
      </button>
      <Footer />
    </div>
  );
}

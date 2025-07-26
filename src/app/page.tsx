"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback } from "react";

const foo = 1;

export default function Home() {
  const handleClick = useCallback((e) => { //useCallback()で関数(e)=>{}を囲う
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className="font-sans flex flex-col justify-around items-center justify-items-center min-h-screen p-4 pb-20 gap-1 sm:p-10">
      {/* スタイルが面倒ならこの<div>すらもコンポーネント化してしまおう */}
      <Header />
      <Main title="index" />
      <a
        href="./about/"
        className=" text-white bg-blue-700 "
        onClick={handleClick}
      >
        ボタン
      </a>
      <Footer />
    </div>
  );
}

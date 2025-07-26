"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {

  const foo = 1;
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => { //useCallback()で関数(e)=>{}を囲う
    console.log(e.currentTarget.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = 'skyblue';
    // ↑マウント時の処理
    // ↓アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = '';
    }
  },[])

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

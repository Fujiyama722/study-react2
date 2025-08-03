"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
// import { useInputArray } from "@/hooks/useInputArray";
// import { useCounter } from "@/hooks/useCounter";
// import { useBgLightBlue } from "@/hooks/useBgLightBlue";
import { useSharedCounter, useSharedInputArray } from "@/app/providers";


export default function About() {
  // hooksは必ずトップレベル（returnの前）で呼び出す
  // const { count, isShow, handleClick, handleDisplay } = useCounter();
  // const { text, array, handleChange, handleAdd } = useInputArray();
  // useBgLightBlue();
  const { count, isShow, handleClick, handleDisplay } = useSharedCounter();
  const { text, array, handleChange, handleAdd } = useSharedInputArray();

  return (
    <div className="font-sans flex flex-col justify-around items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-10">
      {/* スタイルが面倒ならこの<div>すらもコンポーネント化してしまおう */}
      <Header />

      <div className="flex flex-col gap-2 items-center justify-center">
        {isShow ? <h1>{count}</h1> : null}
        <button className=" text-white bg-blue-700 " onClick={handleClick}>
          ボタン
        </button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        {/* <label htmlFor="text-input">テキストボックス</label> */}

        <input
          id="text-input"
          type="text"
          value={text}
          placeholder="テキストを入力"
          className="bg-white border text-black "
          onChange={handleChange}
        />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <Main title="about" page="about/" />
      <Footer />
    </div>
  );
}

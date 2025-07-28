"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  // 講座12回目参照
  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevCount) => prevCount + 1); // {count + 1}これだめ  {(count) => count + 1}これ正解
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      return alert("5文字以内にしてください");
    }
    // onChenge で入力テキストに変更
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します")
        return prevArray;
      }
      return [...prevArray, text]; // 配列もイミュータブルに扱う必要あり
    })
  }, [text])

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
      <div className="flex flex-col gap-2 items-center justify-center">
        {isShow ? <h1>{count}</h1> : null}
        <button className=" text-white bg-blue-700 " onClick={handleClick}>ボタン</button>
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
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </div>
      <Main title="index" />
      <Footer />
    </div>
  );
}

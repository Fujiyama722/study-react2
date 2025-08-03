"use client";
import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      return alert("5文字以内にしてください");
    }
    // onChenge で入力テキストに変更
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (!text) {
        return prevArray;
      }
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, text]; // 配列とオブジェクトはイミュータブルに扱う必要あり
      // フックの外部（この場合はHomeコンポーネント）で値や関数を使いたいので、return文を使ってそれらをオブジェクトとして渡している
    });
  }, [text]);

  return { text, array, handleChange, handleAdd }
};

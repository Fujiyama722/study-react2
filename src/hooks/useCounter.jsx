"use client";
import { useState, useMemo, useCallback } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // const doubleCount = count * 2;
  const doubleCount = useMemo(() => {
    return count * 2;
  },[count]);
  // useMemoでは、isShowの値が更新されてもdoubleCountの値が再計算されない
  // useMemo,useCallbackを全てに使っていい理由：関数や値を再生成させるべきか否かハンドル出来るべき。パフォーマンスに関する意識も高まる

  // 講座12回目参照
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1); // {count + 1}これだめ  {(count) => count + 1}これ正解
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return {count,doubleCount, isShow, handleClick, handleDisplay}
};

// import Image from "next/image";
import React, { ReactNode } from "react";
import type { MouseEventHandler } from "react";

interface Item {
  href: string;
  title: string;
  description: string;
}
export function Headline(props: {
  title?: string;
  page?: string; // ← ? を付けると省略可能
  number?: number;
  array?: number[];
  object?: { foo: string; bar: string };
  boolean?: boolean;
  code?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  items: readonly Item[];
  handleReduce: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex items-center flex-col gap-2">
      <h1>{props.title} Page</h1>
      <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        <li className="mb-2 tracking-[-.01em]">
          新たに編集を加える {props.children}
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
      </ol>
      <p>アイテムの数は{props.items.length}個です</p>
      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}

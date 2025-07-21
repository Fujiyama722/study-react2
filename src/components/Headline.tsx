// import Image from "next/image";
import React from "react";

export function Headline(props: { title: string, page:string }) {
  return (
    <div>
      <h1>{props.title} Page</h1>
      <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        <li className="mb-2 tracking-[-.01em]">
          新たに編集を加える{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
            {props.page}/page.tsx
          </code>
          .
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
      </ol>
    </div>
  );
}

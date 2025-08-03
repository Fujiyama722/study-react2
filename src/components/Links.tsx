import Image from "next/image";
import type { MouseEventHandler } from "react";

interface Item {
  href: string;
  title: string;
  description: string;
}

interface LinksProps {
  items: readonly Item[];
  handleReduce: MouseEventHandler<HTMLButtonElement>;
}

interface Btn {
  href: string;
  className: string;
  target: string;
  rel: string;
  text: string;
}
const BTN = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    className: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "デプロイする",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    className: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "ドキュメントを読む",
  },
] as const satisfies readonly Btn[];

// 処理ここから
export function Links({ items, handleReduce }: LinksProps) {
  return (
    <div className="flex gap-4 items-center flex-col">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {/* <button onClick={handleReduce}>減らす</button> */}
        {items.map((item) => {
          return (
            // key は一番外側に一つあればいい
            <a
              key={item.href}
              href={item.href}
              className="border-1 rounded-2xl p-2 block w-1/3"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          );
        })}
      </div>

      <div className="flex gap-3">
        {BTN.map((item) => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={item.className}
              target={item.target}
              rel={item.rel}
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}

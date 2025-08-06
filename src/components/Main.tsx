import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import Image from "next/image";
import { useCallback, useState } from "react";

// データここから
interface Item {
  href: string;
  title: string;
  description: string;
}
const ITEMS = [
  {
    href: "#aaa",
    title: "第一のカード →",
    description: "これは1つ目のカードである",
  },
  {
    href: "#bbb",
    title: "第二のカード →",
    description: "これは2つ目のカードである",
  },
  {
    href: "#ccc",
    title: "第三のカード →",
    description: "これは3つ目のカードである",
  },
  {
    href: "#ddd",
    title: "第四のカード →",
    description: "これは4つ目のカードである",
  },
] as const satisfies readonly Item[];

export function Main(props: {
  title?: string; // ← ? を付けると省略可能
  page?: string; // ← ? を付けると省略可能
}) {
  const [items, setItems] = useState<readonly Item[]>(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Headline
        title={props.title}
        page={props.page}
        items={items}
        handleReduce={handleReduce}
        // number={0}
        // array={[]}
        // object={{ foo: "", bar: "" }}
        // boolean //trueが渡される
        // コンポーネントタグ内に記述するとchildrenとしてpropsに渡される
      >
        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
          src/app/{props.page}page.tsx.
        </code>
      </Headline>
      <Links items={items} />
    </main>
  );
}

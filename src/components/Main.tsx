import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import Image from "next/image";

export function Main(props: {
  title?: string; // ← ? を付けると省略可能
  page?: string; // ← ? を付けると省略可能
}) {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
        page={props.title} //本当は省略してもいい状態
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
      <Links />
    </main>
  );
}

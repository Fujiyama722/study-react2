// import Image from "next/image";

import Link from "next/link";

export function Header() {
  return (
    <header className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-b-2 w-full pb-2 text-2xl">
      <Link href="/">Index</Link>
      <Link href="/about/">About</Link>
    </header>
  );
}

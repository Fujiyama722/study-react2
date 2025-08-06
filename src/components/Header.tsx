// import Image from "next/image";

import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-b-2 w-full pb-2 text-2xl">
      {NAV_ITEMS.map((item) => (
        <Link key={item.href} href={item.href}>{item.label}</Link>
      ))}
    </header>
  );
}

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans flex flex-col justify-around items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-10">
      {/* スタイルが面倒ならこの<div>すらもコンポーネント化してしまおう */}
      <Header />
      <Main title="about" page="about/" />
      <Footer />
    </div>
  );
}

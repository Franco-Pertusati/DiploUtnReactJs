import Header from "@/components/header/header";
import MarqueeContainer from "@/components/marquee-container/marquee-container";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Navbar />
      <Header />
      <MarqueeContainer />
    </div>
  );
}

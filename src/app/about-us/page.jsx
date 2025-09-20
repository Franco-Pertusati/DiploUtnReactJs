import Navbar from "@/components/navbar/navbar";
import "../globals.css";
import { BlurFade } from "@/components/ui/blur-fade";
import { PulsatingButton } from "@/components/ui/pulsating-button";

export default function AboutUsPage() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="grid place-items-center h-full w-full">
        <div className="max-w-4xl">
          <h2 className="text-6xl">Sobre nosotros</h2>
          <BlurFade delay={0.2}>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis soluta quo quam architecto! Libero vero aspernatur
              officia. Tempore fugiat laudantium impedit, provident, distinctio
              quas placeat quo velit, dignissimos aspernatur soluta.
            </p>
          </BlurFade>
          <BlurFade>
            <a className="px-6 py-3 bg-foreground rounded-xl text-background" href="/">Volver a la pagina principal</a>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

import AppIcon from "../appicon/appicon";
import { TextAnimate } from "../ui/text-animate";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { BlurFade } from "../ui/blur-fade";
import { PulsatingButton } from "../ui/pulsating-button";

const Header = () => {
  return (
    <div className="mt-24 px-4 w-full mx-auto max-w-6xl flex flex-col gap-6">
      <BlurFade delay={0.25} inView>
        <AppIcon />
      </BlurFade>
      <div className="max-w-3xl">
        <BlurFade delay={0.25 * 2} inView className={"text-5xl font-bold"}>
          La nueva generación de notas
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView className={"text-2xl"}>
          Simple. Potente. Elegante. Optimiza tu comunicación gracias a la
          flexibilidad de los bloques de contenido.
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 4} inView>
        <PulsatingButton>¡Pruebalo gratis!</PulsatingButton>
      </BlurFade>
      <div className="flex flex-col md:flex-row gap-2 justify-between w-full">
        <BlurFade delay={0.25 * 5}>
          <div className="p-2 border border-muted rounded-3xl">
            <img
              className="rounded-xl w-full"
              src="https://dummyimage.com/400/000000/ffffff"
              alt=""
            />
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 6}>
          <div className="p-2 border border-muted rounded-3xl">
            <img
              className="rounded-xl w-full"
              src="https://dummyimage.com/400/000000/ffffff"
              alt=""
            />
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 7}>
          <div className="p-2 border border-muted rounded-3xl">
            <img
              className="rounded-xl w-full"
              src="https://dummyimage.com/400/000000/ffffff"
              alt=""
            />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;

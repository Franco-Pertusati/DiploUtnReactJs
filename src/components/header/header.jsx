import AppIcon from "../appicon/appicon";
import { TextAnimate } from "../ui/text-animate";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { BlurFade } from "../ui/blur-fade";

const Header = () => {
  return (
    <div className="mt-24 px-4 mx-auto max-w-5xl flex flex-col gap-3">
      <BlurFade delay={0.25} inView>
        <AppIcon />
      </BlurFade>
      <div>
        <BlurFade delay={0.25 * 2} inView className={"text-5xl font-bold"}>
          La nueva generación de notas
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView className={"text-3xl"}>
          Simple. Potente. Elegante. Optimiza tu comunicación gracias a la
          flexibilidad de los bloques de contenido.
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 4} inView>
        <InteractiveHoverButton>¡Pruebalo gratis!</InteractiveHoverButton>
      </BlurFade>
    </div>
  );
};

export default Header;

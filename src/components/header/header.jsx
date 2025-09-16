import AppIcon from "../appicon/appicon";
import { TextAnimate } from "../ui/text-animate";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const Header = () => {
  return (
    <div className="mt-16 px-4 mx-auto max-w-5xl flex flex-col gap-3">
      <AppIcon />
      <div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className={"text-2xl font-bold"}
          once
        >
          La nueva generación de notas
        </TextAnimate>
        <TextAnimate>
          Simple. Potente. Elegante. Optimiza tu comunicación gracias a la
          flexibilidad de los bloques de contenido.
        </TextAnimate>
      </div>
      <div>
        <InteractiveHoverButton>¡Pruebalo gratis!</InteractiveHoverButton>
      </div>
    </div>
  );
};

export default Header;

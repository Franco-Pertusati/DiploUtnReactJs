"use client"; // Make this a Client Component

import "@/app/globals.css";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";

const FeaturesSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-2 max-w-6xl mx-auto flex-wrap px-4">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4 rounded-xl grow"
      >
        <h3 className="font-bold text-lg">Titulo de la feature</h3>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      </MagicCard>
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4 rounded-xl grow"
      >
        <h3 className="font-bold text-lg">Titulo de la feature</h3>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      </MagicCard>
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4 rounded-xl grow"
      >
        <h3 className="font-bold text-lg">Titulo de la feature</h3>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      </MagicCard>
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-4 rounded-xl grow"
      >
        <h3 className="font-bold text-lg">Titulo de la feature</h3>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      </MagicCard>
    </div>
  );
};

export default FeaturesSection;

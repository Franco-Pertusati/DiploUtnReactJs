import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "Nunca había visto algo así. Es increíble. Me encanta.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Lucía",
    username: "@lucia",
    body: "No sé qué decir. Me he quedado sin palabras. Es increíble.",
    img: "https://avatar.vercel.sh/lucia",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Me he quedado sin palabras. Es increíble. Me encanta.",
    img: "https://avatar.vercel.sh/pedro",
  },
  {
    name: "María",
    username: "@maria",
    body: "Me he quedado sin palabras. Es increíble. Me encanta.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Sofía",
    username: "@sofia",
    body: "Me he quedado sin palabras. Es increíble. Me encanta.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Andrés",
    username: "@andres",
    body: "Me he quedado sin palabras. Es increíble. Me encanta.",
    img: "https://avatar.vercel.sh/andres",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeContainer() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-5xl mx-auto px-4">
      <span className="font-bold mb-4">¿Que opina el internet de nosotros?</span>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default MarqueeContainer;

import "@/app/globals.css";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-evenly p-8 w-full border-t border-t-muted">
      <div className="pt-5 md:w-1/2 max-w-5xl mx-auto">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-y-5 lg:pl-10">
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-sm font-semibold text-primary">Company</li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">About</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Contact</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Blog</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Story</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-sm font-semibold text-primary">
              Products
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Company</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Product</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">Press</a>
            </li>
            <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground">
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <div className="w-screen border-b border-muted fixed top-0 bg-background">
      <div className="max-w-5xl mx-auto py-2 px-4 flex items-center gap-2 bg-background z-100">
        <span className="font-bold text-2xl">Notes App</span>
        <ul className="flex gap-2 ml-auto">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 bg-muted rounded-full">
              <span>Log In</span>
            </a>
          </li>
        </ul>
        <AnimatedThemeToggler />
      </div>
    </div>
  );
};

export default Navbar;

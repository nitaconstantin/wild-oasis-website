import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 h-[100px] px-4 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative h-full">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

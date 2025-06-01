"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔁 Close menu on route change

  const pathname = usePathname(); // Detects route change

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className=" z-20 md:relative w-3/4">
        <div className="max-w-7xl md:mx-auto">
          <div className="flex justify-end h-16 items-center w-full">
            <div className="hidden md:flex space-x-6 w-3/4 h-full items-center justify-between">
              <Link
                className="text-primary-50 hover:text-accent-600 text-xl"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-primary-50 hover:text-accent-600 text-xl"
                href="/cabins"
              >
                Cabins
              </Link>
              <Link
                className="text-primary-50 hover:text-accent-600 text-xl"
                href="/account"
              >
                Guest area
              </Link>
            </div>
            <div className="md:hidden w-[24px] h-[24px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none w-[24px] text-primary-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <XMarkIcon /> : <Bars3Icon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`md:hidden p-4 space-y-2  z-20 md:relative  bg-primary-50 w-full ${
            isOpen ? "absolute top-full" : ""
          }`}
        >
          <Link href="/" className="block text-gray-700 hover:text-accent-600">
            Home
          </Link>
          <Link
            href="/cabins"
            className="block text-gray-700 hover:text-accent-600"
          >
            Cabins
          </Link>
          <Link
            href="/account"
            className="block text-gray-700 hover:text-accent-600"
          >
            Guest area
          </Link>
        </div>
      )}
    </>
  );
}

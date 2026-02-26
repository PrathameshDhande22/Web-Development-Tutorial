"use client";

import { type NavLinks as Navtypes } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks: Navtypes = [
  { link: "/login", text: "Login" },
  { link: "/register", text: "Register" },
  { link: "/forgot-password", text: "Forgot Password" },
  { link: "/about", text: "About" },
  { link: "/blog", text: "Blog" },
  { link: "/product", text: "Products" },
  { link: "/article", text: "Articles" },
];

const Header = () => {
  // use path name hook to get the current url
  const currentpathname = usePathname();

  return (
    <header className="bg-yellow-600 text-black p-3">
      <nav className="flex gap-3">
        {NavLinks.map((value, index) => {
          const isActive =
            currentpathname === value.link ||
            (currentpathname.startsWith(value.link) && value.link !== "/");
          return (
            <Link
              href={value.link}
              key={index}
              className={isActive ? "font-bold" : ""}
            >
              {value.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

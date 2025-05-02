"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const hideComponent = useMemo(() => {
    return pathname.endsWith("log-in");
  }, [pathname]);
  const navLink = useMemo(() => {
    const links = [
      { label: "item", href: "/item" },
      { label: "item", href: "/item" },
      { label: "item", href: "/item" },
      { label: "item", href: "/item" },
      { label: "item", href: "/item" },
    ];
    return links;
  }, []);
  if (hideComponent) return;
  return (
    <nav className={`${className} w-full h-12 grid grid-cols-6 border-b`}>
      <div className="border-r">Logo</div>
      <ul className="col-span-4 w-full flex items-center gap-20 px-4">
        {navLink.map((item, i) => (
          <li key={`nav-item-${i}`} className="uppercase text-xs">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <UserButton />
      </div>
    </nav>
  );
}

const UserButton = ({ logged }: { logged?: boolean }) => {
  return (
    <Link href={"/log-in"} className="uppercase text-xs px-8 py-2 border">
      Log in
    </Link>
  );
};

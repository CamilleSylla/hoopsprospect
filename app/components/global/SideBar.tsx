"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function SideBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const hideComponent = useMemo(() => {
    return pathname.endsWith("log-in");
  }, [pathname]);
  const items = useMemo(() => {
    const itemList = [
      {
        label: "Item",
        href: "/item",
      },
      {
        label: "Item",
        href: "/item",
      },
      {
        label: "Item",
        href: "/item",
      },
    ];
    return itemList;
  }, []);
  if (hideComponent) return;
  return (
    <div className={`${className} w-full py-4 px-4`}>
      <ul className="flex flex-col gap-4 pt-5">
        {items.map((item, i) => (
          <Link
            href={item.href}
            key={`side-bar-item-${i}`}
            className="text-xs uppercase"
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

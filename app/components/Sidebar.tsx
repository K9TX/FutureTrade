"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PieChart, Wallet, Info, Contact } from "lucide-react";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Trade Summary",
    href: "/summary",
    icon: <PieChart size={20} />,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <Wallet size={20} />,
  },
  {
    name: "About Us",
    href: "/about",
    icon: <Info size={20} />,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <Contact size={20} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <div className="fixed left-0 top-0 h-full w-[272px] bg-[#1C2127] border-r border-gray-800 z-50 shadow-xl">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center p-4 border-b border-gray-800 h-16">
          <div className="w-40 flex justify-center">
            <Logo />
          </div>
        </div>
        
        <nav className="flex-1 p-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-3 rounded-lg transition-all duration-200",
                "hover:bg-gray-700/50",
                pathname === item.href 
                  ? "bg-blue-500/10 text-blue-400" 
                  : "text-gray-400 hover:text-white"
              )}
            >
              <div className="min-w-[24px] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="ml-3">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
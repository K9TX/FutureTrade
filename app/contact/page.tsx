"use client";

import { Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/k9tx",
      icon: <Linkedin size={24} />,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kartik_t.exe/",
      icon: <Instagram size={24} />,
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      href: "mailto:kartik.tripathi9096@gmail.com",
      icon: <Mail size={24} />,
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Contact Us</h1>
      
      <div className="bg-[#1C2127] p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 mb-6">
          Get in touch with us through any of these platforms:
        </p>
        
        <div className="space-y-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 bg-gray-800/50 rounded-lg transition-colors duration-200 ${link.color}`}
            >
              {link.icon}
              <span className="ml-4 text-gray-300">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

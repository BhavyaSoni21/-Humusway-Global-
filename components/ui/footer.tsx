import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 border-t border-gray-200 py-6 mt-12 text-center text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} HumusWay Global Export Private Limited. All rights reserved.
        </span>
        <nav className="flex flex-wrap gap-4 items-center justify-center">
          <a href="/" className="hover:text-[#287AB8] underline">Privacy Policy</a>
          <a href="/" className="hover:text-[#287AB8] underline">Terms of Service</a>
          <a href="/contact" className="hover:text-[#287AB8] underline">Contact</a>
        </nav>
        <span>
          Made with <span className="text-[#A0BF2D]">♥</span> in India
        </span>
      </div>
    </footer>
  );
}

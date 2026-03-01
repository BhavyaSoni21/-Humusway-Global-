import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-blue-100 border-t border-gray-200 py-6 mt-12 text-center text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <span className="md:text-left w-full md:w-auto">
          © {new Date().getFullYear()} HumusWay Global Export Private Limited. All rights reserved.
        </span>
        <nav className="flex flex-wrap gap-4 items-center justify-center md:justify-end w-full md:w-auto">
          <a href="/" className="hover:text-[#287AB8] underline">Privacy Policy</a>
          <a href="/" className="hover:text-[#287AB8] underline">Terms of Service</a>
          <a href="/contact" className="hover:text-[#287AB8] underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

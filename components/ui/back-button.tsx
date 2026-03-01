"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-16 md:top-24 left-4 z-40"
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white border border-gray-200 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      >
        <ArrowLeft className="w-5 h-5 text-[#0477d1] group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium text-gray-700 group-hover:text-[#0477d1] transition-colors duration-300">
          Home
        </span>
      </Link>
    </motion.div>
  );
}

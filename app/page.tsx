"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <AuroraBackground className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#0477d1]/20 shadow-md"
        >
          <Sparkles className="w-4 h-4 text-[#0477d1]" />
          <span className="text-sm font-medium text-gray-700">Premium Organic Exports</span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900"
          >
            Humusway Global Export
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-[#0477d1]"
          >
            Private Limited
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-light text-xl md:text-2xl text-gray-600 max-w-3xl py-4"
        >
          Leading exporter of premium organic products from India.
          <br />
          <span className="font-semibold text-gray-800">Vermi Compost & Turmeric Powder</span> of the highest quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0477d1] hover:bg-[#035392] text-white rounded-full px-8 py-3 font-semibold shadow-lg flex items-center gap-2 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-[#0477d1] border-2 border-[#0477d1] rounded-full px-8 py-3 font-semibold shadow-lg transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-2 text-gray-600"
        >
          <Leaf className="w-5 h-5 text-green-600" />
          <span className="text-sm">100% Organic & Natural Products</span>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}

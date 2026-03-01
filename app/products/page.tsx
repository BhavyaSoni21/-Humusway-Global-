"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackButton } from "@/components/ui/back-button";

export default function Products() {
  const products = [
    {
      name: "Vermi Compost Organic Fertilizer",
      slug: "vermi-compost",
      description: "Premium organic fertilizer for sustainable agriculture",
      image: "/images/Verm1.png",
      color: "from-green-400 to-emerald-600"
    },
    {
      name: "Turmeric Powder",
      slug: "turmeric-powder",
      description: "Pure, high-quality turmeric with health benefits",
      image: "/images/Term1.png",
      color: "from-yellow-400 to-orange-600"
    },
    {
      name: "Coco Peat",
      slug: "coco-peat",
      description: "Eco-friendly growing medium with superior water retention",
      image: "/images/Coco1.png",
      color: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-[#edf6fc] to-white" intensity="strong">
      <BackButton />
      <div className="pt-24 md:pt-36 pb-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-[#0477d1]">Products</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium organic products exported worldwide
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all flex flex-col"
            >
              <div className={`h-48 sm:h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.2, type: "spring" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-6 flex-1">{product.description}</p>
                <Link href={`/products/${product.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0477d1] hover:bg-[#035392] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
                  >
                    Get Details
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </BeamsBackground>
  );
}

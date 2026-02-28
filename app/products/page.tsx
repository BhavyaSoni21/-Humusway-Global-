"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";

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
    <div className="min-h-screen bg-gradient-to-b from-[#edf6fc] to-white pt-36 pb-20 px-4 relative">
      <Particles
        className="absolute inset-0"
        quantity={60}
        ease={70}
        color="#0477d1"
        size={0.6}
        refresh
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#0477d1]">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium organic products exported worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
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
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link href={`/products/${product.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0477d1] hover:bg-[#035392] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

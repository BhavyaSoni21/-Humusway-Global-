"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Shield, Sprout, CheckCircle2, Recycle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { BackButton } from "@/components/ui/back-button";

export default function CocoPeat() {
  const [showBenefits, setShowBenefits] = useState(false);
  const images = ["/images/Coco1.png", "/images/Coco2.png", "/images/Coco3.png"];

  const benefits = [
    "Holds up to 8–10 times its weight in water",
    "Provides consistent moisture for optimal plant growth",
    "pH level ranges from 5.5 to 6.8, suitable for various plants",
    "Limits growth of bacteria and molds after EC treatment",
    "Protects plants from common diseases",
    "Naturally decomposes into organic matter",
    "Enriches soil and provides sustained nutrients",
    "Ideal base for seeds, seedlings, flowers, and vegetables",
    "Helps plants grow strong and less prone to breakage",
    "Produces higher crop yields"
  ];

  const advantages = [
    {
      icon: Droplets,
      title: "Superior Water Retention",
      description: "Holds 8-10 times its weight in water, ensuring plants receive consistent moisture and reducing irrigation frequency"
    },
    {
      icon: Leaf,
      title: "pH Neutral & Eco-Friendly",
      description: "Maintains optimal pH levels (5.5-6.8) for various plants while being 100% natural and biodegradable"
    },
    {
      icon: Shield,
      title: "Disease Resistance",
      description: "After proper treatment, effectively limits bacterial and mold growth, protecting your plants naturally"
    },
    {
      icon: Recycle,
      title: "Natural Soil Enrichment",
      description: "Decomposes over time into organic matter, continuously enriching soil and providing sustained plant nutrition"
    }
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-amber-50 to-white" intensity="strong" baseHue={45}>
      <BackButton />
      <div className="pt-24 md:pt-36 pb-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
          >
            <Sprout className="w-5 h-5 text-amber-700" />
            <span className="text-sm font-semibold text-amber-800">Growing Medium</span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Coco <span className="text-amber-600">Peat</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Versatile and eco-friendly growing medium for sustainable agriculture and horticulture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[280px] sm:h-[350px] md:h-[500px]"
          >
            <ImageSwiper images={images} className="shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our Coco Peat?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Coco peat is a versatile and eco-friendly growing medium that offers exceptional advantages for plant cultivation. Made from natural coconut husks, it provides superior water retention while maintaining excellent drainage properties.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Its ability to retain moisture, pH neutrality, and natural decomposition make it an excellent choice for sustainable agriculture and horticulture. Easy to handle and transport, it&apos;s perfect for both commercial farms and home gardens.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-5 sm:p-8 hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4"
              >
                <advantage.icon className="w-8 h-8 text-amber-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/95 rounded-3xl shadow-xl p-6 md:p-8 mt-12 mb-12"
        >
          <button
            type="button"
            onClick={() => setShowBenefits((prev) => !prev)}
            className="w-full flex items-center justify-between gap-4 text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Key Advantages
            </h2>
            <motion.span
              animate={{ rotate: showBenefits ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-700"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>

          {showBenefits && (
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-amber-50/60 rounded-2xl shadow-md p-5 flex items-start gap-3 hover:shadow-xl transition-all"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Perfect for All Growing Applications
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Whether you&apos;re cultivating seeds, seedlings, flowers, or organic vegetables, coco peat provides the ideal growing environment. Its superior water retention and disease resistance ensure healthy, robust plants with higher yields.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us for Export Orders
            </motion.button>
          </Link>
        </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}

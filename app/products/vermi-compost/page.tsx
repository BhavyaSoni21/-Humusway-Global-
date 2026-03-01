"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Sprout, Shield, Award, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { BackButton } from "@/components/ui/back-button";

export default function VermiCompost() {
  const [showBenefits, setShowBenefits] = useState(false);
  const images = ["/images/Verm1.png", "/images/Verm2.png", "/images/Verm3.png"];

  const benefits = [
    "Improves soil structure, texture, porosity, water-holding capacity",
    "Enhances drainage and aeration while reducing erosion",
    "Promotes plant growth with new shoots and leaves",
    "Neutralizes soil pH naturally",
    "Adds beneficial microbes and enhances microbial activity",
    "Reduces pest and disease incidence",
    "Easy to apply, economical, and odor-free",
    "Completely pathogen-free and safe for use",
    "Rich in micro and macronutrients, vitamins, enzymes",
    "Contains natural hormones like auxins and gibberellins"
  ];

  const advantages = [
    {
      icon: Leaf,
      title: "Better Soil Health",
      description: "Natural conditioner providing essential nutrients: nitrogen, phosphorus, and potassium"
    },
    {
      icon: Sprout,
      title: "Sustainable Growth",
      description: "Slow and steady nutrient release perfectly matched to plant growth rates"
    },
    {
      icon: Shield,
      title: "Water Retention",
      description: "Acts like a sponge, retaining water and reducing irrigation dependency"
    },
    {
      icon: Award,
      title: "Higher Crop Yield",
      description: "Improves both quality and quantity of crops with fewer pests and diseases"
    }
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-green-50 to-white" intensity="strong" baseHue={120}>
      <BackButton />
      <div className="pt-36 pb-20 px-4">
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
            className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6"
          >
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800">Organic Fertilizer</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vermi Compost <span className="text-green-600">Organic Fertilizer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality organic fertilizer for sustainable agriculture and superior crop yields
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <ImageSwiper images={images} className="shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Vermicompost?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One of the key elements in organic farming is compost, a chemical-free organic fertilizer created through the natural decomposition of organic materials. Vermicompost is a superior form of compost produced with the help of earthworms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our premium vermicompost is carefully processed to provide maximum benefits for your crops while maintaining environmental sustainability and superior soil health.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
              >
                <adv.icon className="w-8 h-8 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/95 rounded-3xl shadow-xl p-6 md:p-8 mt-4 mb-12"
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
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 border border-green-200 text-green-700"
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
                  className="bg-green-50/70 rounded-2xl shadow-md p-5 flex items-start gap-3 hover:shadow-xl transition-all"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
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
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Perfect for Sustainable Agriculture
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our vermicompost provides superior soil conditioning with essential nutrients, promoting healthy plant growth and higher crop yields. Ideal for organic farming and sustainable agriculture practices.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
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

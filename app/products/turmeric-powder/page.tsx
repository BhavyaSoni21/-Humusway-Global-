"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, Shield, Brain, Sparkles, CheckCircle2, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function TurmericPowder() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/Term1.png", "/images/Term2.png", "/images/Term3.png"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const benefits = [
    "Powerful anti-inflammatory compound",
    "Increases antioxidant capacity of the body",
    "Boosts development of new brain cells",
    "May lower risk of heart disease",
    "Helps prevent cancer and reduce tumor growth",
    "Has benefits against depression",
    "May help delay aging and fight chronic diseases",
    "Improves gut health and immune system",
    "Reduces oxidative damage from free radicals",
    "May improve symptoms of arthritis"
  ];

  const features = [
    {
      icon: Heart,
      title: "Heart Health",
      description: "Contains curcumin that supports cardiovascular health and reduces heart disease risk"
    },
    {
      icon: Shield,
      title: "Antioxidant Power",
      description: "Potent antioxidant that neutralizes free radicals and boosts body's own enzymes"
    },
    {
      icon: Brain,
      title: "Brain Function",
      description: "Supports cognitive health and may help prevent Alzheimer's disease"
    },
    {
      icon: Activity,
      title: "Anti-Inflammatory",
      description: "Natural compound that fights inflammation at the molecular level"
    }
  ];

  const cancerBenefits = [
    "Contributes to the death of cancerous cells",
    "Reduces angiogenesis (growth of new blood vessels in tumors)",
    "Reduces metastasis (spread of cancer)"
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-orange-50 to-white" intensity="strong" baseHue={30}>
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
            className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-800">Premium Quality</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pure <span className="text-orange-600">Turmeric Powder</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality turmeric powder with powerful health benefits and superior curcumin content
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-transparent">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImage}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={`Turmeric Powder - Image ${currentImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Turmeric?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our turmeric powder contains several bioactive compounds, with <strong className="text-orange-600">curcumin</strong> being the most active and beneficial. Curcumin is a potent <strong>anti-inflammatory</strong> and <strong>antioxidant</strong> compound with numerous scientifically-backed health benefits.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We source only the finest turmeric from trusted farms in India, ensuring the highest quality and curcumin content for maximum health benefits.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors"
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4"
              >
                <feature.icon className="w-7 h-7 text-orange-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Health Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancer Prevention Properties</h2>
          <p className="text-lg text-gray-700 mb-6">
            Studies have shown that turmeric may help prevent various forms of cancer. Research indicates that curcumin:
          </p>
          <div className="space-y-3">
            {cancerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Premium Quality Turmeric
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our high-quality turmeric powder is rich in curcumin and offers powerful health benefits. Perfect for culinary use, supplements, and natural medicine applications.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
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

"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Users, Award } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackButton } from "@/components/ui/back-button";

export default function About() {
  const features = [
    {
      icon: Globe,
      title: "Global Export",
      description: "Exporting premium organic products worldwide"
    },
    {
      icon: Award,
      title: "High Quality",
      description: "Premium quality products certified for excellence"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your needs"
    },
    {
      icon: Building2,
      title: "Established",
      description: "Trusted name in organic exports from India"
    }
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-[#edf6fc] to-white" intensity="strong">
      <BackButton />
      <div className="pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#0477d1]">Humusway Global</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in premium organic exports from India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-[#0477d1]">HUMUSWAY GLOBAL EXPORT PRIVATE LIMITED</strong> is a dynamic Indian export company dedicated to delivering high-quality products to global markets with integrity, efficiency, and reliability. Incorporated on 28 January 2026 and registered with the Registrar of Companies, Pune, we operate as a Private Limited Company with a focused vision of strengthening international trade and building long-term global partnerships.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Director</h3>
            <div className="bg-[#eaf3fb] rounded-2xl p-6 shadow flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#0477d1] rounded-full flex items-center justify-center text-white font-bold text-2xl">T</div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">Tushar Sudhakar Amrule</p>
                <p className="text-gray-700">Engineering graduate and founder with a strong passion for the import–export industry. Specializes in business coordination, supply chain management, and maintaining essential trade documentation. With strong product understanding and a practical approach to operations, he focuses on delivering reliable solutions that align with business and project requirements.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-[#edf6fc] rounded-full mb-4"
              >
                <feature.icon className="w-8 h-8 text-[#0477d1]" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-[#0477d1] to-[#035392] rounded-3xl shadow-xl p-6 md:p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-base leading-relaxed mb-3">
            To deliver premium quality organic products from India to customers worldwide, maintaining the highest standards of quality and sustainability.
          </p>
          <p className="text-base leading-relaxed">
            We promote organic farming practices and provide natural, chemical-free products that benefit people and the planet.
          </p>
        </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}

"use client";

import { motion } from "framer-motion";
import { Globe, PackageCheck, TruckIcon, FileText, HeadphonesIcon, Award } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackButton } from "@/components/ui/back-button";

export default function Services() {
  const services = [
    {
      image: "/images/Global.png",
      title: "Global Export Services",
      description: "We handle all aspects of exporting premium organic products from India to customers worldwide with expertise and reliability."
    },
    {
      image: "/images/Quality.png",
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure you receive only the finest organic products."
    },
    {
      image: "/images/Shipping.png",
      title: "Logistics & Shipping",
      description: "Efficient logistics management ensuring timely delivery of your orders anywhere in the world."
    },
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-white to-[#edf6fc]" intensity="strong">
      <BackButton />
      <div className="pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#0477d1]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive export solutions from India for premium organic products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-contain mb-6"
                style={{ maxWidth: "220px" }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              At <strong className="text-[#0477d1]">Humusway Global Export Private Limited</strong>, we specialize in connecting the world with India&apos;s finest organic products. Our focus is on export excellence, ensuring that every shipment meets international quality standards.
            </p>
            <p>
              We understand the complexities of international trade and work diligently to make the export process smooth and hassle-free for our clients. From product sourcing to final delivery, we manage every step with precision and care.
            </p>
            <p>
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for businesses worldwide seeking premium organic products from India.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-[#0477d1] to-[#035392] rounded-3xl shadow-xl p-6 md:p-8 text-white text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-3">Ready to Start Exporting?</h2>
          <p className="text-base mb-6 opacity-90">
            Get in touch with us for a customized quote
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white text-[#0477d1] font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us Today
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}

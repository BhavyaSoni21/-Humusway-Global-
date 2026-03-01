"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackButton } from "@/components/ui/back-button";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Millennium Emerald Unit B1002, Datta Mandir Road, Wakad, Pune - 411057, India"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "+91 9921789904, +91 9168991898, +91 9028378764"
    },
    {
      icon: Mail,
      title: "Email",
      content: ""
    }
  ];

  return (
    <BeamsBackground className="bg-gradient-to-b from-white to-[#edf6fc]" intensity="strong">
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
            Get In <span className="text-[#0477d1]">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            We&apos;d love to hear from you. Reach out for export inquiries or any questions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0477d1]">
              Humusway Global Export Private Limited
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="flex-shrink-0 w-16 h-16 bg-[#edf6fc] rounded-full flex items-center justify-center"
                >
                  <info.icon className="w-8 h-8 text-[#0477d1]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-700 leading-relaxed break-words">{info.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </BeamsBackground>
  );
}

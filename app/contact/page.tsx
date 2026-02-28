"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";

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
      <div className="pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-[#0477d1]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We'd love to hear from you. Reach out for export inquiries or any questions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0477d1]">
              Humusway Global Export Private Limited
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
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
                  <p className="text-gray-700 leading-relaxed">{info.content}</p>
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

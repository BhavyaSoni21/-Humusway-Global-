"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, Sparkles } from "lucide-react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Vermi Compost Organic Fertilizer — Rich in nitrogen, phosphorus, and potassium, our vermi compost is 100% organic, pathogen-free, and odor-free. It improves soil structure, boosts microbial activity, retains moisture, and delivers sustained nutrition for higher crop yields.",
    name: "Vermi Compost",
    designation: "Organic Fertilizer",
    src: "/images/Verm1.png",
  },
  {
    quote:
      "Coco Peat Growing Medium — Export-grade coco peat with superior water retention, holding up to 8–10 times its weight in water. pH balanced (5.5–6.8), eco-friendly, and available in bricks and grow bags. Ideal for nurseries, horticulture, and hydroponic systems worldwide.",
    name: "Coco Peat",
    designation: "Premium Growing Medium",
    src: "/images/Coco1.png",
  },
  {
    quote:
      "Turmeric Powder — High curcumin content with deep golden color and strong natural aroma. Hygienically processed and export-ready with custom packaging options. Known for its powerful anti-inflammatory, antioxidant, and health-boosting properties for global markets.",
    name: "Turmeric Powder",
    designation: "Premium Spice Export",
    src: "/images/Term1.png",
  },
];

export default function Home() {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col gap-20 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-6 items-center justify-center px-4 text-center"
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-light text-xl md:text-2xl text-gray-600 max-w-3xl py-4"
          >
            Leading exporter of premium organic products from India.
            <br />
            <span className="font-semibold text-gray-800">Vermi Compost, Coco Peat & Turmeric Powder</span> of the highest quality.
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

        <section className="px-4 flex justify-center">
          <div className="w-full max-w-6xl rounded-3xl bg-white/80 backdrop-blur-md shadow-xl border border-white/60 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-2">
              Our <span className="text-[#0477d1]">Featured Products</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 text-center mb-8">
              Premium organic exports — carefully sourced, processed, and shipped worldwide.
            </p>
            <div className="flex justify-center">
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                colors={{
                  name: "#0a0a0a",
                  designation: "#454545",
                  testimony: "#374151",
                  arrowBackground: "#141414",
                  arrowForeground: "#f1f1f7",
                  arrowHoverBackground: "#0477d1",
                }}
                fontSizes={{
                  name: "24px",
                  designation: "15px",
                  quote: "17px",
                }}
              />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/40 bg-white/70 backdrop-blur-md shadow-md p-8 md:p-10 grid gap-8 md:grid-cols-3">
            <div className="space-y-3 md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-left">
                Why Partner With Us?
              </h2>
              <p className="text-sm md:text-base text-gray-600 text-left">
                We work closely with farms, processors, and logistics
                partners to deliver consistent quality for every shipment.
              </p>
            </div>

            <div className="md:col-span-2 grid gap-4 md:grid-cols-2 text-left text-sm md:text-base text-gray-700">
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0477d1]" />
                  Quality & Certifications
                </p>
                <p>
                  Strict quality checks, export-grade packaging, and
                  documentation support for smooth customs clearance.
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0477d1]" />
                  Reliable Supply
                </p>
                <p>
                  Consistent sourcing from trusted producers to fulfill
                  long-term contracts and bulk orders.
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0477d1]" />
                  Flexible Packaging
                </p>
                <p>
                  From retail-ready packs to bulk containers, tailored to
                  your market requirements.
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0477d1]" />
                  Global Export Focus
                </p>
                <p>
                  Experience in handling international shipments with
                  transparent communication at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}

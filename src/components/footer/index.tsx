"use client";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { motion } from "framer-motion";

function FooterSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="translate-y-1/2">
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </motion.section>
  );
}

export default FooterSection;

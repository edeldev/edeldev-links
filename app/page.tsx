"use client";
import Image from "next/image";
import EDELDEV from "@/public/EDELDEV-DARK.webp";
import { motion } from "framer-motion";
import { AboutMe, Apply, FAQ, TabsInfo } from "./components";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-bg-box-container h-auto w-auto sm:w-[550px] md:w-[650px] rounded-xl mx-auto p-10 relative flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-bg-box-container absolute -top-[4rem] rounded-full p-2"
      >
        <Image src={EDELDEV} alt="Edeldev" width={110} height={110} />
      </motion.div>

      <section className="mt-[2rem] w-full">
        <AboutMe />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Apply />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <TabsInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <FAQ />
        </motion.div>
      </section>
    </motion.section>
  );
};

export default Home;

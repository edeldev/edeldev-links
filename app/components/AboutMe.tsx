import { SocialMedia } from "./SocialMedia";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h1 className="text-gradient font-bold text-2xl">Edeldev</h1>
        <h2 className="text-sm text-primary">
          Web developer & content creator
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <SocialMedia />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-primary text-sm md:text-medium text-center text-balance">
          Diseño experiencias digitales que elevan marcas con interfaces
          limpias, mensajes impactantes y contenido que conecta
        </p>
      </motion.div>
    </div>
  );
};

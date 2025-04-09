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
          Desarrollador web & creador de contenido
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
          Te ayudo a crear una página web moderna, atractiva y optimizada para
          convertir visitantes en clientes, con enfoque en diseño responsivo,
          usabilidad y resultados.
        </p>
      </motion.div>
    </div>
  );
};

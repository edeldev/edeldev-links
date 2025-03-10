import Link from "next/link";
import { ShinyText } from "./components/ShinyText";

export const Apply = () => {
  return (
    <div className="mt-[3rem]">
      <h3 className="text-xl md:text-2xl text-gradient text-center md:text-start font-bold mb-5">
        ¡Vamos a crear juntos!
      </h3>

      <div className="flex justify-between items-center flex-col md:flex-row bg-bg-box rounded-lg p-5">
        <p className="text-primary text-center text-sm md:text-medium">
          Complete el formulario para aplicar
        </p>
        <p className="text-primary block md:hidden">↓</p>

        <p className="text-primary hidden md:block">→</p>
        <Link
          href="https://wa.me/8123697420/?text=Hola,%20quiero%20completar%20el%20formulario"
          target="_blank"
          className="px-6 py-2 bg-[#222222] rounded-lg hover:bg-[#333] cursor-pointer transition-all duration-500"
        >
          <ShinyText text="¡Aplicar!" disabled={false} speed={3} />
        </Link>
      </div>
    </div>
  );
};

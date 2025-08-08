import {
  IconBrandTelegram,
  IconBrandYoutube,
  IconWorld,
  IconTemplate,
} from "@tabler/icons-react";
import { TLink } from "./types";

export const LINKS: TLink[] = [
  {
    id: 1,
    title: "Plantilla de cotización",
    caption: "Obtenla ahora",
    link: "https://edelhub.vercel.app/templates/cotizacion-web-completa",
    icon: <IconTemplate size={30} stroke={1} className="text-white" />,
    bgColor: "bg-gradient-to-r from-[#8e2de2] to-[#f64f59]",
  },
  {
    id: 2,
    title: "Únete a nuestro canal",
    caption: "Tips, plantillas, componentes etc.",
    link: "https://t.me/+do8ZTX4lcf5iNWNh",
    icon: <IconBrandTelegram size={30} stroke={1} className="text-white" />,
    bgColor: "bg-[#26A5E4]",
  },
  {
    id: 3,
    title: "Nuestro sitio web",
    link: "https://edelhub.vercel.app",
    icon: <IconWorld size={30} stroke={1} className="text-white" />,
    bgColor: "bg-black",
  },
  {
    id: 4,
    title: "Ultimo video youtube",
    link: "https://youtube.com/shorts/ol1_jOD3SHI?si=RIAJtgceFU366u3g",
    icon: <IconBrandYoutube size={30} stroke={1} className="text-red-500" />,
    bgColor: "bg-black",
  },
];

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
    title: "Obtener plantilla de cotización",
    link: "https://edelhub.vercel.app/templates/cotizacion-web-completa",
    icon: <IconTemplate size={16} stroke={1} className="text-white" />,
  },
  {
    id: 2,
    title: "Únete a telegram",
    link: "https://t.me/+do8ZTX4lcf5iNWNh",
    icon: <IconBrandTelegram size={16} stroke={1} className="text-[#0088CC]" />,
  },
  {
    id: 3,
    title: "Website",
    link: "https://edelhub.vercel.app",
    icon: <IconWorld size={16} stroke={1} className="text-secondary" />,
  },
  {
    id: 4,
    title: "Portfolio Personal",
    link: "https://edeldev.vercel.app",
    icon: <IconWorld size={16} stroke={1} className="text-secondary" />,
  },
  {
    id: 5,
    title: "Ultimo video youtube",
    link: "https://youtube.com/shorts/ol1_jOD3SHI?si=RIAJtgceFU366u3g",
    icon: <IconBrandYoutube size={16} stroke={1} className="text-red-700" />,
  },
];

import { IconBrandYoutube, IconWorld } from "@tabler/icons-react";
import { TLink } from "./types";

export const LINKS: TLink[] = [
  {
    id: 1,
    title: "Website",
    link: "https://edeldev-studio.vercel.app",
    icon: <IconWorld size={16} stroke={1} className="text-secondary" />,
  },
  {
    id: 2,
    title: "Portfolio Personal",
    link: "https://edeldev.vercel.app",
    icon: <IconWorld size={16} stroke={1} className="text-secondary" />,
  },
  {
    id: 3,
    title: "Ultimo video youtube",
    link: "https://youtube.com/shorts/ol1_jOD3SHI?si=RIAJtgceFU366u3g",
    icon: <IconBrandYoutube size={16} stroke={1} className="text-red-700" />,
  },
];

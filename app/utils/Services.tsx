import { IconClockHour3, IconDeviceDesktopDollar } from "@tabler/icons-react";
import { IService } from "../interface/service";

export const SERVICES: IService[] = [
  {
    id: 1,
    sub: "Diseño 100% personalizado",
    title: "Landing Page",
    imageService: "/service-web.webp",
    altImageService:
      "Diseño profesional de landing page enfocada en conversiones y generación de leads",
    titleModal: "Landing page completo",
    linkModal:
      "https://wa.me/8123697420/?text=Hola,%20quiero%20una%20landing%20page",
    features: [
      {
        id: 1,
        title: "Landing page",
      },
      {
        id: 2,
        title: "Diseño personalizado",
      },
      {
        id: 3,
        title: "Diseño enfocado a conversiones",
      },
      {
        id: 4,
        title: "1 año de dominio y hosting",
      },
      {
        id: 5,
        title: "Certificado SSL",
      },
      {
        id: 6,
        title: "Optimizada SEO",
      },
      {
        id: 7,
        title: "Enlaces a redes sociales",
      },
      {
        id: 8,
        title: "Botón de WhatsApp inmediato",
      },
    ],
    prices: [
      {
        id: 1,
        color: "secondary",
        colorText: "text-[#41C3F5]",
        variant: "flat",
        icon: <IconDeviceDesktopDollar size={18} stroke={1} />,
        text: "3,500 - 4,500 MXN",
      },
      {
        id: 2,
        color: "secondary",
        colorText: "text-[#41C3F5]",
        variant: "flat",
        icon: <IconClockHour3 size={18} stroke={1} />,
        text: "3 - 6 días",
      },
    ],
  },
  {
    id: 2,
    sub: "Diseño 100% personalizado",
    title: "Página Web",
    imageService: "/fitness.webp",
    altImageService:
      "Desarrollo de sitio web multipágina con diseño moderno y navegación intuitiva",
    titleModal: "Página web completo",
    linkModal:
      "https://wa.me/8123697420/?text=Hola,%20quiero%20una%20página%20web",
    features: [
      {
        id: 1,
        title: "Diseño multipágina",
      },
      {
        id: 2,
        title: "Diseño personalizado",
      },
      {
        id: 3,
        title: "Diseño enfocado a conversiones",
      },
      {
        id: 4,
        title: "1 año de dominio y hosting",
      },
      {
        id: 5,
        title: "Certificado SSL",
      },
      {
        id: 6,
        title: "Optimizada SEO",
      },
      {
        id: 7,
        title: "Enlaces a redes sociales",
      },
      {
        id: 8,
        title: "Botón de WhatsApp inmediato",
      },
    ],
    prices: [
      {
        id: 1,
        color: "secondary",
        colorText: "text-[#41C3F5]",
        variant: "flat",
        icon: <IconDeviceDesktopDollar size={18} stroke={1} />,
        text: "4,500 - 5,500 MXN",
      },
      {
        id: 2,
        color: "secondary",
        colorText: "text-[#41C3F5]",
        variant: "flat",
        icon: <IconClockHour3 size={18} stroke={1} />,
        text: "4 - 8 días",
      },
    ],
  },
];

"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { CARRUSEL_PROYECTS } from "@/app/utils/CarruselProyects";
import { IconExternalLink } from "@tabler/icons-react";
import { Tooltip } from "@heroui/react";

export const Carrusel = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
    >
      {CARRUSEL_PROYECTS.map((proyect) => (
        <SwiperSlide key={proyect.id}>
          <Image
            src={proyect.image}
            alt={proyect.title}
            className="rounded-md cursor-grabbing"
          />
          <Tooltip content="Ir al sitio">
            <Link
              href={proyect.link}
              target="_blank"
              className="absolute top-3 right-3 hover:text-secondary transform hover:scale-110 transition-transform duration-300"
            >
              <IconExternalLink size={20} stroke={1} />
            </Link>
          </Tooltip>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

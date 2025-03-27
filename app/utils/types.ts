import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type TLink = {
  id: number;
  title: string;
  link: string;
  icon: ReactNode;
};

export type TAvatar = {
  id: number;
  src: string;
};

export type TSocialMedia = {
  id: number;
  icon: ReactNode;
  link: string;
};

export type TCarruselProyect = {
  id: number;
  title: string;
  image: StaticImageData;
  link: string;
};

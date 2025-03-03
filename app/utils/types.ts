import { StaticImageData } from "next/image";
import { JSX, ReactNode } from "react";

type ChipColor =
  | "secondary"
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

type ChipVariant =
  | "solid"
  | "shadow"
  | "light"
  | "bordered"
  | "faded"
  | "dot"
  | "flat";

export interface IModalChip {
  id: number;
  color: ChipColor;
  colorText: string;
  variant: ChipVariant;
  icon: JSX.Element;
  text: string;
}

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

export type TModalService = {
  id: number;
  title: string;
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

import { JSX } from "react";
export interface IService {
  id: number;
  sub: string;
  title: string;
  imageService: string;
  titleModal: string;
  linkModal: string;
  features: TFeature[];
  prices: TPrice[];
}

type TFeature = {
  id: number;
  title: string;
};

type TPrice = {
  id: number;
  color: ChipColor;
  colorText: string;
  variant: ChipVariant;
  icon: JSX.Element;
  text: string;
};

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

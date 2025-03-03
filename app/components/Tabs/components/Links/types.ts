import { TLink } from "@/app/utils/types";
import { MouseEventHandler, ReactNode } from "react";

export interface IAnimatedItem {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface IAnimatedList {
  items?: TLink[];
  onItemSelect?: (item: TLink, index: number) => void;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

import { IconClockHour3, IconDeviceDesktopDollar } from "@tabler/icons-react";
import { IModalChip } from "./types";

export const MODAL_CHIP: IModalChip[] = [
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
];

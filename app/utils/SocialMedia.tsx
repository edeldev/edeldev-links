import {
  IconMail,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { TSocialMedia } from "./types";

export const SOCIAL_MEDIA: TSocialMedia[] = [
  {
    id: 1,
    icon: <IconMail stroke={1} size={24} />,
    link: "mailto:edeldev25@gmail.com",
  },
  {
    id: 2,
    icon: <IconBrandLinkedin size={24} stroke={1} />,
    link: "https://www.linkedin.com/in/edel-dev",
  },
  {
    id: 3,
    icon: <IconBrandFacebook size={24} stroke={1} />,
    link: "https://www.facebook.com/profile.php?id=100087542244958",
  },
  {
    id: 4,
    icon: <IconBrandInstagram size={24} stroke={1} />,
    link: "https://www.instagram.com/edel.dev?igsh=YzNibWJyeDNveGtp&utm_source=qr",
  },
  {
    id: 5,
    icon: <IconBrandTiktok size={24} stroke={1} />,
    link: "https://www.tiktok.com/@edel.dev?_t=ZM-8tszoN5y8xB&_r=1",
  },
  {
    id: 6,
    icon: <IconBrandYoutube size={24} stroke={1} />,
    link: "https://www.youtube.com/@edeldev",
  },
  {
    id: 7,
    icon: <IconBrandGithub size={24} stroke={1} />,
    link: "https://github.com/edeldev",
  },
];

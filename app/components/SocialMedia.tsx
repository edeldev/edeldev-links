import { SOCIAL_MEDIA } from "../utils/SocialMedia";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      {SOCIAL_MEDIA.map((media) => (
        <Link key={media.id} href={media.link} target="_blank">
          <button className="bg-bg-box p-2 text-text-icon rounded-md transition-all duration-300 transform hover:scale-110 hover:text-white">
            {media.icon}
          </button>
        </Link>
      ))}
    </div>
  );
};

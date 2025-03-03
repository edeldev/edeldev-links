import { IconStarFilled } from "@tabler/icons-react";

export const renderStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <IconStarFilled
        key={i}
        size={12}
        stroke={1}
        className="text-yellow-300"
      />
    );
  }
  return stars;
};

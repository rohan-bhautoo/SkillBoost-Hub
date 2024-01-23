"use client";
import { Box } from "@chakra-ui/react";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

interface Props {
  rating: number;
  totalReviews: Number;
}

const RatingStar = ({ rating, totalReviews }: Props) => {
  const fullStars = Math.floor(rating!); // Number of full stars
  const hasHalfStar = rating! % 1 !== 0; // Check if there's a half star

  return (
    <Box display="flex" mt="2" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          if (i < fullStars) {
            return <MdOutlineStar key={i} color="#ffd700" size={20} />;
          } else if (hasHalfStar && i === fullStars) {
            return <MdOutlineStarHalf key={i} color="#ffd700" size={20} />;
          } else {
            return <MdOutlineStar key={i} color="gray" size={20} />;
          }
        })}

      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {totalReviews.toString()} reviews
      </Box>
    </Box>
  );
};

export default RatingStar;

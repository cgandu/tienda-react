import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function StarRating({ rating }) {
  const ratingArray = [];

  for (let i = 0; i < rating; i++) {
    ratingArray.push(1);
  }
  const casillerosVacios = 5 - ratingArray.length;
  for (let i = 0; i < casillerosVacios; i++) {
    ratingArray.push(0);
  }

  return (
    <>
      {ratingArray.map((i, idx) => {
        if (i === 1) {
          return <StarIcon key={idx} />;
        } else {
          return <StarBorderIcon key={idx} />;
        }
      })}
    </>
  );
}

export default StarRating;


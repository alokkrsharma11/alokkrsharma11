import React from "react";
import { Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

// Custom star colors per organization
const orgColors = {
  Microsoft: "#0078D4", // Azure Blue
  Oracle: "#F80000", // Oracle Red
  MongoDB: "#47A248", // MongoDB Green
  Neo4J: "#008CCF", // Neo4J Blue
};

// Custom Rating Component
const CustomRating = ({ value, org }) => {
  const color = orgColors[org] || "#FFD700"; // default gold
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<StarIcon key={i} style={{ color }} />);
    } else {
      stars.push(<StarBorderIcon key={i} style={{ color }} />);
    }
  }

  return <Box display="flex">{stars}</Box>;
};

export default CustomRating;
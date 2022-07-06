import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const ImageCard = () => {
  return (
    <Stack
      justifyContent="end"
      p="0 1rem 2rem 1rem"
      sx={{
        width: 250,
        height: 200,
        backgroundImage: `url("https://mui.com/static/images/cards/contemplative-reptile.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#9ED5E3",
          color: "#FFFFFF",
          padding: "18px",
          fontSize: 16,
        }}
      >
        <Stack>
          <Typography fontSize="smaller" fontWeight="bold">
            {"Get 20% OFF on the nursing providers order"}
          </Typography>
          <Typography fontSize="smaller" mt={1}>
            {"Voucher code : AXZ31"}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ImageCard;

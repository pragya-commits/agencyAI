import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        ml: "150px",
        mr: "150px",
      }}
    >
      <Image
        src="https://agency4ai.in/assets/logo-CpnJpnzw.svg"
        alt="Logo"
        width={200}
        height={50}
      />

      <Box
        sx={{
          display: "flex",

          gap: "20px",
          mt: "20px",
        }}
      >
        <Typography sx={{ fontSize: "15px" }}>Home</Typography>
        <Typography sx={{ fontSize: "15px" }}>Services</Typography>
        <Typography sx={{ fontSize: "15px" }}>Our Work</Typography>
        <Typography sx={{ fontSize: "15px" }}>Contact us</Typography>
      </Box>
      <Box sx={{ mt: "20px" }}>
        <Button
          variant="contained"
          sx={{ fontSize: "12px", borderRadius: "20px", gap: "5px" }}
        >
          Connect <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;

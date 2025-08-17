import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
function Herosection() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
          border: "1px solid gray",
          mr: "40%",
          ml: "40%",
          borderRadius: "20px",
          pt: "5px",
          pb: "5px",
        }}
      >
        <Image
          src="https://agency4ai.in/assets/group_profile-B4SEylet.png"
          alt="Logo"
          width={100}
          height={40}
        />
        <Typography sx={{ mt: "8px" }}>Trusted by 10k+ People</Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: "10px" }}>
        <Typography
          sx={{
            fontSize: "70px",
            fontWeight: "500",
          }}
        >
          Turning imagination into <br />
          <span style={{ color: "blue" }}>digital</span> impact.
        </Typography>
        <Typography
          sx={{ fontSize: "20px", color: "gray", mt: "5px", mb: "10px" }}
        >
          Creating meaningful connections and turning big ideas into <br />{" "}
          interactive digital experiences.
        </Typography>
        <Image
          src="https://agency4ai.in/assets/hero_img-ySDs5NA2.png"
          alt="Logo"
          width={1200}
          height={600}
        />
      </Box>
    </Box>
  );
}

export default Herosection;

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Work() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box>
        <Typography sx={{ fontSize: "50px", color: "#333333", mb: "15px" }}>
          Our Latest Work
        </Typography>
        <Typography sx={{ fontSize: "18px", color: "#777777", mb: "25px" }}>
          From strategy to execution, we craft digital solutions that move your{" "}
          <br /> business forward.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: "18%",
            mr: "18%",
          }}
        >
          <Box>
            <Image
              src="https://agency4ai.in/assets/work_mobile_app-C3Sz8-bL.png"
              alt="Logo"
              width={320}
              height={220}
            />
            <Typography sx={{ fontSize: "20px", mb: "10px", mt: "10px" }}>
              Mobile App Marketing
            </Typography>
            <Typography sx={{ color: "gray" }}>
              We turn bold ideas into powerful digital <br /> solutions that
              connect, engage...
            </Typography>
          </Box>
          <Box>
            <Image
              src="https://agency4ai.in/assets/work_dashboard_management-B95Y9g_p.png"
              alt="Logo"
              width={320}
              height={220}
            />
            <Typography sx={{ fontSize: "20px", mb: "10px", mt: "10px" }}>
              Dashboard Management
            </Typography>
            <Typography sx={{ color: "gray" }}>
              We help you execute your plan and <br /> deliver results.
            </Typography>
          </Box>
          <Box>
            <Image
              src="https://agency4ai.in/assets/work_fitness_app-DbcNwP80.png"
              alt="Logo"
              width={320}
              height={220}
            />
            <Typography sx={{ fontSize: "20px", mb: "10px", mt: "10px" }}>
              Fitness App Promotion
            </Typography>
            <Typography sx={{ color: "gray", justifyContent: "left" }}>
              We help you create a marketing strategy <br /> that drives
              results.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Work;

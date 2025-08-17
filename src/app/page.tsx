import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Companies from "@/components/Companies";
import Help from "@/components/Help";
function page() {
  return (
    <Box>
      <Navbar />
      <Herosection />
      <Companies />
      <Help />
    </Box>
  );
}

export default page;

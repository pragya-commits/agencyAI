import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Companies from "@/components/Companies";
import Help from "@/components/Help";
import Work from "@/components/Work";
function page() {
  return (
    <Box>
      <Navbar />
      <Herosection />
      <Companies />
      <Help />
      <Work />
    </Box>
  );
}

export default page;

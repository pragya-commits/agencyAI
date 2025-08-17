import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Companies from "@/components/Companies";
function page() {
  return (
    <Box>
      <Navbar />
      <Herosection />
      <Companies />
    </Box>
  );
}

export default page;

import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Companies from "@/components/Companies";
import Help from "@/components/Help";
import Work from "@/components/Work";
import Team from "@/components/Team";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
function page() {
  return (
    <Box>
      <Navbar />
      <Herosection />
      <Companies />
      <Help />
      <Work />
      <Team />
      <Form />
      <Footer />
    </Box>
  );
}

export default page;

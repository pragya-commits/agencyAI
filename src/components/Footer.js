"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9fafb",
        py: 7,
        px: { xs: 3, md: 8 },
        borderTop: "1px solid #e5e7eb",
        mt: "80px",
      }}
    >
      {/* Top section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 4,
          pb: 4,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Left side - logo + text + nav */}
        <Box>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Image
              src="https://agency4ai.in/assets/logo-CpnJpnzw.svg"
              alt="logo"
              width={200}
              height={50}
            />
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: "300px", mb: 3 }}
          >
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </Typography>

          {/* Nav links */}
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {["Home", "Services", "Our Work", "Contact Us"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "#5A3EF2" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Right side - Newsletter */}
        <Box sx={{ maxWidth: "400px", width: "100%" }}>
          <Typography variant="subtitle1" fontWeight="600" gutterBottom>
            Subscribe to our newsletter
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            The latest news, articles, and resources, sent to your inbox weekly.
          </Typography>

          {/* Email input + button */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              placeholder="Enter your email"
              fullWidth
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5A3EF2",
                px: 3,
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { backgroundColor: "#472ec7" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Bottom section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          gap: 2,
        }}
      >
        {/* Copyright */}
        <Typography variant="body2" color="text.secondary">
          Copyright 2025 © GreatStack - All Right Reserved.
        </Typography>

        {/* Social icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <FacebookIcon
            sx={{ cursor: "pointer", "&:hover": { color: "#5A3EF2" } }}
          />
          <XIcon sx={{ cursor: "pointer", "&:hover": { color: "#5A3EF2" } }} />
          <InstagramIcon
            sx={{ cursor: "pointer", "&:hover": { color: "#5A3EF2" } }}
          />
          <LinkedInIcon
            sx={{ cursor: "pointer", "&:hover": { color: "#5A3EF2" } }}
          />
        </Box>
      </Box>
    </Box>
  );
}

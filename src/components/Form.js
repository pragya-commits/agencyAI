"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ContactForm() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        textAlign: "center",
        mt: 8,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="600"
        gutterBottom
        sx={{ fontSize: { xs: "28px", md: "40px" } }}
      >
        Reach out to us
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "600px",
          mx: "auto",
          mb: 5,
          fontSize: "18px",
        }}
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
              Your name
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ flex: 1, textAlign: "left" }}>
            <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
              Email id
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
            Message
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your message"
            multiline
            rows={5}
          />
        </Box>

        <Box textAlign="left">
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#5A3EF2",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#472ec7",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Team() {
  return (
    <Box sx={{ textAlign: "center", mt: "100px", mb: "100px" }}>
      <Box>
        <Typography sx={{ fontSize: "50px", mb: "10px" }}>
          Meet our Team
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "20px", pb: "25px" }}>
          A passionate team of digital experts dedicated to your brands <br />
          success.
        </Typography>
      </Box>
      <Box sx={{ ml: "28%" }}>
        <Box sx={{ display: "flex", mb: "40px", gap: "40px" }}>
          <Box
            sx={{ display: "flex", backgroundColor: "white", color: "black" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="Logo"
              width={50}
              height={50}
              style={{
                borderRadius: "50%",
                pr: "5px",
              }}
            />

            <Typography sx={{ pt: "8px", pl: "5px" }}>
              Haley Carter <br /> CEO & Founder
            </Typography>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{ display: "flex", backgroundColor: "white", color: "black" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="Logo"
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  pr: "5px",
                }}
              />

              <Typography sx={{ pt: "8px", pl: "5px" }}>
                James Walker <br /> Ads Manager
              </Typography>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{ display: "flex", backgroundColor: "white", color: "black" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Logo"
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  pr: "5px",
                }}
              />

              <Typography sx={{ pt: "8px", pl: "5px" }}>
                Jessica Morgan <br /> Vice President
              </Typography>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{ display: "flex", backgroundColor: "white", color: "black" }}
            >
              <Image
                src="https://randomuser.me/api/portraits/women/10.jpg"
                alt="Logo"
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  pr: "5px",
                }}
              />

              <Typography sx={{ pt: "8px", pl: "5px" }}>
                Ashley Bannet <br /> Marketing & Sales
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", backgroundColor: "white", color: "black" }}>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{ display: "flex", backgroundColor: "white", color: "black" }}
            >
              <Image
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="Logo"
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  pr: "5px",
                }}
              />

              <Typography sx={{ pt: "8px", pl: "5px" }}>
                Emily Parker
                <br />
                Content Marketing
              </Typography>
            </Box>
            <Box>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Image
                  src="https://randomuser.me/api/portraits/men/9.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                    pr: "5px",
                  }}
                />

                <Typography sx={{ pt: "8px", pl: "5px" }}>
                  Ryan Mitchell
                  <br /> Content Writer
                </Typography>
              </Box>
            </Box>
            <Box>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Image
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                    pr: "5px",
                  }}
                />

                <Typography sx={{ pt: "8px", pl: "5px" }}>
                  Megan Brooks <br /> Performance Manager
                </Typography>
              </Box>
            </Box>
            <Box>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Image
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                    pr: "5px",
                  }}
                />

                <Typography sx={{ pt: "8px", pl: "5px" }}>
                  Amber Foster <br /> Senior Writer
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Team;

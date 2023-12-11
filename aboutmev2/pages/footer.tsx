import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Sofia } from "next/font/google";
function Footer() {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        <Grid item xs={3}>
          <div style={{ position: "relative", borderRight: "1px solid #fff" }}>
            <Typography>Service-Hotline</Typography>

            <Typography>+49 (0) 771 / 175 131 69</Typography>
            <Typography>+49 (0) 771 / 175 131 69</Typography>
            <Typography>+49 (0) 771 / 175 131 69</Typography>
            <Typography>+49 (0) 771 / 175 131 69</Typography>
            <Typography>+49 (0) 771 / 175 131 69</Typography>
            <Typography>+49 (0) 771 / 175 131 69</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ position: "relative", borderRight: "1px solid #fff" }}>
            <Typography>Shop</Typography>

            <Typography>Games</Typography>
            <Typography>HardWare</Typography>
            <Typography>Games</Typography>
            <Typography>HardWare</Typography>
            <Typography>Games</Typography>
            <Typography>HardWare</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ position: "relative", borderRight: "1px solid #fff" }}>
            <Typography>Information</Typography>

            <Typography>Download Area</Typography>
            <Typography>Imprint</Typography>
            <Typography>Download Area</Typography>
            <Typography>Imprint</Typography>
            <Typography>Download Area</Typography>
            <Typography>Imprint</Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ position: "relative" }}>
            <Typography>Our Company</Typography>

            <Typography>About us</Typography>
            <Typography>Contact</Typography>
            <Typography>Privacy</Typography>
            <Typography>Team of us</Typography>
            <Box
              sx={{
                bottom: "-1px",
                color: "white",

                width: "1",
                height: "10%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // Căn giữa theo chiều ngang
              }}
            >
              <img
                src="/Vector.svg"
                style={{
                  width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                  height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                  display: "block",
                  margin: "2%",
                }}
              />
              <img
                src="/Frame.svg"
                style={{
                  width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                  height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                  display: "block",
                  margin: "2%",
                }}
              />
              <img
                src="/Frame (1).svg"
                style={{
                  width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                  height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                  display: "block",
                  margin: "2%",
                }}
              />
              <img
                src="/Vector (1).svg"
                style={{
                  width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                  height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                  display: "block",
                  margin: "2%",
                }}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;

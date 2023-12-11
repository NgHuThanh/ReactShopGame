import React from "react";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
function MyBlog() {
  const imageSrcs = [
    "/SlideItem/Hot7.jpeg",
    "/SlideItem/Hot8.jpeg",
    "/SlideItem/Hot9.jpeg",
    "/SlideItem/Hot9.jpeg",
    "/SlideItem/Hot9.jpeg",
  ];
  return (
    <>
      <Box sx={{ marginTop: "80px" }}>
        <Toolbar>
          <Typography component="div">Blog</Typography>
          <Button
            sx={{
              backgroundColor: "var(--custom-color, #FF9800)",
              color: "var(--custom-color, #161618)",

              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "var(--custom-color, #161618)", // Thay đổi màu sắc tùy thuộc vào nhu cầu của bạn
                color: "var(--custom-color, #FF9800)",
              },
            }}
          >
            Show all
          </Button>
        </Toolbar>
        <Grid item container spacing={2}>
          {imageSrcs.map((src, index) => (
            <Grid key={index} item xs={2}>
              <div style={{ position: "relative" }}>
                <Button
                  sx={{
                    padding: "0px",
                    height: "409px",
                    width: "100%", // Đặt width thành 100% để nó căn chiều rộng theo container
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundPosition: "center",
                    position: "relative", // Đặt position để có thể thêm đường viền tương đối vào
                    borderRadius: "10px 10px 0 0",
                  }}
                >
                  <img
                    src={src}
                    alt={`Ảnh ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  />
                </Button>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: "95%",
                    right: 0, // Đặt giá trị right để đưa Typography về bên phải

                    color: "#FF9800",
                    backgroundColor: "rgba(0, 0, 0, 0.60)",
                    height: "5%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  18-10-2002
                </Typography>
              </div>

              <Typography
                variant="body1" // Chọn variant phù hợp
                style={{
                  textAlign: "center", // Căn giữa ngang
                  display: "flex", // Để căn giữa dọc
                  alignItems: "center", // Căn giữa dọc
                  // Căn giữa dọc
                  fontWeight: "bold",
                  height: "50px", // Làm cho chữ trở nên dày hơn
                }}
              >
                {src}
              </Typography>
              <Typography
                variant="body1" // Chọn variant phù hợp
                style={{
                  display: "flex", // Để căn giữa dọc
                  alignItems: "center", // Căn giữa dọc
                }}
              >
                Whether you’re a competitive or casual racer, collector, tuner,
                livery designer or photographer – find your line with a
                staggering collection of game modes including fan-favourites
                like GT Campaign, Arcade and Driving School.
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default MyBlog;

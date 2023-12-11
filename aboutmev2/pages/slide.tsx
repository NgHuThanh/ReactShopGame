import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

function MySlide() {
  const imageSrcs = [
    "/SlideItem/Hot7.jpeg",
    "/SlideItem/Hot8.jpeg",
    "/SlideItem/Hot9.jpeg",
  ];
  return (
    <>
      <Box sx={{ marginTop: "80px" }}>
        <Toolbar>
          <Typography component="div">
            BANDAI NAMCO Entertainment Games
          </Typography>
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
            <Grid key={index} item xs={4}>
              <div style={{ position: "relative" }}>
                <Button
                  sx={{
                    padding: "0px",
                    height: "600px",
                    width: "1",
                    // Đặt width thành 100% để nó căn chiều rộng theo container
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundPosition: "center",
                    position: "relative", // Đặt position để có thể thêm đường viền tương đối vào
                    borderRadius: "10px 10px 0 0", // Đường viền 1px màu trắng
                  }}
                >
                  <img
                    src={src}
                    alt={`Ảnh ${index + 1}`}
                    style={{
                      width: "100%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng của
                      height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                      display: "block",
                      borderRadius: "10px 10px 0 0", // Loại bỏ khoảng trắng dưới ảnh khi nó là phần
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-1px",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.60)",
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
                      src="/MenuBarItem/PS5.svg"
                      alt={`Ảnh ${index + 1}`}
                      style={{
                        width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                        height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block",
                        margin: "2%",
                      }}
                    />
                    <img
                      src="/MenuBarItem/PS4.svg"
                      alt={`Ảnh ${index + 1}`}
                      style={{
                        width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                        height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block",
                        margin: "2%",
                      }}
                    />
                    <img
                      src="/MenuBarItem/PS3.svg"
                      alt={`Ảnh ${index + 1}`}
                      style={{
                        width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                        height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block",
                        margin: "2%",
                      }}
                    />
                    <img
                      src="/MenuBarItem/Xbox.svg"
                      alt={`Ảnh ${index + 1}`}
                      style={{
                        width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                        height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block",
                        margin: "2%",
                      }}
                    />
                    <img
                      src="/MenuBarItem/Xbox.svg"
                      alt={`Ảnh ${index + 1}`}
                      style={{
                        width: "14%", // Đặt width thành 100% để hình ảnh mở rộng theo chiều rộng
                        height: "100%", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block",
                        margin: "2%",
                      }}
                    />
                  </Box>
                </Button>

                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: "88%",

                    backgroundColor: "#E35E26", // Màu nền #E35E26
                    width: "15%",
                    height: "9%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "none",
                    borderTopRightRadius: "5px", // Bo tròn góc bên phải
                    borderBottomRightRadius: "5px",
                    // Bo tròn góc bên phải
                    fontSize: "1.5rem", // Kích thước chữ
                  }}
                >
                  10%
                </Box>
              </div>

              <Typography
                variant="body1" // Chọn variant phù hợp
                style={{
                  textAlign: "center", // Căn giữa ngang
                  display: "flex", // Để căn giữa dọc
                  alignItems: "center", // Căn giữa dọc
                  justifyContent: "center", // Căn giữa dọc
                  fontWeight: "bold",
                  height: "50px", // Làm cho chữ trở nên dày hơn
                }}
              >
                {src}
              </Typography>

              <Box>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Button
                      style={{
                        backgroundColor: "#FF9800", // Màu nền của Button bên trái
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        color: "#161618",
                        width: "100%",
                        borderRadius: "0px 0px 0px 10px",
                        height: "45px",
                        // Hiển thị hình ảnh và chữ theo chiều dọc
                      }}
                    >
                      Add to cart
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        backgroundColor: "#454549", // Màu nền của Button bên trái
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius: "0px 0px 10px 0px",
                        width: "100%",
                        height: "45px",
                      }}
                    >
                      <Grid container>
                        {/* Cột trái */}
                        <Grid item xs={6}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              color: "#FF9800",
                              fontSize: "24px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            52$
                          </Typography>
                        </Grid>

                        {/* Cột phải */}
                        <Grid item xs={6}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#F4F4F4",
                              fontSize: "24px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              textDecoration: "line-through",
                            }}
                          >
                            112$
                          </Typography>
                        </Grid>
                      </Grid>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default MySlide;

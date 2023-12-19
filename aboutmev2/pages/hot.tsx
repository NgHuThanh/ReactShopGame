import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { Sofia } from "next/font/google";
function Hot() {
  const leftImageSrc = "/HotItem/Hot1.png";
  const rightImageSrcs = [
    "/HotItem/Hot2.png",
    "/HotItem/Hot3.png",
    "/HotItem/Hot4.png",
    "/HotItem/Hot5.png",
  ];
  return (
    <>
      <Grid container sx={{ maxHeight: "698px", marginTop: "40px" }}>
        <Grid item xs={7} md={5} sx={{ flexGrow: 1, component: "div" }}>
          <Button>
            <Box
              component="img" // Sử dụng component="img" để bao quanh một thẻ <img>
              src={leftImageSrc}
              alt="Ảnh bên trái"
              style={{ width: "100%", maxHeight: "698px" }}
            />
          </Button>
        </Grid>

        {/* Cột chứa 4 ảnh bên phải */}
        <Grid item container xs={12} md={7} spacing={3}>
          {rightImageSrcs.map((src, index) => (
            <Grid key={index} item xs={6}>
              <div style={{ position: "relative" }}>
                <Button
                  sx={{
                    padding: "0px",
                    overflow: "hidden",
                    height: "300px",
                    width: "100%", // Đặt width thành 100% để nó căn chiều rộng theo container
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundImage: `url(${src})`, // Đường dẫn đến hình ảnh
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative", // Đặt position để có thể thêm đường viền tương đối vào
                    border: "1px solid #fff",
                    borderRadius: "0px", // Đường viền 1px màu trắng
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Ảnh ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Để ảnh mở rộng để đảm bảo không có khoảng trắng
                    }}
                  />
                </Button>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: "-1px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.60)",
                    width: "99.5%",
                    height: "15%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #fff",
                    borderTop: "none", // Căn giữa theo chiều ngang
                  }}
                >
                  {src}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: "80%",
                    color: "gray.100", // Màu chữ gray-100
                    backgroundColor: "#E35E26", // Màu nền #E35E26
                    width: "15%",
                    height: "15%",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "none",
                    borderTopRightRadius: "5px", // Bo tròn góc bên phải
                    borderBottomRightRadius: "5px",
                    borderLeft: "1px solid #fff", // Bo tròn góc bên phải
                    fontSize: "1.5rem", // Kích thước chữ
                  }}
                >
                  10%
                </Box>
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: "85%",
                    width: "98%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    borderTop: "none",
                  }}
                >
                  <Box
                    component="img"
                    src="/HotItem/IconHeart.svg"
                    alt="Mô tả hình ảnh"
                  />
                </Box>
              </div>

              <Grid container spacing={0}>
                {/* Box 1 */}
                <Grid item xs={2}>
                  <Button
                    sx={{
                      borderRadius: "0 0 10px 10px", // Bo tròn hai đáy
                      height: "100%",
                      width: "80%",
                      border: "1px solid #F4F4F4",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src="/HotItem/SteamIcon.svg"
                      style={{
                        width: "50%",
                        maxWidth: "80%", // Độ rộng tối đa là 80%
                        height: "auto", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block", // Để loại bỏ khoảng trắng dưới ảnh khi nó là phần tử inline
                        margin: "auto", // Để căn giữa hình ảnh trong container
                      }}
                    />
                  </Button>
                </Grid>

                {/* Box 2 */}
                <Grid item xs={2}>
                  <Button
                    sx={{
                      borderRadius: "0 0 10px 10px", // Bo tròn hai đáy
                      height: "100%",
                      width: "0.8",
                      border: "1px solid #F4F4F4",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src="/HotItem/Epic.svg"
                      style={{
                        width: "50%",
                        maxWidth: "80%", // Độ rộng tối đa là 80%
                        height: "auto", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block", // Để loại bỏ khoảng trắng dưới ảnh khi nó là phần tử inline
                        margin: "auto", // Để căn giữa hình ảnh trong container
                      }}
                    />
                  </Button>
                </Grid>
                {/* Box 3 */}
                <Grid item xs={5}>
                  <Button
                    sx={{
                      borderRadius: "0 0 10px 10px", // Bo tròn hai đáy
                      height: "1",
                      width: "0.8",
                      border: "1px solid #F4F4F4",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src="/HotItem/Card.svg"
                      style={{
                        width: "50%",
                        maxWidth: "80%", // Độ rộng tối đa là 80%
                        height: "auto", // Tự động tính toán chiều cao dựa trên tỷ lệ khung hình
                        display: "block", // Để loại bỏ khoảng trắng dưới ảnh khi nó là phần tử inline
                        margin: "auto", // Để căn giữa hình ảnh trong container
                      }}
                    />
                    <Typography
                      variant="h6" // Chọn variant phù hợp với kích thước chữ bạn muốn
                      sx={{
                        fontWeight: "bold", // Đặt chữ in đậm
                        fontSize: "12px",
                        color: "white", // Màu vàng (mã màu hex cho màu vàng)
                      }}
                    >
                      Add to cart
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    variant="h6" // Chọn variant phù hợp với kích thước chữ bạn muốn
                    sx={{
                      fontWeight: "bold", // Đặt chữ in đậm
                      color: "#FF9800",
                      fontSize: "200%", // Màu vàng (mã màu hex cho màu vàng)
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    52$
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    variant="h6" // Chọn variant phù hợp với kích thước chữ bạn muốn
                    sx={{
                      // Đặt chữ in đậm
                      color: "#F4F4F4",
                      fontSize: "24px", // Màu vàng (mã màu hex cho màu vàng)
                      textAlign: "center",
                      height: "100%",
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
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
export default Hot;

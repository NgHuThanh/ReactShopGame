import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  SvgIcon,
  Table,
  Toolbar,
  Typography,
} from "@mui/material";
import { Epilogue } from "next/font/google";
import { useState } from "react";
//https://www.youtube.com/watch?v=U-_IHx-PJmI
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent } from "react";
function Newest() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "var(--custom-color, #161618)",
          boxShadow: "none", // Loại bỏ boxShadow để không có border
        }}
      >
        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography sx={{ flexGrow: 1 }} component="div">
            Newest physical listings
          </Typography>
          <Button
            sx={{
              backgroundColor: "var(--custom-color, #FF9800)",
              color: "var(--custom-color, #161618)",
              "&:hover": {
                backgroundColor: "var(--custom-color, #161618)", // Thay đổi màu sắc tùy thuộc vào nhu cầu của bạn
                color: "var(--custom-color, #FF9800)",
              },
            }}
          >
            Show all
          </Button>
        </Toolbar>
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              color="inherit"
              sx={{ marginRight: "20px", padding: "15px" }}
            >
              <img
                src="/MenuBarItem/CD.svg"
                alt="Mô tả hình ảnh"
                style={{ width: "25px", height: "auto", marginRight: "10%" }}
              />
              Console
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: "20px", padding: "15px" }}
            >
              <img
                src="/MenuBarItem/TV.svg"
                alt="Mô tả hình ảnh"
                style={{ width: "25px", height: "auto", marginRight: "10%" }}
              />
              PcMobile
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: "20px", padding: "15px" }}
            >
              {" "}
              <img
                src="/MenuBarItem/ThungPC.svg"
                alt="Mô tả hình ảnh"
                style={{ width: "25px", height: "auto", marginRight: "10%" }}
              />
              Pundel
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: "20px", padding: "15px" }}
            >
              {" "}
              <img
                src="/MenuBarItem/CD.svg"
                alt="Mô tả hình ảnh"
                style={{ width: "25px", height: "auto", marginRight: "10%" }}
              />
              Game
            </Button>
            <Button
              color="inherit"
              sx={{ marginRight: "20px", padding: "15px" }}
            >
              {" "}
              <img
                src="/MenuBarItem/Controler.svg"
                alt="Mô tả hình ảnh"
                style={{ width: "25px", height: "auto", marginRight: "10%" }}
              />
              Accessories
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              sx={{ display: { xs: "flex", md: "none" } }}
              onClose={closeMenu}
            >
              <MenuList>
                <MenuItem>
                  <img
                    src="/MenuBarItem/CD.svg"
                    alt="Mô tả hình ảnh"
                    style={{
                      width: "25px",
                      height: "auto",
                      marginRight: "10%",
                    }}
                  />
                  Console
                </MenuItem>
                <MenuItem>
                  <img
                    src="/MenuBarItem/CD.svg"
                    alt="Mô tả hình ảnh"
                    style={{
                      width: "25px",
                      height: "auto",
                      marginRight: "10%",
                    }}
                  />
                  Pc Mobile
                </MenuItem>
                <MenuItem>
                  <img
                    src="/MenuBarItem/CD.svg"
                    alt="Mô tả hình ảnh"
                    style={{
                      width: "25px",
                      height: "auto",
                      marginRight: "10%",
                    }}
                  />
                  Pundel
                </MenuItem>
                <MenuItem>
                  <img
                    src="/MenuBarItem/CD.svg"
                    alt="Mô tả hình ảnh"
                    style={{
                      width: "25px",
                      height: "auto",
                      marginRight: "10%",
                    }}
                  />
                  Game
                </MenuItem>
                <MenuItem>
                  <img
                    src="/MenuBarItem/CD.svg"
                    alt="Mô tả hình ảnh"
                    style={{
                      width: "25px",
                      height: "auto",
                      marginRight: "10%",
                    }}
                  />
                  Accessories
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            padding: "15px",
            backgroundColor: "var(--custom-color, #454549)",
          }}
        >
          <Box>
            <Button color="inherit" sx={{ marginRight: "70px" }}>
              <div>
                <img
                  src="/MenuBarItem/PS5.svg"
                  alt="Mô tả hình ảnh"
                  style={{ width: "90px", height: "30px" }}
                />
                <Typography sx={{ marginTop: "10px" }}>(202 Items)</Typography>
              </div>
            </Button>
            <Button color="inherit" sx={{ marginRight: "70px" }}>
              <div>
                <img
                  src="/MenuBarItem/PS4.svg"
                  alt="Mô tả hình ảnh"
                  style={{ width: "90px", height: "30px" }}
                />
                <Typography sx={{ marginTop: "10px" }}>(202 Items)</Typography>
              </div>
            </Button>
            <Button color="inherit" sx={{ marginRight: "70px" }}>
              <div>
                <img
                  src="/MenuBarItem/PS3.svg"
                  alt="Mô tả hình ảnh"
                  style={{ width: "90px", height: "30px" }}
                />
                <Typography sx={{ marginTop: "10px" }}>(202 Items)</Typography>
              </div>
            </Button>
            <Button color="inherit" sx={{ marginRight: "70px" }}>
              <div>
                <img
                  src="/MenuBarItem/Xbox.svg"
                  alt="Mô tả hình ảnh"
                  style={{ width: "90px", height: "30px" }}
                />
                <Typography sx={{ marginTop: "10px" }}>(202 Items)</Typography>
              </div>
            </Button>
            <Button color="inherit" sx={{ marginRight: "70px" }}>
              <div>
                <img
                  src="/MenuBarItem/Xbox.svg"
                  alt="Mô tả hình ảnh"
                  style={{ width: "90px", height: "30px" }}
                />
                <Typography sx={{ marginTop: "10px" }}>(202 Items)</Typography>
              </div>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Newest;

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
  const menuItems = [
    { label: "Console", src: "/MenuBarItem/CD.svg" },
    { label: "Pc Mobile", src: "/MenuBarItem/CD.svg" },
    { label: "Pundel", src: "/MenuBarItem/CD.svg" },
    { label: "Game", src: "/MenuBarItem/CD.svg" },
    { label: "Accessories", src: "/MenuBarItem/CD.svg" },
  ];
  const menuDivices = [
    { label: "Console", src: "/MenuBarItem/CD.svg" },
    { label: "PcMobile", src: "/MenuBarItem/TV.svg" },
    { label: "Pundel", src: "/MenuBarItem/ThungPC.svg" },
    { label: "Game", src: "/MenuBarItem/CD.svg" },
    { label: "Accessories", src: "/MenuBarItem/Controler.svg" },
  ];

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
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{ marginRight: "20px", padding: "15px" }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={`Mô tả hình ảnh ${index + 1}`}
                  style={{ width: "25px", height: "auto", marginRight: "10%" }}
                />
                <Typography>{item.label}</Typography>
              </Button>
            ))}
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
                {menuDivices.map((item, index) => (
                  <MenuItem key={index}>
                    <Box
                      component="img"
                      src={item.src}
                      alt={`Mô tả hình ảnh ${index + 1}`}
                      style={{
                        width: "25px",
                        height: "auto",
                        marginRight: "10%",
                      }}
                    />
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            padding: "10px",
            backgroundColor: "var(--custom-color, #454549)",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {menuItems.map((item, index) => (
              <Button key={index} color="inherit" sx={{ marginRight: "70px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={`Mô tả hình ảnh ${index + 1}`}
                    style={{ width: "90px", height: "30px" }}
                  />
                  <Typography sx={{ marginTop: "10px" }}>
                    (202 Items)
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Newest;

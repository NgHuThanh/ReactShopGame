import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Button from "@mui/material/Button";
import {
  Avatar,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  createTheme,
  ThemeProvider,
  Grid,
  TextField,
  ButtonBase,
  ButtonGroup,
  IconButton,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
const inter = Inter({ subsets: ["latin"] });
//https://mui.com/system/styled/

type User = {
  name: string;
  introduce: string;
  largeImageSrc: string;
  smallImageSrc: string;
};
type Friend = {
  name: string;
  contactInfo: string;
};
type Hobby = {
  name: string;
  description: string;
};
type ContactInfo = {
  address: string;
  phone: string;
  email: string;
};
type Post = {
  imageSrc: string;
  date: string;
  content: string;
};

type PostListProps = {
  posts: Post[];
};

function UserProfile({ User }: { User: User }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ position: "relative", marginRight: "20px" }}>
          <Avatar
            alt="Large Avatar"
            src={User.largeImageSrc}
            sx={{ width: 200, height: 200 }}
          />

          <Avatar
            alt="Small Avatar"
            src={User.smallImageSrc}
            sx={{
              position: "absolute",
              top: "8px",
              left: "8px",
              width: 50,
              height: 50,
              border: "2px solid #fff",
            }}
          />
        </Box>
        <Box>
          <Typography variant="h4">{User.name}</Typography>
          <Typography variant="body1">{User.introduce}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function SkillIntroduction({ skills }: { skills: string[] }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Paper sx={{ padding: "20px", border: "1px dashed grey" }}>
        <Typography variant="h4" gutterBottom>
          Kỹ Năng Của Tôi
        </Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <Typography>{skill}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
function HobbyIntroduction({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Paper sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Sở Thích Của Tôi
        </Typography>
        <List>
          {hobbies.map((hobby, index) => (
            <ListItem key={index}>
              <Typography>
                <strong style={{ color: "#f50057" }}>{hobby.name}</strong> -{" "}
                {hobby.description}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
function ContactInfoDisplay({ contactInfo }: { contactInfo: ContactInfo }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Paper sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Thông Tin Liên Lạc
        </Typography>
        <List>
          <ListItem>
            <Typography>
              <strong>Địa chỉ:</strong> {contactInfo.address}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>Điện thoại:</strong> {contactInfo.phone}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>Email:</strong> {contactInfo.email}
            </Typography>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

function FriendsIntroduction({ friends }: { friends: Friend[] }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Paper sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Bạn Bè Của Tôi
        </Typography>
        <List>
          {friends.map((friend, index) => (
            <ListItem key={index}>
              <Typography>
                <strong>{friend.name}</strong>
                <br />
                Liên hệ: {friend.contactInfo}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
function PostList({ posts }: { posts: Post[] }) {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        margin: "30px",
      }}
    >
      <Paper sx={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Bài Viết Của Tôi
        </Typography>
        <List>
          {posts.map((post, index) => (
            <ListItem key={index}>
              <Stack spacing={1} sx={{ margin: "20px" }}>
                <div>
                  <Typography variant="h6">{post.content}</Typography>
                  <Typography variant="caption">
                    Ngày đăng: {post.date}
                  </Typography>
                </div>
                {post.imageSrc && (
                  <Avatar
                    alt="Post Image"
                    src={post.imageSrc}
                    sx={{
                      width: "100%",
                      minHeight: "200px",
                      minWidth: "300px",
                      height: "auto",
                      maxWidth: "300px",
                      maxHeight: "200px",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </Stack>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default function Home() {
  const contactInfo: ContactInfo = {
    address: "17 Lý Thái Tổ - Thị Trấn Diên Khánh - Tình Khánh Hòa",
    phone: "092590412",
    email: "thanh.nh.62cntt@ntu.edu.vn",
  };
  const userSkills = ["React", "JavaScript", "HTML", "CSS", "Node.js"];
  const user: User = {
    name: "Nguyễn Hữu Thành",
    introduce:
      "Mô tả: Mình là thành, thích chơi game và lập trình ứng dụng điện thoại",
    largeImageSrc: "/nen.jpg",
    smallImageSrc: "/profile.png",
  };
  const userHobbies: Hobby[] = [
    { name: "Du lịch", description: "Khám phá các địa điểm mới" },
    { name: "Đọc sách", description: "Đọc sách về nhiều chủ đề khác nhau" },
    { name: "Nghe nhạc", description: "Thưởng thức âm nhạc từ nhiều thể loại" },
    {
      name: "Nấu ăn",
      description: "Nấu các món ăn ngon cho gia đình và bạn bè",
    },
  ];
  const userFriends: Friend[] = [
    { name: "Nguyễn Văn A", contactInfo: "Email: a@example.com" },
    { name: "Trần Thị B", contactInfo: "Email: a@example.com" },
    { name: "Lê Minh C", contactInfo: "Email: a@example.com" },
  ];
  const samplePosts: Post[] = [
    {
      imageSrc: "/cunglopanmung.jpg",
      date: "2023-11-25",
      content:
        "Thời gian vui vẻ sẽ đến và đi, nhưng kỷ niệm thì luôn còn mãi.❤️❤️",
    },
    {
      imageSrc: "/dalat.jpg",
      date: "2023-11-26",
      content: "Đà Lạt YEAH YEAH YEAH ❤️❤️",
    },
    {
      imageSrc: "/vannghe.jpg",
      date: "2023-11-26",
      content: "Đi tập văn nghệ cùng lớp",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fixed sx={{ borderRadius: 1, backgroundColor: "#333" }}>
        <Grid container spacing={0}>
          <Grid xs={15}>
            <div>
              <UserProfile User={user} />
            </div>
          </Grid>
          <Grid xs={5}>
            <div>
              <div>
                <ContactInfoDisplay contactInfo={contactInfo} />
              </div>
              <div>
                <SkillIntroduction skills={userSkills}></SkillIntroduction>
              </div>
              <div>
                <HobbyIntroduction hobbies={userHobbies} />
              </div>
              <div>
                <FriendsIntroduction friends={userFriends} />
              </div>
            </div>
          </Grid>
          <Grid xs={7}>
            <div>
              <Box
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "#f0f0f0",
                  padding: "16px",
                  marginTop: "30px",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                <PostList posts={samplePosts} />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      ;
    </>
  );
}

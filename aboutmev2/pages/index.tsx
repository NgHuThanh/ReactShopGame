import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Button from "@mui/material/Button";

import { AccessAlarm, Diversity2, ThreeDRotation } from "@mui/icons-material";
import Newest from "./newest";
import Hot from "./hot";
import MySlide from "./slide";
import MyBlog from "./blog";
import Steam from "./steam";
import Bannel from "./bannel";
import Bannel2 from "./bannel2";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
//https://mui.com/system/styled/

export default function Home() {
  //ssh-keygen -t ed255519 -C "email"
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Newest />
      <Hot />
      <MySlide />
      <MySlide />
      <Bannel />
      <MyBlog />
      <Bannel2 />
      <Steam />
      <Steam />
      <Footer />
    </div>
  );
}

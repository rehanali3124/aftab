import { Stack } from "@mui/material";
import React from "react";
import Model from "./component/model";
import "./App.css";
import Feed from "./component/Feed";
import Navbar from "./component/Navbar";
import Rightbar from "./component/Rightbar";
import Sidebar from "./component/Sidebar";
import { Box } from "@mui/material";
import Vemail from "../src/component/Vemail";
import Payment from "../src/component/payment";
import Pg from "../src/pages/VoFavScreen";
import ImageCard from "./component/imae";
import SignInModal from "./component/model";
import PaymentModal from "../src/component/payment";

function App() {
  return (
    <Box>
      <Navbar />
      {/* <ImageCard /> */}
      {/* <SignInModal /> */}
      <PaymentModal />
      {/* <Payment /> */}
    </Box>
  );
}

export default App;

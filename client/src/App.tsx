import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreateOrder from "./VendorDetails/OrderForm/OrderForm";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <Box
          component="main"
          sx={{
            width: { sm: `calc(100% - 188px)` },
          }}
        >
          <CreateOrder />
        </Box>
      </Box>
    </>
  );
}

export default App;

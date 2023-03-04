import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreateOrder from "./VendorDetails/OrderForm/OrderForm";
import { Box } from "@mui/material";
import AddVendor from "./VendorDetails/Add-Vendor/AddVendor";

function App() {
  return (
    <>
      {/* <Header /> */}
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
          <AddVendor />
        </Box>
      </Box>
    </>
  );
}

export default App;

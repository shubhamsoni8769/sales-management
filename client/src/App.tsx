import React from "react";
import "./App.css";
import CreateOrder from "./VendorDetails/OrderForm/OrderForm";
import AddVendor from "./VendorDetails/Add-Vendor/AddVendor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
// we are using toast because snack bar in mui doest provide notification stack (inotstack can be used)
//

function App() {
  return (
    <>
    <Dashboard/>
      {/* <ToastContainer />
      <CreateOrder /> */}
    </>
  );
}

export default App;

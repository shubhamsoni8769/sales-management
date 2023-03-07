import React from "react";
import "./App.css";
import CreateOrder from "./VendorDetails/OrderForm/OrderForm";
import AddVendor from "./VendorDetails/Add-Vendor/AddVendor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import HsnDetails from "./components/hsnDetails/HsnDetails";
import ProductDetailSetup from "./ProductDeatils/ProductDetailSetup";
import OrderForm from "./VendorDetails/OrderForm/OrderForm";
import TabsView from "./common-component/TabsView";
// we are using toast because snack bar in mui doest provide notification stack (inotstack can be used)
//

const App=()=>{
  const tabs: any = [
    {
      label: "HSN",
      value: "1",
      content: <HsnDetails />,
    },
    {
      label: "Company",
      value: "2",
      content: "company",
    },
    {
      label: "Medical Details",
      value: "3",
      content: <ProductDetailSetup/>,
    },
    {
      label: "Vendor Details",
      value: "4",
      content: <AddVendor/>,
    },
    {
      label: "Create Invoice",
      value: "5",
      content: <OrderForm/>,
    },
    {
      label: "Sales Details",
      value: "6",
      content: "Sales Details",
    },
  ];
  return <TabsView tabs={tabs} activeTabs={"1"} />;
}

export default App;

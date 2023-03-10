import React from "react";
import "./App.css";
import AddVendor from "./VendorDetails/Add-Vendor/AddVendor";
import "react-toastify/dist/ReactToastify.css";
import HsnDetails from "./components/hsnDetails/HsnDetails";
import ProductDetailSetup from "./ProductDeatils/ProductDetailSetup";
import OrderForm from "./VendorDetails/OrderForm/OrderForm";
import TabsView from "./common-component/TabsView";
import NotificationBar from "./common-component/NotificationBar";

// we are using toast because snack bar in mui doest provide notification stack (inotstack can be used)
//
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
    content: <ProductDetailSetup />,
  },
  {
    label: "Vendor Details",
    value: "4",
    content: <AddVendor />,
  },
  {
    label: "Create Invoice",
    value: "5",
    content: <OrderForm />,
  },
  {
    label: "Sales Details",
    value: "6",
    content: "Sales Details",
  },
];
const App = () => {
  return (
    <>
      <NotificationBar />
      <TabsView tabs={tabs} activeTabs={"1"} />
    </>
  );
};

export default App;

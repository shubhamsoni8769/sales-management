import React from "react";
import TabsView from "../../common-component/TabsView";
import HsnDetails from "../../components/hsnDetails/HsnDetails";
import ProductDetailSetup from "../../ProductDeatils/ProductDetailSetup";
import AddVendor from "../../VendorDetails/Add-Vendor/AddVendor";
import OrderForm from "../../VendorDetails/OrderForm/OrderForm";


const Dashboard = () => {
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
};

export default Dashboard;

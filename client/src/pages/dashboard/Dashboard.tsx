import React from "react";
import TabsView from "../../common-component/TabsView";
import HsnDetails from "../../components/hsnDetails/HsnDetails";


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
      content: "Medical Details",
    },
    {
      label: "Vendor Details",
      value: "4",
      content: "Vendor Details",
    },
    {
      label: "Create Invoice",
      value: "5",
      content: "Create Invoice",
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

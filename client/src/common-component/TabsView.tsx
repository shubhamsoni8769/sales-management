import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React,{useState} from "react";

const TabsView=({tabs,activeTabs}:any)=> {
  const [value, setValue] = useState(activeTabs);

  const handleChange = (event: any, newValue?: any) => {
    setValue(newValue.toString());
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {tabs.map((e: any) => {
              return <Tab key={e.value} label={e.label} value={e.value} />;
            })}
          </TabList>
        </Box>
        {tabs.map((e: any) => {
          return <TabPanel key={e.value} value={e.value}>{e.content}</TabPanel>;
        })}
      </TabContext>
    </Box>
  );
}
export default TabsView
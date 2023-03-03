import React, { useState } from "react";
import { Box,  Drawer } from "@mui/material";
import Sidebar from "../../common-component/Sidebar";
function Header() {
  const [drawer, setDrawer] = useState<boolean>(false);
  const items = [
    { name: "home", label: "Home" },
    {
      name: "billing",
      label: "Billing",
      items: [
        { name: "statements", label: "Statements" },
        { name: "reports", label: "Reports" },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance" },
        {
          name: "notifications",
          label: "Notifications",
          items: [
            { name: "email", label: "Email" },
            {
              name: "desktop",
              label: "Desktop",
              items: [
                { name: "schedule", label: "Schedule" },
                { name: "frequency", label: "Frequency" },
              ],
            },
            { name: "sms", label: "SMS" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Drawer
        anchor="left"
        open={drawer}
        PaperProps={{
          sx: {
            width: "188px",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "188px",
              boxSizing: "border-box",
            },
          },
        }}
        onClose={() => setDrawer((prev: boolean) => !prev)}
        variant="permanent"
      >
        <Box>
          <Box sx={{ p: 1.5 }}>
            <Sidebar items={items} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;

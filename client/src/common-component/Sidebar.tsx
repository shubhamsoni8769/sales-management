import React, { useState } from "react";
import List from "@mui/material/List";
import { Button, ListItem, ListItemText } from "@mui/material";
import { Sidebarinterface } from "../types";

function Sidebar({
  items,
  depthStep = 10,
  depth = 0,
}: {
  items: Sidebarinterface[];
  depthStep?: number;
  depth?: number;
}) {
  const [displayChildren, setdisplayChildren] = useState(
    {} as { [key: string]: boolean }
  );
  function handleClick(data: Sidebarinterface) {
    setdisplayChildren({
      ...displayChildren,
      [data.label]: !displayChildren?.[data.label],
    });
  }

  return (
    <div>
      {items.map((item) => (
        <>
          <List style={{ paddingLeft: depth * depthStep }}>
            <ListItem>
              <ListItemText primary={item.label} />
              {Array.isArray(item.items) ? (
                <Button
                  style={{ backgroundColor: "transparent", border: 0 }}
                  onClick={() => handleClick(item)}
                >
                  {displayChildren[item.label] ? "-" : "+"}
                </Button>
              ) : null}
            </ListItem>
          </List>
          {Array.isArray(item.items) && displayChildren[item.label] ? (
            <Sidebar items={item.items} depth={depth + 1} />
          ) : null}
        </>
      ))}
    </div>
  );
}

export default Sidebar;

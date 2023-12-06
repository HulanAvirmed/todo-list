"use client";

import React, { useState } from "react";
import { styled } from "@mui/system";
import { Checkbox, ListItem as MuiListItem, Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const ListItem = ({ onUpdate, onDelete, data, children, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: "10px", background: "#0a1952" }}
    >
      <MuiListItem
        secondaryAction={
          <>
            <EditButton data={data} onUpdate={onUpdate} />
            <DeleteButton dataId={data.id} onDelete={onDelete} />
          </>
        }
        {...props}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple={true}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<TaskAltIcon />}
            //   checked={checked}
            onClick={() => setChecked(!checked)}
          />
        </ListItemIcon>
        <ListItemText>{children}</ListItemText>
      </MuiListItem>
    </Paper>
  );
};

export default ListItem;

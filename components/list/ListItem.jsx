"use client";

import React, { useState } from "react";
import { Checkbox, ListItem as MuiListItem, Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const ListItem = ({
  onUpdate,
  onDelete,
  onCompleted,
  data,
  children,
  ...props
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: "10px", background: "#0a1952" }}
    >
      <MuiListItem
        disableGutters={true}
        secondaryAction={
          <>
            <EditButton data={data} onUpdate={onUpdate} />
            <DeleteButton
              dataId={data.id}
              onDelete={onDelete}
              sx={{ margin: "0 5px 0 0" }}
            />
          </>
        }
        {...props}
      >
        <ListItemIcon sx={{ marginLeft: "10px", minWidth: "0px" }}>
          <Checkbox
            checked={data.completed}
            edge="start"
            disableRipple={true}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<TaskAltIcon />}
            onClick={() => onCompleted(data.id)}
          />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            sx: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              paddingRight: "20px",
            },
          }}
          sx={{
            textDecoration: data.completed ? "line-through" : "normal",
          }}
        >
          {children}
        </ListItemText>
      </MuiListItem>
    </Paper>
  );
};

export default ListItem;

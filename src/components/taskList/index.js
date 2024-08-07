import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DataTable from "../common/table/index";
import ConfirmModal from "../common/confirmModel";
import EditTask from "../editTask";
const tasks = [
  {
    id: 13,
    title: "example",
    description: "sample description text",
    status: "In Progress",
  },
  {
    id: 14,
    title: "project",
    description: "detailed explanation for the project",
    status: "Completed",
  },
  {
    id: 15,
    title: "task",
    description: "pending task for the week",
    status: "To Do",
  },
  {
    id: 16,
    title: "assignment",
    description: "important assignment to finish",
    status: "To Do",
  },
  {
    id: 17,
    title: "operation",
    description: "ongoing operational task",
    status: "In Progress",
  },
  {
    id: 18,
    title: "goal",
    description: "setting goals for the team",
    status: "Completed",
  },
  {
    id: 19,
    title: "mission",
    description: "execute the new mission plan",
    status: "In Progress",
  },
  {
    id: 20,
    title: "strategy",
    description: "developing new strategies for improvement",
    status: "To Do",
  },
  {
    id: 21,
    title: "plan",
    description: "creating a new action plan",
    status: "To Do",
  },
  {
    id: 22,
    title: "analysis",
    description: "analyzing recent market trends",
    status: "Completed",
  },
];

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [dataToDel, setDataToDel] = useState({});
  const [isTaskEdit, setIsTaskEdit] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleEdit = (task) => {
    setIsTaskEdit(true);
    setEditTask(task);
  };
  const handleUpdateTask = (task) => {
    console.log(task);
  };
  const handleDelete = (data) => {
    setOpen(true);
    setDataToDel(data);
  };
  const handleDeleteConfirm = () => {
    setOpen(false);
  };
  const handleDeleteCancel = () => {
    setOpen(false);
    setDataToDel({});
  };
  const taskHeaders = [
    {
      label: "Title",
      key: "title",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Status",
      key: "status",
    },
    {
      label: "Actons",
      isButton: true,
      align: "center",
      buttonArray: [
        {
          label: "Edit",
          type: "icon",
          icon: (
            <ModeEditOutlinedIcon
              sx={{ cursor: "pointer", color: "rgba(31, 31, 31, 0.5)" }}
            />
          ),
          handler: handleEdit,
        },
        {
          label: "Delete",
          type: "icon",
          icon: (
            <DeleteOutlineOutlinedIcon
              sx={{ cursor: "pointer", color: "rgba(31, 31, 31, 0.5)" }}
            />
          ),
          handler: handleDelete,
        },
      ],
    },
  ];
  return (
    <>
      {/* <Box sx={{ p: 2 }}> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTable
            data={{
              headers: taskHeaders,
              rows: tasks,
            }}
          />
        </Grid>
      </Grid>
      {/* </Box> */}
      {isTaskEdit && (
        <EditTask
          open={isTaskEdit}
          handleClose={() => setIsTaskEdit(false)}
          task={editTask}
          handleSave={(data) => handleUpdateTask(data)}
        />
      )}
      {open && (
        <ConfirmModal
          isOpen={open}
          handleCancel={handleDeleteCancel}
          handleConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
};

export default Tasks;

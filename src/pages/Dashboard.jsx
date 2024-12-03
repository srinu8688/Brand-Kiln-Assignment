import React from "react";
import { Box, Typography } from "@mui/material";
import TaskList from "../components/TaskList"; 
import AddTaskForm from "../components/AddTaskForm";

const Dashboard = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Task Management Dashboard
      </Typography>
      <AddTaskForm />
      <TaskList />
    </Box>
  );
};

export default Dashboard;
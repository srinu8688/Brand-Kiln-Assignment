import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTaskForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

 
  const handleAddTask = () => {
    if (title && dueDate) {
      dispatch(addTask({ title, description, dueDate })); 
      setTitle("");         
      setDescription("");   
      setDueDate("");       
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      {/* Task Title Input */}
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      {/* Description Input */}
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />

      {/* Due Date Input */}
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }} 
      />

     
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;


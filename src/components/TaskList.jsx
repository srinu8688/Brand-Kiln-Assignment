import React, { useState } from "react";
import {
  List,
  ListItem,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Delete, CheckCircle, Edit } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion, editTask } from "../store/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", dueDate: "" });

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  const handleEditOpen = (task) => {
    setEditingTask(task);
    setEditForm({ title: task.title, description: task.description, dueDate: task.dueDate });
  };

  const handleEditClose = () => {
    setEditingTask(null);
    setEditForm({ title: "", description: "", dueDate: "" });
  };

  const handleEditSave = () => {
    dispatch(editTask({ id: editingTask.id, updates: editForm }));
    handleEditClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: task.completed ? "line-through" : "none",
              padding: "1rem 0", 
              borderBottom: "1px solid #f0f0f0", 
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10rem", 
                flexGrow: 1,
                minWidth: "0", 
              }}
            >
              <Typography
                variant="h6"
                style={{
                  flex: "1",
                  textAlign: "left",
                  minWidth: "150px",
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {task.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  flex: "2",
                  textAlign: "left",
                  minWidth: "200px",
                  maxWidth: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {task.description}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                style={{
                  flex: "1",
                  textAlign: "left",
                  minWidth: "100px",
                  maxWidth: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Due: {task.dueDate}
              </Typography>
            </div>

            <div>
              <IconButton onClick={() => handleComplete(task.id)}>
                <CheckCircle color={task.completed ? "success" : "default"} />
              </IconButton>
              <IconButton onClick={() => handleEditOpen(task)}>
                <Edit color="primary" />
              </IconButton>
              <IconButton onClick={() => handleDelete(task.id)}>
                <Delete color="error" />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>

  
      {editingTask && (
        <Dialog open={Boolean(editingTask)} onClose={handleEditClose}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              name="title"
              value={editForm.title}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={editForm.description}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Due Date"
              name="dueDate"
              type="date"
              value={editForm.dueDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditSave} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default TaskList;


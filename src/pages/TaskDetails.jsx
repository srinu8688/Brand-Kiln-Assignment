import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector(state => state.tasks.tasks.find(task => task.id === Number(id)));

  if (!task) {
    return <Typography variant="h6">Task not found</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="caption">Due Date: {task.dueDate}</Typography>
    </Box>
  );
};

export default TaskDetails;
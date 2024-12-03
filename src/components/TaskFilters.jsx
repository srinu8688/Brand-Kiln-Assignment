import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/taskSlice';
import { Button, ButtonGroup } from '@mui/material';

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup variant="contained">
      <Button onClick={() => dispatch(setFilter('all'))}>All</Button>
      <Button onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
      <Button onClick={() => dispatch(setFilter('pending'))}>Pending</Button>
      <Button onClick={() => dispatch(setFilter('overdue'))}>Overdue</Button>
    </ButtonGroup>
  );
};

export default TaskFilters;

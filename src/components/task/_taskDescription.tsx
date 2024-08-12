import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const {
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  } = props

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;

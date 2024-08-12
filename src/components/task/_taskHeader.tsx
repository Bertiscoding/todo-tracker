import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { 
    title="Task Title",
    date= new Date()
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(date, 'PPP')} />
      </Box>
    </Box>
  );
};

export default TaskHeader;

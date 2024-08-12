import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './_taskHeader';

const Task: FC = (): ReactElement => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={2}
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light"
      }}
    >
      <TaskHeader />
    </Box>
  );
};

export default Task;

import React, { FC, ReactElement } from "react";
import { Grid, Box } from "@mui/material"
import { format } from "date-fns";

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks Due On{' '}{ format(new Date(), "PPPP") }</h2>
      </Box>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>Counter</Box>
          <Box>Counter</Box>
          <Box>Counter</Box>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Box>Tasks will appear over here</Box>
          <Box>Tasks will appear over here</Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default TaskArea

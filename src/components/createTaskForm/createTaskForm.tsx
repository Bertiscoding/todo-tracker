import React, {FC, ReactElement} from "react"
import { Box, Typography, Stack } from "@mui/material"
import TaskTitleField from "./_taskTitleField";
import TaskDescriptionField from "./_taskDescriptionField";

const CreateTaskForm: FC = (): ReactElement => {
  return (
   <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      px={4}
      my={6}
    >
    <Typography variant="h6" component="h2" mb={2}>Create A Task</Typography>
    <Stack sx={{width: "100%"}} spacing={2}>
      <TaskTitleField disabled={false} />
      <TaskDescriptionField disabled={false} />
    </Stack>
   </Box>
  )
}
export default CreateTaskForm;

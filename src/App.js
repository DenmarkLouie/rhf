import * as React from "react";
import { Alert, Button, Grid, Paper, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Box, Stack } from "@mui/system";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        sx={{
          width: 800,
          height: 400,
        }}
      >
        <Paper elevation={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} direction={"column"}>
              <TextField defaultValue="test" {...register("example")} />

              <TextField {...register("exampleRequired", { required: true })} />

              {errors.exampleRequired && (
                <Alert severity="warning">This field is required</Alert>
              )}

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Grid>
  );
}
export default App;

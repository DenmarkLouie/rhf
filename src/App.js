import * as React from "react";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box, Stack } from "@mui/system";

function App({
  values = {
    name: "Denmark",
    hobbies: [],
  },
}) {
  const [index, setIndex] = React.useState(Object.keys(values.hobbies));

  const { register, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: values,
  });

  const removeField = (indx) => {
    setIndex(index.filter((i) => indx !== i));
  };

  const addField = () => {
    setIndex([...index, index.length + 1]);
  };

  const onSubmit = (data) =>
    console.log({
      name: data.values.name,
      hobbies: Object.values(data.hobbies),
    });

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
          <Stack padding={3} spacing={2} direction={"column"}>
            <Button variant="contained" onClick={() => addField()}>
              Add Field +
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} direction={"column"}>
                <TextField
                  defaultValue={values.name}
                  {...register(`values.name`)}
                />
                <strong>Hobbies:</strong>

                {index.map((ind) => (
                  <Container key={ind}>
                    <Stack padding={2} direction={"row"}>
                      <TextField
                        fullWidth
                        {...register(`hobbies[${ind}].desc`, {
                          required: true,
                        })}
                      />

                      <Button onClick={() => removeField(ind)}>Delete</Button>
                    </Stack>
                  </Container>
                ))}
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Box>
    </Grid>
  );
}
export default App;

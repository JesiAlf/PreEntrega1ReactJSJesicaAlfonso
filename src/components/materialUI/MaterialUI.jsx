import { Box, Button, Grid, TextField } from "@mui/material";

const MaterialUI = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        backgroundColor: { md: "hsl(305, 51%, 48%)", xs: "blueviolet" },
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={2}
      >
        <Grid item xs={9} md={7}>
          <h1>Arte Alfonso</h1>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={9} md={7}>
          <TextField label="Contraseña" fullWidth />
        </Grid>
        <Grid item md={7}>
          <Button
            variant={"contained"}
            sx={{ display: { xs: "flex", md: "flex" } }}
          >
            Iniciar sesión
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MaterialUI;

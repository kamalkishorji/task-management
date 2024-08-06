import { Grid } from "@mui/material";
import TaskAppBar from "./components/common/appBar";
import Layout from "./components/layout";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TaskAppBar />
      </Grid>
      <Grid item xs={12}>
        <Layout />
      </Grid>
    </Grid>
  );
}

export default App;

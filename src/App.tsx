import { Box, Grid } from '@material-ui/core';
import Casa from './components/casa/casa';
import Article from './components/list/article';

function App() {

  return (
    <>
      <Box bgcolor='#f5f5f5'>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Article />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Box mt={10}>
          <Casa />
        </Box>
        <Box pb={20} />
      </Box>
    </>
  );
}

export default App;

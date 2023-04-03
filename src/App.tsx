import { Grid } from '@material-ui/core';
import Article from './components/list/article';

function App() {

  return (
    <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Article />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default App;

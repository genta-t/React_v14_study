import { Box } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Article() {

  return (
    <>
      <Box marginRight={0.5}>
        <StarOutlineIcon style={{ fontSize: 16 }}/>
        <StarOutlineIcon style={{ fontSize: 16 }}/>
        <StarOutlineIcon style={{ fontSize: 16 }}/>
        <StarOutlineIcon style={{ fontSize: 16 }}/>
        <StarOutlineIcon style={{ fontSize: 16 }}/>
      </Box>
    </>
  );
}

export default Article;

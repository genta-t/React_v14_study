import { Box } from '@material-ui/core';

type TagTypes = {
  name: string;
};

function Tag(props: TagTypes) {
  const { name } = props;

  return (
    <>
      <Box
        bgcolor='#eeeeee'
        color='#1f2833'
        display='inline-block'
        paddingY='3px'
        paddingX='6px'
        fontSize='14px'
        marginBottom='4px'
        letterSpacing='1px'
        lineHeight='20px'
        borderRadius='8px'
        marginRight='4px'
      >
        {name}
      </Box>
    </>
  );
}

export default Tag;

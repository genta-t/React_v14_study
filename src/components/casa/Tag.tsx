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
        paddingY={0.5}
        paddingX={0.8}
        fontSize={14}
        marginBottom={0.5}
        letterSpacing={1}
        lineHeight={1.4}
        borderRadius={8}
        marginRight={0.6}
      >
        {name}
      </Box>
    </>
  );
}

export default Tag;

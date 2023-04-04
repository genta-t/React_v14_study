import { Box } from '@material-ui/core';

type TopIconType = {
  image: string;
};

function TopIcon(props: TopIconType) {
  const { image } = props;

  return (
    <>
      <Box width='50px' position='absolute' top={-25} left={25}>
        <img src={image} width='100%' />
      </Box>
    </>
  );
}

export default TopIcon;

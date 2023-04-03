import { Box } from '@material-ui/core';

type ImageType = {
  image: string,
};

function Banner(props: ImageType) {
  const { image } = props;
  return (
    <>
      <Box bgcolor="#f2f2f2f2" margin="8px 0">
        <Box alignItems="center" width="95%" margin="0 auto">
          <img src={image} width="142" />
        </Box>
      </Box>
    </>
  );
}

export default Banner;

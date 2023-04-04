import { Box } from '@material-ui/core';

type TitleType = {
  title: string,
  color: string,
}
function Title(props: TitleType) {
  const { title, color } = props;

  return (
    <>
      <Box
        color={color}
        fontSize='26px'
        letterSpacing='3px'
        marginBottom='20px'
        lineHeight='36px'
        fontWeight={900}
      >
        {title}
      </Box>
    </>
  );
}

export default Title;

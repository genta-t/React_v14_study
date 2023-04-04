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
        fontSize={26}
        letterSpacing={1}
        marginBottom={2.5}
        lineHeight={1.4}
        fontWeight={900}
      >
        {title}
      </Box>
    </>
  );
}

export default Title;

import { Box } from '@material-ui/core';

type TitleType = {
  name: string,
};

function Title(props: TitleType) {
  const { name } = props;

  return (
    <>
      <Box marginBottom={0.5} fontWeight={900} fontSize={20} display={'inline'}>
        {name}
      </Box>
    </>
  );
}

export default Title;

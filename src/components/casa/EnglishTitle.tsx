import { Box } from '@material-ui/core';

type EnglishTitleType = {
  title: string;
};

function EnglishTitle(props: EnglishTitleType) {
  const { title } = props;
  return (
    <>
      <Box color='#999999' fontSize={14} marginBottom={0.5}>{title}</Box>
    </>
  );
}

export default EnglishTitle;

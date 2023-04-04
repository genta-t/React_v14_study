import { Box } from '@material-ui/core';

type EnglishTitleType = {
  title: string;
};

function EnglishTitle(props: EnglishTitleType) {
  const { title } = props;
  return (
    <>
      <Box color='#999999' fontSize='14px' marginBottom='4px'>{title}</Box>
    </>
  );
}

export default EnglishTitle;

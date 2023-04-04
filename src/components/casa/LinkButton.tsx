import { Box } from '@material-ui/core';

type LinkButtonTypes = {
  bgcolor: string;
  name: string;
  link: string;
}

function LinkButton(props: LinkButtonTypes) {
  const { bgcolor, name, link } = props;

  return (
    <>
      <a href={link}>
        <Box zIndex={10} >
          <Box
            style={{ boxShadow: `0 4px 25px 0 ${bgcolor}` }}
            bgcolor={bgcolor}
            color='#FFFFFF'
            display='inline-block'
            paddingY='12px'
            paddingX='24px'
            fontSize='14px'
            fontWeight={900}
            lineHeight='20px'
            borderRadius='32px'
            position='relative' top={55} left={45}
          >
            {name}　　→
          </Box>
        </Box>
      </a>
    </>
  );
}

export default LinkButton;

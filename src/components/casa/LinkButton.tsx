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
            paddingY={1.5}
            paddingX={3}
            fontSize={14}
            fontWeight={900}
            marginBottom={0.5}
            lineHeight={1.4}
            borderRadius={32}
            marginRight={1}
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

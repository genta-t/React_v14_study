import { Box } from '@material-ui/core';

type ItemIconType = {
  iconName: string,
  iconBgcolor: string,
};

function ItemIcon(props: ItemIconType) {
  const {
    iconName,
    iconBgcolor,
  } = props;
  
  return (
    <>
      <Box color={"#ffffff"} bgcolor={iconBgcolor} display="inline-block" paddingX={1} paddingY={0.2} fontSize={11} borderRadius={5} marginRight={0.5}>
        {iconName}
      </Box>
    </>
  );
}

export default ItemIcon;

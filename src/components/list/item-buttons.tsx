import { useState } from 'react';
import { Box, Grid } from '@material-ui/core';

function ItemButtons() {
  const [ pointImg, setPointImg ] = useState("/images/btn_getpoint.png")
  const [ bookmarkImg, setBookmarkImg ] = useState("/images/button_bookmark.png")

  return (
    <>
      <Box 
        onMouseEnter={() => setPointImg("/images/btn_getpoint_light.png")}
        onMouseLeave={() => setPointImg("/images/btn_getpoint.png")}
      >
        <img src={pointImg} alt="image" width="153" />
      </Box>
      <Box bgcolor="#ededed" borderRadius={6} display="flex" alignItems="center" padding={0.4} marginTop={0.4}>
        <Box marginRight={0.5} marginTop={0.2}>
          <img src="/images/icon_serviceinfo.png" width="25" />
        </Box>
        <Box fontSize={10}>
          この広告は、お買い物安心保証対象です。
        </Box>
      </Box>
      <Box width="95%" margin="0 auto" marginTop={0.8} marginLeft={1}>
        <Grid container alignItems="center">
          <Grid item xs={9}>
            <Box fontSize={12}>
              お気に入りに追加
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box 
              onMouseEnter={() => setBookmarkImg("/images/button_bookmark_light.png")}
              onMouseLeave={() => setBookmarkImg("/images/button_bookmark.png")}
            >
              <img src={bookmarkImg} alt="image" width="30" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ItemButtons;

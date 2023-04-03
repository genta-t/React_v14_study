import { Box, Grid } from '@material-ui/core';
import Banner from './banner';
import ItemButtons from './item-buttons';
import ItemIcon from './ItemIcon';
import Title from './Title';
import Reviews from './Reviews';
import JudgmentPeriod from './JudgmentPeriod';
import Evaluation from './Evaluation';

type InfoType = {
  name: string,
  numberOfReviews: number,
  judgmentPeriod: string,
  image: string,
  itemIcon: ItemIconType,
};

type ItemIconType = {
  name: string,
  bgcolor: string,
};

function Article() {

  const itemInfo: InfoType[] = [
    {
      name: 'ショッピング',
      numberOfReviews: 627,
      judgmentPeriod: '入金確認後約90日〜180日　(通帳記載の目安　約3日)',
      image: '/images/monologo4.jpg',
      itemIcon: {
        name: 'あんしん保証',
        bgcolor: '#95b200',
      },
    },
    {
      name: 'ニトリ',
      numberOfReviews: 500,
      judgmentPeriod: '入金確認後約90日〜180日　(通帳記載の目安　約9日)',
      image: '/images/nitori.jpg',
      itemIcon: {
        name: 'くり返しOK', 
        bgcolor: '#00d6ff',
      }
    },
  ]

  return (
    <>
      {itemInfo.map((i: InfoType) => {
        return(
          <Box marginTop={6}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Banner image={i.image} />
              </Grid>
              <Grid item xs={8} >
                <Box alignItems="center" width="95%" margin="0 auto">
                  <Title name={i.name}/>
                  <Box fontSize={10} display="flex" marginBottom={0.5}>
                    <Evaluation />
                    <Reviews numberOfReviews={i.numberOfReviews} />
                  </Box>
                  <Box marginBottom={2}>
                  {/* {i.map((icon: any) => {
                    <ItemIcon iconName={icon.name} iconBgcolor={icon.bgcolor} />
                  })} */}
                    <ItemIcon iconName={'くり返しOK'} iconBgcolor={'#00d6ff'} />
                  </Box>
                  <Box border={1} borderColor={"#ffe5cb"} borderRadius={6}>
                    <Box display="flex" justifyContent="center">
                      <Box width="90%" paddingY={1} fontSize={14}>
                        <Box display="flex">
                          <Box marginRight={0.6}>商品購入で</Box>
                          <Box fontSize={18} color="#ff007f" fontWeight={900} marginRight={0.6}>1</Box>
                          {/* <Box style={{fontSize: OOAray[0].fS ,color:fc, fontWeight:fw}}>こんにちは</Box> */}
                          <Box fontWeight={900} marginRight={0.6} marginTop={0.1}>%</Box>
                          <Box marginRight={0.6}>＋</Box>
                          <Box>宝くじ交換券１枚</Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" bgcolor="#ffe5cb" borderRadius="0 0 6px 6px">
                      <Box width="90%">
                        <JudgmentPeriod judgmentPeriod={i.judgmentPeriod}/>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <ItemButtons />
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </>
  );
}

export default Article;

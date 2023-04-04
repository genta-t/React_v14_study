import { Box, Grid } from '@material-ui/core';
import EnglishTitle from './EnglishTitle';
import LinkButton from './LinkButton';
import Tag from './Tag';
import Title from './Title';
import TopIcon from './TopIcon';
import TopImage from './TopImage';

type CasaType ={
  topIconImage: string;
  topImage: string;
  englishTitle: string;
  mainTitle: TitleType;
  tagItems: TagsTypes[];
  buttonItems: LinkButtonTypes
};

type TagsTypes = {
  name: string;
};

type LinkButtonTypes = {
  bgcolor: string;
  name: string;
  link: string;
};

type TitleType = {
  title: string;
  color: string;
}

function Casa() {
  const casaItems: CasaType[] = [
    {
      topIconImage: '/images/service-icon-01.png',
      topImage: '/images/service-01.jpg',
      englishTitle: 'Service for User',
      mainTitle: {
        title: '入居者さま向け',
        color: '#4e9100',
      },
      tagItems: [
        {
          name: '保証サービス',
        },
        {
          name: '優待サービス',
        },
        {
          name: '居住支援法人',
        },
      ],
      buttonItems: {
        bgcolor: '#4e9100',
        name: '詳しくはこちら',
        link: '#',
      },
    },
    {
      topIconImage: '/images/service-icon-02.png',
      topImage: '/images/service-02.jpg',
      englishTitle: 'Service for Owner',
      mainTitle: {
        title: 'オーナーさま向け',
        color: '#575cb9',
      },
      tagItems: [
        {
          name: '空室解消',
        },
        {
          name: '家賃管理',
        },
        {
          name: 'リフォーム',
        },
        {
          name: '大家の窓口',
        },
      ],
      buttonItems: {
        bgcolor: '#575cb9',
        name: '詳しくはこちら',
        link: '#',
      },
    },
    {
      topIconImage: '/images/service-icon-03.png',
      topImage: '/images/service-03.jpg',
      englishTitle: 'Service for User',
      mainTitle: {
        title: '不動産会社さま向け',
        color: '#876850',
      },
      tagItems: [
        {
          name: '業務効率改善',
        },
        {
          name: '滞納リスク軽減',
        },
      ],
      buttonItems: {
        bgcolor: '#876850',
        name: '詳しくはこちら',
        link: '#',
      },
    },
  ]
  return (
    <>
      <Box width='100%'>
        <Box width='95%' maxWidth='1400px' margin='0 auto'>
          <Grid container>
            {casaItems.map((c: CasaType) => {
              return(
                <Grid item xs={4}>
                  <Box width='430px' height='500px' bgcolor='#FFFFFF' position='relative'>
                    <TopIcon image={c.topIconImage}/>
                    <TopImage image={c.topImage} />
                    <Box marginTop='24px'>
                      <Box margin='0 auto' width='80%'>
                        <EnglishTitle title={c.englishTitle} />
                        <Title title={c.mainTitle.title} color={c.mainTitle.color}/>
                        <Box display='flex' flexWrap='wrap'>
                          {c.tagItems.map((t: TagsTypes) => {
                            return(
                              <Tag name={t.name} />
                            )
                          })}
                        </Box>
                      </Box>
                      <LinkButton
                        bgcolor={c.buttonItems.bgcolor}
                        name={c.buttonItems.name}
                        link={c.buttonItems.link}
                      /> 
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Casa;

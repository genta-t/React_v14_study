import { Box } from '@material-ui/core';

type ReviewsType = {
  numberOfReviews: number,
};

function Reviews(props: ReviewsType) {
  const { numberOfReviews } = props;

  return (
    <>
      <Box marginTop={0.1}>
        レビュー件数：{numberOfReviews}件
      </Box>
    </>
  );
}

export default Reviews;

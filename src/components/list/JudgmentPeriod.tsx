import { Box } from '@material-ui/core';

type JudgmentType = {
  judgmentPeriod: string,
};

function JudgmentPeriod(props: JudgmentType) {
  const { judgmentPeriod } = props;

  return (
    <>
      <Box fontSize={12}>
        判定までの期間：{judgmentPeriod}
      </Box>
    </>
  );
}

export default JudgmentPeriod;

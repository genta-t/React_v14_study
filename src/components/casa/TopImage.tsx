type TopImageType = {
  image: string;
};

function TopImage(props: TopImageType) {
const { image } = props;

  return (
    <>
      <img src={image} width='100%'/> 
    </>
  );
}

export default TopImage;

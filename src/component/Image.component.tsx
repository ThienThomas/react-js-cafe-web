const Image = (props: {
  src: string | any;
  height: string | number;
  width: string | number;
  containerTwClass?: string;
  className?: string;
}) => {
  const { src, height, width, containerTwClass, className } = props;
  return (
    <div className={containerTwClass ?? ''}>
      <img src={src} height={height} width={width} className={className} />
    </div>
  );
};

export default Image;

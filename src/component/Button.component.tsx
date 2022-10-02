const Button = (props: {
  className?: string;
  onClick?: () => void;
  children?: string | JSX.Element;
  style?: string;
}) => {
  const { className, onClick, children } = props;
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

export default Button;

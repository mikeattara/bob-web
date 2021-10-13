const SearchIcon = ({ size, color, ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      width={size}
      height={size}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 32 32'
      {...rest}
    >
      <path
        d='M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z'
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;